
import React, { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import CameraCapture from './CameraCapture';
import StoryDisplay from './StoryDisplay';
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { generateObject, streamText } from 'ai';
import { z } from 'zod';

interface StoryData {
  characters: string[];
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

      const characters = analysisResult.object.characters || ['a brave knight', 'a flying unicorn', 'a mysterious cave'];
      console.log('Extracted characters:', characters);

      setStoryData({ characters, story: '' });
      setIsAnalyzing(false);
      setIsGeneratingStory(true);

      const storyStream = await streamText({
        model: gemini,
        prompt: `You are a friendly AI story weaver for children. Using these 3 elements: ${characters.join(', ')}, write a magical story for children aged 5–10. The story should be 3–5 paragraphs long, lighthearted, fun, and imaginative. Make sure the characters have names and go on an adventure together. Keep the story family-friendly and appropriate for young children. Return only the story text, no title or introduction. Maximum 800 words.`
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

  const handleNewPicture = useCallback(() => {
    setCapturedImage(null);
    setImageFile(null);
    setStoryData(null);
    if (capturedImage) {
      URL.revokeObjectURL(capturedImage);
    }
  }, [capturedImage]);

  const isLoading = isAnalyzing || isGeneratingStory;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 p-3 sm:p-6 relative overflow-hidden">
      {/* Enhanced Floating Bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-8 h-8 sm:w-16 sm:h-16 md:w-24 md:h-24 bg-white/10 rounded-full animate-pulse blur-sm"></div>
        <div className="absolute top-[20%] right-[15%] w-4 h-4 sm:w-8 sm:h-8 md:w-12 md:h-12 bg-yellow-300/20 rounded-full animate-bounce blur-sm"></div>
        <div className="absolute top-[60%] left-[5%] w-6 h-6 sm:w-12 sm:h-12 md:w-20 md:h-20 bg-pink-300/15 rounded-full animate-pulse blur-sm delay-500"></div>
        <div className="absolute bottom-[20%] right-[20%] w-10 h-10 sm:w-20 sm:h-20 md:w-32 md:h-32 bg-blue-300/10 rounded-full animate-bounce blur-sm delay-1000"></div>
        <div className="absolute top-[40%] right-[5%] w-3 h-3 sm:w-6 sm:h-6 md:w-10 md:h-10 bg-green-300/20 rounded-full animate-pulse blur-sm delay-300"></div>
        <div className="absolute bottom-[40%] left-[15%] w-7 h-7 sm:w-14 sm:h-14 md:w-28 md:h-28 bg-purple-300/15 rounded-full animate-bounce blur-sm delay-700"></div>
      </div>

      <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 md:space-y-8 relative z-10">
        {/* Mobile-Optimized Header */}
        <div className="text-center space-y-3 sm:space-y-4 md:space-y-6 py-4 sm:py-6 md:py-8">
          <div className="relative">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent drop-shadow-2xl leading-tight px-2">
              🎲 ZANS Story Dice ✨
            </h1>
            <div className="absolute -top-1 -left-1 sm:-top-2 sm:-left-2 md:-top-4 md:-left-4 w-4 h-4 sm:w-8 sm:h-8 md:w-16 md:h-16 bg-yellow-300/70 rounded-full animate-pulse blur-sm"></div>
            <div className="absolute -bottom-1 -right-2 sm:-bottom-2 sm:-right-3 md:-bottom-2 md:-right-6 w-3 h-3 sm:w-6 sm:h-6 md:w-12 md:h-12 bg-pink-300/60 rounded-full animate-pulse delay-1000 blur-sm"></div>
          </div>
          <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-white font-bold max-w-3xl mx-auto leading-relaxed px-4">
            📸 Take a photo of your story dice and watch AI create 
            <span className="text-yellow-200"> magical adventures </span>
            just for you! ✨
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm md:text-lg px-4">
            <span className="bg-white/20 backdrop-blur-lg px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 rounded-full text-white font-semibold border border-white/30 shadow-lg">
              📷 Capture
            </span>
            <span className="bg-white/20 backdrop-blur-lg px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 rounded-full text-white font-semibold border border-white/30 shadow-lg">
              🤖 AI Magic
            </span>
            <span className="bg-white/20 backdrop-blur-lg px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 rounded-full text-white font-semibold border border-white/30 shadow-lg">
              📚 Story Time
            </span>
          </div>
        </div>

        {/* Main Content */}
        {!storyData ? (
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            <div className="bg-white/15 backdrop-blur-xl rounded-xl sm:rounded-2xl md:rounded-3xl p-3 sm:p-4 md:p-8 border border-white/30 shadow-2xl">
              <CameraCapture 
                onImageCapture={handleImageCapture}
                capturedImage={capturedImage}
              />
            </div>
            
            {capturedImage && (
              <div className="text-center px-4">
                <Button
                  onClick={analyzeImageAndGenerateStory}
                  disabled={isLoading}
                  className="w-full sm:w-auto h-12 sm:h-16 md:h-20 px-4 sm:px-6 md:px-12 text-sm sm:text-lg md:text-2xl font-black bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 hover:from-emerald-500 hover:via-cyan-500 hover:to-blue-600 text-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none border-2 border-white/30"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2 sm:gap-3">
                      <div className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 border-2 sm:border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span className="text-xs sm:text-sm md:text-base">
                        {isAnalyzing ? '🔍 Analyzing Dice...' : '✍️ Creating Story...'}
                      </span>
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      ✨ Generate Magical Story ✨
                    </span>
                  )}
                </Button>
              </div>
            )}
          </div>
        ) : (
          <div className="bg-white/15 backdrop-blur-xl rounded-xl sm:rounded-2xl md:rounded-3xl p-3 sm:p-4 md:p-8 border border-white/30 shadow-2xl">
            <StoryDisplay 
              story={storyData.story}
              characters={storyData.characters}
              onNewPicture={handleNewPicture}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default StoryDiceApp;
