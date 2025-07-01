import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
const HeroSection: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917349045386', '_blank');
  };
  return <section className="relative overflow-hidden py-6 md:py-12 bg-white">
      {/* Enhanced background */}
      <div className="absolute -top-24 -left-24 w-48 h-48 bg-zans-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-zans-blue/5 rounded-full blur-3xl"></div>
      
      {/* Floating Emojis - Smaller for mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-4 left-4 text-xl sm:text-3xl animate-float" style={{
        animationDelay: '0s'
      }}>📚</div>
        <div className="absolute top-8 right-8 text-lg sm:text-2xl animate-float" style={{
        animationDelay: '0.5s'
      }}>✨</div>
        <div className="absolute top-16 left-16 text-2xl sm:text-4xl animate-float" style={{
        animationDelay: '1s'
      }}>🎲</div>
        <div className="absolute top-12 right-24 text-lg sm:text-2xl animate-float" style={{
        animationDelay: '1.5s'
      }}>🌟</div>
        
        <div className="absolute top-1/3 left-8 text-xl sm:text-3xl animate-float" style={{
        animationDelay: '2s'
      }}>🎭</div>
        <div className="absolute top-1/3 right-8 text-lg sm:text-2xl animate-float" style={{
        animationDelay: '2.5s'
      }}>🏰</div>
        <div className="absolute top-1/2 left-4 text-2xl sm:text-4xl animate-float" style={{
        animationDelay: '3s'
      }}>🦁</div>
        <div className="absolute top-1/2 right-4 text-xl sm:text-3xl animate-float" style={{
        animationDelay: '3.5s'
      }}>🚂</div>
        
        <div className="absolute bottom-24 left-12 text-lg sm:text-2xl animate-float" style={{
        animationDelay: '4s'
      }}>🌈</div>
        <div className="absolute bottom-20 right-12 text-xl sm:text-3xl animate-float" style={{
        animationDelay: '4.5s'
      }}>🎨</div>
        <div className="absolute bottom-16 left-20 text-lg sm:text-2xl animate-float" style={{
        animationDelay: '5s'
      }}>🦄</div>
        <div className="absolute bottom-32 right-20 text-xl sm:text-3xl animate-float" style={{
        animationDelay: '5.5s'
      }}>🎪</div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center">
          {/* Hero Content - Smaller fonts for mobile */}
          <div className="text-center w-full max-w-3xl mx-auto bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-8 shadow-lg">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-zans-pink to-zans-blue bg-clip-text text-transparent mb-4 md:mb-6 leading-tight">
              🎲 Crafting Tomorrow's Thinkers Through Play! ✨
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 md:mb-8">
              🌟 Our soft storytelling dice spark creativity, learning, and endless joy for your little ones - one roll, infinite stories! 📖
            </p>
            
            {/* Feature highlights - Smaller for mobile */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-6 md:mb-8">
              <span className="bg-gradient-to-r from-purple-100 to-pink-100 px-2 py-1 md:px-4 md:py-2 rounded-full text-purple-700 font-medium text-xs sm:text-sm">
                🧸 Baby Safe
              </span>
              <span className="bg-gradient-to-r from-blue-100 to-cyan-100 px-2 py-1 md:px-4 md:py-2 rounded-full text-blue-700 font-medium text-xs sm:text-sm">
                🎨 Creative Learning
              </span>
              <span className="bg-gradient-to-r from-green-100 to-emerald-100 px-2 py-1 md:px-4 md:py-2 rounded-full text-green-700 font-medium text-xs sm:text-sm">🗣dynamic speech development</span>
              <span className="bg-gradient-to-r from-orange-100 to-yellow-100 px-2 py-1 md:px-4 md:py-2 rounded-full text-orange-700 font-medium text-xs sm:text-sm">
                👨‍👩‍👧‍👦 Family Bonding
              </span>
            </div>
            
            {/* CTA Buttons - Smaller for mobile */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">              
              <Button className="bg-green-500 hover:bg-green-600 text-white text-sm sm:text-base md:text-lg py-3 px-4 md:py-5 md:px-6 lg:py-6 lg:px-8 flex items-center gap-2 shadow-lg transform hover:scale-105 transition-all" onClick={handleWhatsAppClick}>
                <MessageSquare className="h-4 w-4 md:h-5 md:w-5" />
                🛒 Order Now on WhatsApp
              </Button>
              
              <Button variant="outline" className="border-zans-pink hover:bg-zans-lightpink text-zans-pink hover:text-pink-700 text-sm sm:text-base md:text-lg py-3 px-4 md:py-5 md:px-6 lg:py-6 lg:px-8 transform hover:scale-105 transition-all" onClick={() => document.getElementById('story-section')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                📖 Learn Our Story
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;