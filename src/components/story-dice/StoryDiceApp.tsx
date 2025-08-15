
import React, { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import CameraCapture from './CameraCapture';
import StoryDisplay from './StoryDisplay';
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { generateObject, streamText } from 'ai';
import { z } from 'zod';
import { Camera, Sparkles, Wand2, Book, ArrowDown } from 'lucide-react';

interface Character {
  name: string;
  description: string;
}

interface StoryData {
  characters: Character[];
  story: string;
}

// Rate limiting state
let lastApiCall = 0;
const MIN_CALL_INTERVAL = 2000; // 2 seconds between calls

const StoryDiceApp: React.FC = () => {
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isGeneratingStory, setIsGeneratingStory] = useState(false);
  const [storyData, setStoryData] = useState<StoryData | null>(null);
  const { toast } = useToast();

  // Get API key from environment variable
  const apiKey = import.meta.env.VITE_GOOGLE_AI_API_KEY || 'AIzaSyAzmUR8R2PaE-w5b1ICKq4eUDOEu82b9Xc';

  const handleImageCapture = useCallback((file: File) => {
    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      toast({
        title: "File Too Large",
        description: "Please select an image smaller than 10MB.",
        variant: "destructive"
      });
      return;
    }

    // Validate file type
    if (!file.type.startsWith('image/')) {
      toast({
        title: "Invalid File Type",
        description: "Please select a valid image file.",
        variant: "destructive"
      });
      return;
    }

    setImageFile(file);
    const imageUrl = URL.createObjectURL(file);
    setCapturedImage(imageUrl);
    console.log('Image captured and validated');
  }, [toast]);

  const analyzeImageAndGenerateStory = useCallback(async () => {
    if (!imageFile) {
      toast({
        title: "No Image",
        description: "Please capture or upload an image first.",
        variant: "destructive"
      });
      return;
    }

    // Rate limiting check
    const now = Date.now();
    if (now - lastApiCall < MIN_CALL_INTERVAL) {
      toast({
        title: "Please Wait",
        description: "Please wait a moment before trying again.",
        variant: "destructive"
      });
      return;
    }
    lastApiCall = now;

    // Validate API key
    if (!apiKey || apiKey.length < 10) {
      toast({
        title: "Configuration Error",
        description: "API key is not properly configured.",
        variant: "destructive"
      });
      return;
    }

    setIsAnalyzing(true);
    
    try {
      const base64 = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          const result = reader.result as string;
          resolve(result.split(',')[1]);
        };
        reader.onerror = () => reject(new Error('Failed to read file'));
        reader.readAsDataURL(imageFile);
      });

      console.log('Analyzing image with Gemini Vision...');

      const google = createGoogleGenerativeAI({
        apiKey: apiKey
      });
      const gemini = google('gemini-1.5-flash');

      const analysisResult = await generateObject({
        model: gemini,
        schema: z.object({
          characters: z.array(z.string().max(100)).max(10).describe('List of characters or objects visible on the dice')
        }),
        messages: [
          {
            role: 'user',
            content: [
              {
                type: 'text',
                text: 'You are analyzing an image that shows 3 story dice with embroidered characters. Identify the characters clearly and describe what they represent in kid-friendly terms. Return a JSON object with characters array. Keep descriptions family-friendly and under 100 characters each. Do not include any other text or explanations.'
              },
              {
                type: 'image',
                image: base64,
                mimeType: imageFile.type
              }
            ]
          }
        ]
      });

      const characterNames = analysisResult.object.characters || ['a brave knight', 'a flying unicorn', 'a mysterious cave'];
      console.log('Extracted characters:', characterNames);

      // Convert character names to Character objects
      const characters: Character[] = characterNames.map(name => ({
        name: name,
        description: name
      }));

      setStoryData({ characters, story: '' });
      setIsAnalyzing(false);
      setIsGeneratingStory(true);

      const storyStream = await streamText({
        model: gemini,
        prompt: `You are a friendly AI story weaver for children. Using these 3 elements: ${characterNames.join(', ')}, write a magical story for children aged 5–10. The story should be 3–5 paragraphs long, lighthearted, fun, and imaginative. Make sure the characters have names and go on an adventure together. Keep the story family-friendly and appropriate for young children. Return only the story text, no title or introduction. Maximum 800 words.`
      });

      let generatedStory = '';
      for await (const delta of storyStream.textStream) {
        generatedStory += delta;
        // Validate story length to prevent extremely long content
        if (generatedStory.length > 5000) {
          break;
        }
        setStoryData(prev => prev ? { ...prev, story: generatedStory } : null);
      }

    } catch (error) {
      console.error('Error in analysis and story generation:', error);
      toast({
        title: "Generation Failed",
        description: "Could not analyze the image or generate the story. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsAnalyzing(false);
      setIsGeneratingStory(false);
    }
  }, [imageFile, toast, apiKey]);

  const handleReset = useCallback(() => {
    setCapturedImage(null);
    setImageFile(null);
    setStoryData(null);
    if (capturedImage) {
      URL.revokeObjectURL(capturedImage);
    }
  }, [capturedImage]);

  const isLoading = isAnalyzing || isGeneratingStory;

  return (
    <div className="min-h-screen bg-gradient-to-br from-shiny-blue-50 via-white to-shiny-blue-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] left-[10%] w-32 h-32 bg-shiny-blue-200/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-[60%] right-[15%] w-40 h-40 bg-shiny-blue-300/15 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-[30%] left-[20%] w-24 h-24 bg-shiny-blue-400/10 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-[40%] right-[5%] w-28 h-28 bg-shiny-blue-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '6s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="relative inline-block mb-8">
            <Sparkles className="absolute -top-4 -left-4 w-8 h-8 text-shiny-blue-500 animate-pulse" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-shiny-blue-600 via-shiny-blue-700 to-shiny-blue-800 bg-clip-text text-transparent mb-6 leading-tight">
              ZANS Story Dice
            </h1>
            <Wand2 className="absolute -bottom-4 -right-4 w-8 h-8 text-shiny-blue-500 animate-pulse" style={{animationDelay: '1s'}} />
          </div>
          
          <p className="text-xl sm:text-2xl text-slate-600 font-medium mb-8 max-w-4xl mx-auto leading-relaxed">
            Capture your story dice and watch AI create magical adventures just for you
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            <div className="flex items-center gap-2 text-slate-700">
              <Camera className="w-5 h-5 text-shiny-blue-500" />
              <span>Capture</span>
            </div>
            <ArrowDown className="w-5 h-5 text-slate-400" />
            <div className="flex items-center gap-2 text-slate-700">
              <Sparkles className="w-5 h-5 text-shiny-blue-500" />
              <span>AI Magic</span>
            </div>
            <ArrowDown className="w-5 h-5 text-slate-400" />
            <div className="flex items-center gap-2 text-slate-700">
              <Book className="w-5 h-5 text-shiny-blue-500" />
              <span>Story Time</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        {!storyData ? (
          <div className="space-y-12 animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="backdrop-blur-sm bg-white/70 rounded-3xl p-8 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500">
              <CameraCapture 
                onImageCapture={handleImageCapture}
                capturedImage={capturedImage}
              />
            </div>
            
            {capturedImage && (
              <div className="text-center animate-fade-in" style={{animationDelay: '0.6s'}}>
                <Button
                  onClick={analyzeImageAndGenerateStory}
                  disabled={isLoading}
                  className="group relative overflow-hidden bg-gradient-to-r from-shiny-blue-500 via-shiny-blue-600 to-shiny-blue-700 hover:from-shiny-blue-600 hover:via-shiny-blue-700 hover:to-shiny-blue-800 text-white px-12 py-6 rounded-2xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none border border-shiny-blue-400/50 text-lg font-semibold"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-3 relative z-10">
                      <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>
                        {isAnalyzing ? 'Analyzing Dice...' : 'Creating Story...'}
                      </span>
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-3 relative z-10">
                      <Sparkles className="w-6 h-6" />
                      Generate Magical Story
                      <Wand2 className="w-6 h-6" />
                    </span>
                  )}
                </Button>
              </div>
            )}
          </div>
        ) : (
          <div className="animate-fade-in backdrop-blur-sm bg-white/70 rounded-3xl p-8 shadow-2xl border border-white/50">
            <StoryDisplay 
              storyData={storyData}
              onReset={handleReset}
              capturedImage={capturedImage || ''}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default StoryDiceApp;
