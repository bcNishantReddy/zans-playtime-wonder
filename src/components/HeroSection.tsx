
import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import DiceModel from './DiceModel';

const HeroSection: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917349045386', '_blank');
  };
  
  return (
    <section className="relative overflow-hidden py-8 md:py-16 bg-white">
      {/* Clean background with minimal decorations */}
      <div className="absolute -top-24 -left-24 w-48 h-48 bg-zans-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-zans-blue/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          {/* 3D Dice with z-index to ensure it's in the foreground */}
          <div className="hidden md:flex justify-center items-center md:order-2 mb-8 md:mb-0 w-full md:w-1/2 lg:w-3/5 relative" style={{ zIndex: 100 }}>
            <DiceModel />
          </div>
          
          {/* Hero Content */}
          <div className="text-center md:text-left w-full md:w-1/2 lg:w-2/5 md:order-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-zans-pink to-zans-blue bg-clip-text text-transparent mb-6 leading-tight">
              Crafting Tomorrow's Thinkers Through Play!
            </h1>
            
            <p className="text-base md:text-lg text-gray-700 mb-8">
              Our soft storytelling dice spark creativity, learning, and endless joy for your little ones - one roll, infinite stories!
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">              
              <Button className="bg-green-500 hover:bg-green-600 text-white text-lg py-5 px-6 md:py-6 md:px-8 flex items-center gap-2 shadow-lg" onClick={handleWhatsAppClick}>
                <MessageSquare className="h-5 w-5" />
                Order Now on WhatsApp
              </Button>
              
              <Button variant="outline" className="border-zans-pink hover:bg-zans-lightpink text-zans-pink hover:text-pink-700 text-lg py-5 px-6 md:py-6 md:px-8" onClick={() => document.getElementById('story-section')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                Learn Our Story
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
