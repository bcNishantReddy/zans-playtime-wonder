
import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageSquare, ArrowDown } from "lucide-react";

const HeroSection: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917349045386?text=Hi!%20I%20want%20to%20buy%20the%20ZANS%20Storytelling%20Dice', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/30 to-accent/20">
      {/* Glassmorphism Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-secondary/20 rounded-full blur-2xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Content Side */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="glass-card rounded-3xl p-8 lg:p-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent leading-[1.1] tracking-tight">
                Crafting Tomorrow's Thinkers Through Play
              </h1>
              
              <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl font-medium">
                Our soft storytelling dice spark creativity, learning, and endless joy for your little ones - one roll, infinite stories.
              </p>
              
              {/* Feature Badges */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
                <span className="bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full text-slate-700 font-medium text-sm border border-accent/30">
                  Baby Safe
                </span>
                <span className="bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full text-slate-700 font-medium text-sm border border-primary/30">
                  Creative Learning
                </span>
                <span className="bg-secondary/20 backdrop-blur-sm px-4 py-2 rounded-full text-slate-700 font-medium text-sm border border-secondary/30">
                  Speech Development
                </span>
                <span className="bg-muted/40 backdrop-blur-sm px-4 py-2 rounded-full text-slate-700 font-medium text-sm border border-muted/50">
                  Family Bonding
                </span>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 py-6 rounded-xl shadow-lg transform hover:scale-105 transition-all"
                  onClick={handleWhatsAppClick}
                >
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Buy Now on WhatsApp
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-border bg-transparent hover:bg-accent text-slate-700 font-semibold px-8 py-6 rounded-xl transform hover:scale-105 transition-all"
                  onClick={() => document.getElementById('how-it-works')?.scrollIntoView({behavior: 'smooth'})}
                >
                  <ArrowDown className="h-5 w-5 mr-2" />
                  Learn More
                </Button>
              </div>
            </div>
          </div>
          
          {/* Product Image Side */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="glass-card rounded-3xl p-8 lg:p-12 shadow-2xl">
                <img 
                  src="/lovable-uploads/d4329b10-4f51-4095-8797-1facffe17405.png" 
                  alt="ZANS Storytelling Dice" 
                  className="w-full max-w-md h-auto object-contain rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
