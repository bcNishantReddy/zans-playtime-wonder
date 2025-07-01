
import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const HeroSection: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917349045386', '_blank');
  };
  
  return (
    <section className="relative overflow-hidden py-8 md:py-16 bg-white">
      {/* Enhanced background with floating emojis */}
      <div className="absolute -top-24 -left-24 w-48 h-48 bg-zans-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-zans-blue/5 rounded-full blur-3xl"></div>
      
      {/* Floating Emojis */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Story-related emojis */}
        <div className="absolute top-10 left-10 text-4xl animate-float" style={{ animationDelay: '0s' }}>📚</div>
        <div className="absolute top-20 right-20 text-3xl animate-float" style={{ animationDelay: '0.5s' }}>✨</div>
        <div className="absolute top-32 left-1/4 text-5xl animate-float" style={{ animationDelay: '1s' }}>🎲</div>
        <div className="absolute top-40 right-1/3 text-3xl animate-float" style={{ animationDelay: '1.5s' }}>🌟</div>
        <div className="absolute bottom-40 left-16 text-4xl animate-float" style={{ animationDelay: '2s' }}>🎭</div>
        <div className="absolute bottom-32 right-16 text-3xl animate-float" style={{ animationDelay: '2.5s' }}>🏰</div>
        <div className="absolute bottom-60 left-1/3 text-5xl animate-float" style={{ animationDelay: '3s' }}>🦁</div>
        <div className="absolute top-60 right-10 text-4xl animate-float" style={{ animationDelay: '3.5s' }}>🚂</div>
        <div className="absolute top-80 left-20 text-3xl animate-float" style={{ animationDelay: '4s' }}>🌈</div>
        <div className="absolute bottom-20 right-1/4 text-4xl animate-float" style={{ animationDelay: '4.5s' }}>🎨</div>
        <div className="absolute top-96 right-1/2 text-3xl animate-float" style={{ animationDelay: '5s' }}>🦄</div>
        <div className="absolute bottom-80 left-1/2 text-4xl animate-float" style={{ animationDelay: '5.5s' }}>🎪</div>
        
        {/* Additional scattered emojis */}
        <div className="absolute top-16 left-1/2 text-2xl animate-float" style={{ animationDelay: '6s' }}>🌺</div>
        <div className="absolute bottom-16 right-1/2 text-3xl animate-float" style={{ animationDelay: '6.5s' }}>🎈</div>
        <div className="absolute top-72 left-10 text-2xl animate-float" style={{ animationDelay: '7s' }}>⭐</div>
        <div className="absolute bottom-72 right-8 text-3xl animate-float" style={{ animationDelay: '7.5s' }}>🎊</div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center">
          {/* Hero Content */}
          <div className="text-center w-full max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-zans-pink to-zans-blue bg-clip-text text-transparent mb-6 leading-tight">
              🎲 Crafting Tomorrow's Thinkers Through Play! ✨
            </h1>
            
            <p className="text-base md:text-lg text-gray-700 mb-8">
              🌟 Our soft storytelling dice spark creativity, learning, and endless joy for your little ones - one roll, infinite stories! 📖
            </p>
            
            {/* Feature highlights */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full text-purple-700 font-medium">
                🧸 Baby Safe
              </span>
              <span className="bg-gradient-to-r from-blue-100 to-cyan-100 px-4 py-2 rounded-full text-blue-700 font-medium">
                🎨 Creative Learning
              </span>
              <span className="bg-gradient-to-r from-green-100 to-emerald-100 px-4 py-2 rounded-full text-green-700 font-medium">
                📱 Screen Free
              </span>
              <span className="bg-gradient-to-r from-orange-100 to-yellow-100 px-4 py-2 rounded-full text-orange-700 font-medium">
                👨‍👩‍👧‍👦 Family Bonding
              </span>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">              
              <Button className="bg-green-500 hover:bg-green-600 text-white text-lg py-5 px-6 md:py-6 md:px-8 flex items-center gap-2 shadow-lg transform hover:scale-105 transition-all" onClick={handleWhatsAppClick}>
                <MessageSquare className="h-5 w-5" />
                🛒 Order Now on WhatsApp
              </Button>
              
              <Button variant="outline" className="border-zans-pink hover:bg-zans-lightpink text-zans-pink hover:text-pink-700 text-lg py-5 px-6 md:py-6 md:px-8 transform hover:scale-105 transition-all" onClick={() => document.getElementById('story-section')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                📖 Learn Our Story
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
