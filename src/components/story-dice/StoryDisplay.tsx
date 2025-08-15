
import React, { useState, useEffect } from 'react';
import { Copy, Download, Volume2, RotateCcw, Sparkles, Users, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
        title: "Story Copied!",
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
      title: "Story Downloaded!",
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
    <div className="space-y-8">
      {/* Header with Image */}
      <div className="text-center animate-fade-in">
        <div className="relative inline-block mb-6">
          <Sparkles className="absolute -top-3 -left-3 w-7 h-7 text-shiny-blue-500 animate-pulse" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-shiny-blue-600 via-shiny-blue-700 to-shiny-blue-800 bg-clip-text text-transparent mb-6">
            Your Magical Story
          </h2>
        </div>
        
        <div className="relative inline-block animate-scale-in" style={{animationDelay: '0.3s'}}>
          <img
            src={capturedImage}
            alt="Story Dice"
            className="w-40 h-40 rounded-2xl shadow-xl border-4 border-white/80 hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute -inset-2 bg-gradient-to-r from-shiny-blue-200/30 to-shiny-blue-300/30 rounded-3xl -z-10 blur-lg"></div>
        </div>
      </div>

      {/* Characters */}
      <div className="animate-fade-in" style={{animationDelay: '0.6s'}}>
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-slate-800 mb-2 flex items-center justify-center gap-2">
            <Users className="h-6 w-6 text-shiny-blue-500" />
            Story Characters
          </h3>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          {storyData.characters.map((character, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-gradient-to-r from-shiny-blue-100/80 to-shiny-blue-200/80 backdrop-blur-sm border border-shiny-blue-300/50 rounded-full px-6 py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <span className="relative z-10 text-slate-800 font-semibold">
                {character.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Story Text */}
      <div className="animate-fade-in" style={{animationDelay: '0.9s'}}>
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-slate-800 mb-2 flex items-center justify-center gap-2">
            <BookOpen className="h-6 w-6 text-shiny-blue-500" />
            Your Story
          </h3>
        </div>
        
        <div className="relative bg-gradient-to-br from-white/90 to-shiny-blue-50/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/60">
          <div className="absolute inset-0 bg-gradient-to-br from-shiny-blue-100/20 to-transparent rounded-2xl"></div>
          <div className="relative z-10 prose prose-lg max-w-none">
            <div className="text-xl leading-relaxed whitespace-pre-line text-slate-700 font-medium">
              {displayedText}
              {isTyping && (
                <span className="inline-block w-1 h-7 bg-shiny-blue-500 ml-1 animate-pulse" />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="animate-fade-in" style={{animationDelay: '1.2s'}}>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button
            onClick={readStoryAloud}
            size="lg"
            className="group relative overflow-hidden bg-gradient-to-r from-shiny-blue-500 to-shiny-blue-600 hover:from-shiny-blue-600 hover:to-shiny-blue-700 text-white font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 px-6 py-3 rounded-xl border border-shiny-blue-400/50"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <Volume2 className={`h-5 w-5 mr-2 relative z-10 ${isSpeaking ? 'animate-pulse' : ''}`} />
            <span className="relative z-10">{isSpeaking ? 'Stop Reading' : 'Read Aloud'}</span>
          </Button>

          <Button
            onClick={copyToClipboard}
            size="lg"
            variant="outline"
            className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-2 border-shiny-blue-300 text-slate-700 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 px-6 py-3 rounded-xl hover:bg-shiny-blue-50/80"
          >
            <Copy className="h-5 w-5 mr-2" />
            Copy Story
          </Button>

          <Button
            onClick={downloadStory}
            size="lg"
            variant="outline"
            className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-2 border-shiny-blue-300 text-slate-700 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 px-6 py-3 rounded-xl hover:bg-shiny-blue-50/80"
          >
            <Download className="h-5 w-5 mr-2" />
            Save Story
          </Button>

          <Button
            onClick={onReset}
            size="lg"
            variant="outline"
            className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-2 border-slate-300 text-slate-700 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 px-6 py-3 rounded-xl hover:bg-slate-50/80"
          >
            <RotateCcw className="h-5 w-5 mr-2" />
            New Story
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StoryDisplay;
