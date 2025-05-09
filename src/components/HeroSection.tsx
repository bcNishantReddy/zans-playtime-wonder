
import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import DiceModel from './DiceModel';

const HeroSection: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917349045386', '_blank');
  };

  return (
    <section className="relative overflow-hidden py-16 bg-gradient-to-b from-white to-zans-lightpink/20">
      {/* Background decorative elements */}
      <div className="absolute -top-24 -left-24 w-48 h-48 bg-zans-pink/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-zans-blue/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          {/* 3D Dice */}
          <div className="perspective-1000">
            <DiceModel />
          </div>
          
          {/* Hero Content */}
          <div className="text-center max-w-3xl mx-auto mt-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-zans-pink to-zans-blue bg-clip-text text-transparent mb-6 leading-tight">
              Crafting Tomorrow's Thinkers Through Play!
            </h1>
            
            <p className="text-lg text-gray-700 mb-8">
              Imaginative toys that spark creativity, learning, and endless joy for your little ones.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-zans-pink hover:bg-zans-pink/80 text-white text-lg py-6 px-8"
                onClick={() => document.getElementById('rsvp-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                RSVP Now
              </Button>
              
              <Button 
                className="bg-green-500 hover:bg-green-600 text-white text-lg py-6 px-8 flex items-center gap-2"
                onClick={handleWhatsAppClick}
              >
                <MessageSquare className="h-5 w-5" />
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
