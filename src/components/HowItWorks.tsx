
import React from 'react';
import { Dices, BookOpen, Sparkles } from "lucide-react";

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Roll the Dice",
      description: "Simply roll our soft storytelling dice and see what magical images appear!",
      image: "/lovable-uploads/d4329b10-4f51-4095-8797-1facffe17405.png",
      icon: <Dices className="h-12 w-12" />
    },
    {
      number: "02", 
      title: "Create Your Story",
      description: "Use the images to spark imagination and create wonderful stories together!",
      image: "/lovable-uploads/4d86a8d1-7da7-4d57-b494-d93c29d442e4.png",
      icon: <BookOpen className="h-12 w-12" />
    },
    {
      number: "03",
      title: "Spark Imagination",
      description: "Watch as creativity blooms and language skills develop through play!",
      image: "/lovable-uploads/351cc6b9-e617-4bcd-8988-f83cdb2b68de.png", 
      icon: <Sparkles className="h-12 w-12" />
    }
  ];

  return (
    <section className="py-24 relative bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-foreground">
            How It Works
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto font-medium">
            Three simple steps to unlock endless creativity and learning
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative group animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
              {/* Step Number */}
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl shadow-2xl z-10 group-hover:scale-110 transition-transform">
                {step.number}
              </div>
              
              {/* Content Container */}
              <div className="relative pt-8 text-center group-hover:transform group-hover:scale-105 transition-all duration-500">
                {/* Icon */}
                <div className="text-primary mb-8 flex justify-center animate-float" style={{animationDelay: `${index * 0.5}s`}}>
                  {step.icon}
                </div>
                
                {/* Image */}
                <div className="mb-8 rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-shadow">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-64 object-contain bg-card p-6 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Text Content */}
                <h3 className="text-3xl font-bold mb-6 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
