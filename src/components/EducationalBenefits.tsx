
import React from 'react';
import { Palette, BookOpen, Heart, Monitor, Sparkles } from "lucide-react";

const EducationalBenefits: React.FC = () => {
  const benefits = [
    {
      icon: <Palette className="h-8 w-8 sm:h-10 sm:w-10" />,
      title: "Creativity Boost",
      description: "Endless story combinations spark imagination and creative thinking in children.",
      color: "from-primary to-primary/80"
    },
    {
      icon: <BookOpen className="h-8 w-8 sm:h-10 sm:w-10" />,
      title: "Language Skills", 
      description: "Vocabulary and communication development through descriptive storytelling.",
      color: "from-primary/90 to-primary"
    },
    {
      icon: <Heart className="h-8 w-8 sm:h-10 sm:w-10" />,
      title: "Social Play",
      description: "Encourages sharing, cooperation and meaningful family bonding time.",
      color: "from-primary to-primary/70"
    },
    {
      icon: <Monitor className="h-8 w-8 sm:h-10 sm:w-10" />,
      title: "Screen-Free Fun",
      description: "Healthy alternative to digital entertainment that promotes active learning.",
      color: "from-primary/80 to-primary"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 relative bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 text-foreground">
            Educational Benefits
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto font-medium leading-relaxed px-4 sm:px-0">
            Our Soft Storytelling Dice is more than just a toy - it's a learning tool designed to help your child develop essential skills through play.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto mb-12 sm:mb-16 md:mb-20">
          {benefits.map((benefit, index) => (
            <div key={index} className="relative group text-center animate-slide-up px-4 sm:px-0" style={{animationDelay: `${index * 0.1}s`}}>
              {/* Icon with Gradient Background */}
              <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${benefit.color} rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-6 sm:mb-8 text-primary-foreground shadow-2xl group-hover:scale-110 transition-transform`}>
                {benefit.icon}
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Story-style Quote */}
        <div className="max-w-5xl mx-auto text-center animate-scale-in px-4 sm:px-0">
          <div className="py-12 sm:py-16">
            <div className="text-4xl sm:text-6xl mb-6 sm:mb-8 animate-float">
              <Sparkles className="h-12 w-12 sm:h-16 sm:w-16 text-primary mx-auto" />
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 italic text-foreground leading-relaxed">
              "Once upon a time, a little cube made of clouds helped kids tell the greatest stories ever told... each roll opened a new world!"
            </h3>
            <div className="text-4xl sm:text-6xl animate-float" style={{animationDelay: '2s'}}>
              <BookOpen className="h-12 w-12 sm:h-16 sm:w-16 text-primary mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationalBenefits;
