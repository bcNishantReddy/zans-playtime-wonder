
import React from 'react';
import { Book, Clock, HandHeart, Palette } from "lucide-react";

const EducationalBenefits: React.FC = () => {
  const benefits = [
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Creativity Boost",
      description: "Endless story combinations spark imagination and creative thinking in children.",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: <Book className="h-8 w-8" />,
      title: "Language Skills", 
      description: "Vocabulary and communication development through descriptive storytelling.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <HandHeart className="h-8 w-8" />,
      title: "Social Play",
      description: "Encourages sharing, cooperation and meaningful family bonding time.",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Screen-Free Fun",
      description: "Healthy alternative to digital entertainment that promotes active learning.",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/50 via-orange-50/50 to-red-50/50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Educational Benefits
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our Soft Storytelling Dice is more than just a toy - it's a learning tool designed to help your child develop essential skills through play.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="relative group">
              {/* Glassmorphic Card */}
              <div className="bg-white/30 backdrop-blur-lg border border-white/40 rounded-3xl p-6 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 h-full">
                {/* Icon with Gradient Background */}
                <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg`}>
                  {benefit.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-center text-gray-800">{benefit.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed text-sm">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Story-style Product Description */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/40 backdrop-blur-lg border border-white/30 rounded-3xl p-8 shadow-xl text-center">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 italic text-gray-700 leading-relaxed">
              "Once upon a time, a little cube made of clouds helped kids tell the greatest stories ever told... each roll opened a new world!"
            </h3>
            <div className="text-4xl">📚</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationalBenefits;
