
import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageSquare, ArrowDown } from "lucide-react";

const HeroSection: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917349045386?text=Hi!%20I%20want%20to%20buy%20the%20ZANS%20Storytelling%20Dice', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-accent/10">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-primary/15 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Content Side */}
          <div className="lg:w-1/2 text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl xl:text-7xl font-bold mb-8 text-foreground leading-tight tracking-tight animate-slide-up lg:text-7xl">
              Crafting Tomorrow's Thinkers Through Play
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-2xl font-medium animate-slide-up" style={{animationDelay: '0.2s'}}>
              Our soft storytelling dice spark creativity, learning, and endless joy for your little ones - one roll, infinite stories.
            </p>
            
            {/* Feature Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10 animate-slide-up" style={{animationDelay: '0.4s'}}>
              <span className="bg-card/90 backdrop-blur-sm px-6 py-3 rounded-full text-card-foreground font-semibold text-sm border border-border shadow-lg hover:shadow-xl transition-all hover:scale-105">
                Baby Safe
              </span>
              <span className="bg-card/90 backdrop-blur-sm px-6 py-3 rounded-full text-card-foreground font-semibold text-sm border border-border shadow-lg hover:shadow-xl transition-all hover:scale-105">
                Creative Learning
              </span>
              <span className="bg-card/90 backdrop-blur-sm px-6 py-3 rounded-full text-card-foreground font-semibold text-sm border border-border shadow-lg hover:shadow-xl transition-all hover:scale-105">
                Speech Development
              </span>
              <span className="bg-card/90 backdrop-blur-sm px-6 py-3 rounded-full text-card-foreground font-semibold text-sm border border-border shadow-lg hover:shadow-xl transition-all hover:scale-105">
                Family Bonding
              </span>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start animate-slide-up" style={{animationDelay: '0.6s'}}>
              <Button size="lg" onClick={handleWhatsAppClick} className="bg-primary hover:bg-primary/90 font-bold px-10 py-7 rounded-2xl shadow-2xl transform hover:scale-105 transition-all text-lg hover:shadow-primary/25 text-primary-foreground">
                <MessageSquare className="h-6 w-6 mr-3" />
                Buy Now on WhatsApp
              </Button>
              
              <Button variant="outline" size="lg" className="border-2 border-primary bg-card/90 hover:bg-accent text-primary font-bold px-10 py-7 rounded-2xl transform hover:scale-105 transition-all text-lg shadow-lg hover:shadow-xl" onClick={() => document.getElementById('how-it-works')?.scrollIntoView({behavior: 'smooth'})}>
                <ArrowDown className="h-6 w-6 mr-3" />
                Learn More
              </Button>
            </div>
          </div>
          
          {/* Product Image Side */}
          <div className="lg:w-1/2 flex justify-center animate-scale-in" style={{animationDelay: '0.8s'}}>
            <div className="relative">
              <div className="relative transform hover:scale-105 transition-all duration-500">
                <img src="/lovable-uploads/d4329b10-4f51-4095-8797-1facffe17405.png" alt="ZANS Storytelling Dice" className="w-full max-w-lg h-auto object-contain drop-shadow-2xl" />
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-3xl blur-3xl -z-10 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
