
import React, { useState, useRef, useEffect } from 'react';
import { Camera, Upload, Sparkles, Wand2, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import CameraCapture from '@/components/story-dice/CameraCapture';
import StoryDisplay from '@/components/story-dice/StoryDisplay';
import { generateStoryFromImage } from '@/lib/story-generator';

interface Character {
  name: string;
  description: string;
}

interface StoryData {
  characters: Character[];
  story: string;
}

const StoryDice: React.FC = () => {
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [storyData, setStoryData] = useState<StoryData | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleImageCapture = (imageData: string) => {
    setCapturedImage(imageData);
    setShowCamera(false);
    setStoryData(null);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file size (10MB max)
    if (file.size > 10 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please select an image smaller than 10MB",
        variant: "destructive"
      });
      return;
    }

    // Validate file type
    if (!file.type.startsWith('image/')) {
      toast({
        title: "Invalid file type",
        description: "Please select an image file",
        variant: "destructive"
      });
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const imageData = e.target?.result as string;
      setCapturedImage(imageData);
      setStoryData(null);
    };
    reader.readAsDataURL(file);
  };

  const generateStory = async () => {
    if (!capturedImage) return;

    setIsGenerating(true);
    try {
      const result = await generateStoryFromImage(capturedImage);
      setStoryData(result);
      toast({
        title: "✨ Magic Complete!",
        description: "Your story has been generated!"
      });
    } catch (error) {
      console.error('Story generation failed:', error);
      toast({
        title: "Oops! Magic failed",
        description: "Please try again in a moment",
        variant: "destructive"
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const resetApp = () => {
    setCapturedImage(null);
    setStoryData(null);
    setShowCamera(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 relative overflow-hidden">
      {/* Floating Bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 60 + 20}px`,
              height: `${Math.random() * 60 + 20}px`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent mb-4">
            ✨ ZANS Story Dice ✨
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-medium">
            🎲 AI-Powered Story Generator 🎲
          </p>
          <p className="text-lg text-white/80 mt-2">
            Take a photo of your story dice and watch magic happen! 🪄
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {showCamera ? (
            <CameraCapture
              onCapture={handleImageCapture}
              onClose={() => setShowCamera(false)}
            />
          ) : !capturedImage ? (
            /* Landing Page */
            <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8 text-center">
              <div className="mb-8">
                <Sparkles className="h-16 w-16 text-yellow-300 mx-auto mb-4 animate-pulse" />
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  🌟 Ready for Magic? 🌟
                </h2>
                <p className="text-white/90 text-lg mb-8">
                  Capture your story dice and let AI weave an amazing tale! 📚✨
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Button
                  onClick={() => setShowCamera(true)}
                  size="lg"
                  className="h-16 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                >
                  <Camera className="h-6 w-6 mr-2" />
                  📸 Take Photo
                </Button>

                <Button
                  onClick={() => fileInputRef.current?.click()}
                  size="lg"
                  variant="outline"
                  className="h-16 bg-white/10 border-white/30 text-white font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all backdrop-blur-sm"
                >
                  <Upload className="h-6 w-6 mr-2" />
                  📁 Upload Image
                </Button>
              </div>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
            </Card>
          ) : !storyData ? (
            /* Image Preview & Generate */
            <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  🎲 Your Story Dice 🎲
                </h2>
              </div>

              <div className="relative mb-8">
                <img
                  src={capturedImage}
                  alt="Story Dice"
                  className="w-full max-w-md mx-auto rounded-lg shadow-lg border-4 border-white/30"
                />
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-pulse" />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-pulse" />
              </div>

              <div className="text-center space-y-4">
                <Button
                  onClick={generateStory}
                  disabled={isGenerating}
                  size="lg"
                  className="h-16 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold text-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all px-8"
                >
                  {isGenerating ? (
                    <>
                      <Wand2 className="h-6 w-6 mr-2 animate-spin" />
                      ✨ Creating Magic...
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-6 w-6 mr-2" />
                      🪄 Generate Magical Story
                    </>
                  )}
                </Button>

                <Button
                  onClick={resetApp}
                  variant="outline"
                  size="lg"
                  className="h-12 bg-white/10 border-white/30 text-white font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all backdrop-blur-sm"
                >
                  <RotateCcw className="h-5 w-5 mr-2" />
                  🔄 Try Another
                </Button>
              </div>
            </Card>
          ) : (
            /* Story Display */
            <StoryDisplay
              storyData={storyData}
              onReset={resetApp}
              capturedImage={capturedImage}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default StoryDice;
