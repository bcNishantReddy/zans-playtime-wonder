
import React from 'react';
import { Palette, BookOpen, Heart, Monitor } from "lucide-react";

const EducationalBenefits: React.FC = () => {
  const benefits = [
    {
      icon: <Palette className="h-10 w-10" />,
      title: "Creativity Boost",
      description: "Endless story combinations spark imagination and creative thinking in children.",
      color: "from-shiny-blue-500 to-shiny-blue-400"
    },
    {
      icon: <BookOpen className="h-10 w-10" />,
      title: "Language Skills", 
      description: "Vocabulary and communication development through descriptive storytelling.",
      color: "from-shiny-blue-600 to-shiny-blue-500"
    },
    {
      icon: <Heart className="h-10 w-10" />,
      title: "Social Play",
      description: "Encourages sharing, cooperation and meaningful family bonding time.",
      color: "from-shiny-blue-700 to-shiny-blue-600"
    },
    {
      icon: <Monitor className="h-10 w-10" />,
      title: "Screen-Free Fun",
      description: "Healthy alternative to digital entertainment that promotes active learning.",
      color: "from-shiny-blue-500 to-shiny-blue-400"
    }
  ];

  return (
    <section className="py-24 relative bg-gradient-to-br from-white via-shiny-blue-50/20 to-white">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-shiny-blue-700 to-shiny-blue-500 bg-clip-text text-transparent">
            Educational Benefits
          </h2>
          <p className="text-2xl text-slate-600 max-w-4xl mx-auto font-medium leading-relaxed">
            Our Soft Storytelling Dice is more than just a toy - it's a learning tool designed to help your child develop essential skills through play.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-20">
          {benefits.map((benefit, index) => (
            <div key={index} className="relative group text-center animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
              {/* Icon with Gradient Background */}
              <div className={`w-20 h-20 bg-gradient-to-r ${benefit.color} rounded-3xl flex items-center justify-center mx-auto mb-8 text-white shadow-2xl group-hover:scale-110 transition-transform`}>
                {benefit.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-slate-800">{benefit.title}</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Story-style Quote */}
        <div className="max-w-5xl mx-auto text-center animate-scale-in">
          <div className="py-16">
            <div className="text-6xl mb-8 animate-float">
              <Sparkles className="h-16 w-16 text-shiny-blue-500 mx-auto" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-8 italic text-slate-700 leading-relaxed">
              "Once upon a time, a little cube made of clouds helped kids tell the greatest stories ever told... each roll opened a new world!"
            </h3>
            <div className="text-6xl animate-float" style={{animationDelay: '2s'}}>
              <BookOpen className="h-16 w-16 text-shiny-blue-500 mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationalBenefits;
