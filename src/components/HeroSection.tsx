
import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageSquare, ArrowDown } from "lucide-react";

const HeroSection: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917349045386?text=Hi!%20I%20want%20to%20buy%20the%20ZANS%20Storytelling%20Dice', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Glassmorphism Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 via-pink-400/20 to-blue-400/20"></div>
      <div className="absolute inset-0 backdrop-blur-3xl"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-pink-300/20 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-blue-300/20 rounded-full blur-xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content Side */}
          <div className="lg:w-1/2 text-center lg:text-left">
            {/* Glassmorphic Content Card */}
            <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-3xl p-8 shadow-xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent leading-tight">
                Crafting Tomorrow's Thinkers Through Play! ✨
              </h1>
              
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                Our soft storytelling dice spark creativity, learning, and endless joy for your little ones - one roll, infinite stories! 📖
              </p>
              
              {/* Feature Badges */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
                <span className="bg-white/30 backdrop-blur-sm px-4 py-2 rounded-full text-purple-700 font-medium text-sm border border-white/20">
                  🧸 Baby Safe
                </span>
                <span className="bg-white/30 backdrop-blur-sm px-4 py-2 rounded-full text-blue-700 font-medium text-sm border border-white/20">
                  🎨 Creative Learning
                </span>
                <span className="bg-white/30 backdrop-blur-sm px-4 py-2 rounded-full text-green-700 font-medium text-sm border border-white/20">
                  🗣️ Speech Development
                </span>
                <span className="bg-white/30 backdrop-blur-sm px-4 py-2 rounded-full text-orange-700 font-medium text-sm border border-white/20">
                  👨‍👩‍👧‍👦 Family Bonding
                </span>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  className="bg-green-500 hover:bg-green-600 text-white text-lg py-6 px-8 rounded-2xl shadow-lg backdrop-blur-sm border border-white/20 transform hover:scale-105 transition-all flex items-center gap-3"
                  onClick={handleWhatsAppClick}
                >
                  <MessageSquare className="h-5 w-5" />
                  🛒 Buy Now on WhatsApp
                </Button>
                
                <Button 
                  variant="outline" 
                  className="border-2 border-white/30 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-purple-700 hover:text-purple-800 text-lg py-6 px-8 rounded-2xl transform hover:scale-105 transition-all flex items-center gap-3"
                  onClick={() => document.getElementById('how-it-works')?.scrollIntoView({behavior: 'smooth'})}
                >
                  <ArrowDown className="h-5 w-5" />
                  Learn More
                </Button>
              </div>
            </div>
          </div>
          
          {/* Product Image Side */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              {/* Glassmorphic Image Container */}
              <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-3xl p-8 shadow-2xl">
                <img 
                  src="/lovable-uploads/d4329b10-4f51-4095-8797-1facffe17405.png" 
                  alt="ZANS Storytelling Dice" 
                  className="w-full max-w-md h-auto object-contain rounded-2xl"
                />
              </div>
              
              {/* Floating Emojis */}
              <div className="absolute -top-4 -right-4 text-4xl animate-bounce">🎲</div>
              <div className="absolute -bottom-4 -left-4 text-3xl animate-pulse">✨</div>
              <div className="absolute top-1/2 -left-8 text-2xl animate-float">📚</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
