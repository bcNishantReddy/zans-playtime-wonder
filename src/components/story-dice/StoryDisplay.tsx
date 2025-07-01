
import React, { useState, useEffect } from 'react';
import { Copy, Download, Volume2, RotateCcw, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import DOMPurify from 'dompurify';

interface Character {
  name: string;
  description: string;
}

interface StoryData {
  characters: Character[];
  story: string;
}

interface StoryDisplayProps {
  storyData: StoryData;
  onReset: () => void;
  capturedImage: string;
}

const StoryDisplay: React.FC<StoryDisplayProps> = ({ storyData, onReset, capturedImage }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const { toast } = useToast();

  // Typewriter effect
  useEffect(() => {
    const cleanStory = DOMPurify.sanitize(storyData.story);
    let currentIndex = 0;
    const typingSpeed = 50;

    const typeTimer = setInterval(() => {
      if (currentIndex < cleanStory.length) {
        setDisplayedText(cleanStory.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typeTimer);
      }
    }, typingSpeed);

    return () => clearInterval(typeTimer);
  }, [storyData.story]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(storyData.story);
      toast({
        title: "📋 Story Copied!",
        description: "The magical story has been copied to your clipboard"
      });
    } catch (error) {
      toast({
        title: "Copy failed",
        description: "Please try again",
        variant: "destructive"
      });
    }
  };

  const downloadStory = () => {
    const element = document.createElement('a');
    const file = new Blob([storyData.story], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'zans-magical-story.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    
    toast({
      title: "📄 Story Downloaded!",
      description: "Your magical story has been saved"
    });
  };

  const readStoryAloud = () => {
    if ('speechSynthesis' in window) {
      if (isSpeaking) {
        speechSynthesis.cancel();
        setIsSpeaking(false);
        return;
      }

      const utterance = new SpeechSynthesisUtterance(storyData.story);
      utterance.rate = 0.8;
      utterance.pitch = 1.1;
      utterance.volume = 0.8;
      
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => {
        setIsSpeaking(false);
        toast({
          title: "Speech failed",
          description: "Please try again",
          variant: "destructive"
        });
      };

      speechSynthesis.speak(utterance);
    } else {
      toast({
        title: "Speech not supported",
        description: "Your browser doesn't support text-to-speech",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text text-transparent mb-4">
          ✨ Your Magical Story! ✨
        </h2>
        <div className="flex justify-center">
          <img
            src={capturedImage}
            alt="Story Dice"
            className="w-32 h-32 rounded-lg shadow-lg border-2 border-white/30"
          />
        </div>
      </Card>

      {/* Characters */}
      <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
          <Sparkles className="h-5 w-5 mr-2 text-yellow-300" />
          🎭 Story Characters
        </h3>
        <div className="flex flex-wrap gap-3">
          {storyData.characters.map((character, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2"
            >
              <span className="text-white font-medium">
                {character.name}
              </span>
            </div>
          ))}
        </div>
      </Card>

      {/* Story Text */}
      <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8">
        <div className="prose prose-lg text-white max-w-none">
          <div className="text-lg md:text-xl leading-relaxed whitespace-pre-line">
            {displayedText}
            {isTyping && (
              <span className="inline-block w-3 h-6 bg-white ml-1 animate-pulse" />
            )}
          </div>
        </div>
      </Card>

      {/* Action Buttons */}
      <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6">
        <div className="flex flex-wrap gap-4 justify-center">
          <Button
            onClick={readStoryAloud}
            size="lg"
            className="h-14 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
          >
            <Volume2 className={`h-5 w-5 mr-2 ${isSpeaking ? 'animate-pulse' : ''}`} />
            {isSpeaking ? '🔊 Stop Reading' : '🔊 Read Aloud'}
          </Button>

          <Button
            onClick={copyToClipboard}
            size="lg"
            variant="outline"
            className="h-14 bg-white/10 border-white/30 text-white font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all backdrop-blur-sm"
          >
            <Copy className="h-5 w-5 mr-2" />
            📋 Copy Story
          </Button>

          <Button
            onClick={downloadStory}
            size="lg"
            variant="outline"
            className="h-14 bg-white/10 border-white/30 text-white font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all backdrop-blur-sm"
          >
            <Download className="h-5 w-5 mr-2" />
            💾 Save Story
          </Button>

          <Button
            onClick={onReset}
            size="lg"
            variant="outline"
            className="h-14 bg-white/10 border-white/30 text-white font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all backdrop-blur-sm"
          >
            <RotateCcw className="h-5 w-5 mr-2" />
            🔄 New Story
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default StoryDisplay;
