
import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Roll the Dice",
      description: "Simply roll our soft storytelling dice and see what magical images appear!",
      image: "/lovable-uploads/d4329b10-4f51-4095-8797-1facffe17405.png",
      icon: "🎲"
    },
    {
      number: "02", 
      title: "Create Your Story",
      description: "Use the images to spark imagination and create wonderful stories together!",
      image: "/lovable-uploads/4d86a8d1-7da7-4d57-b494-d93c29d442e4.png",
      icon: "📖"
    },
    {
      number: "03",
      title: "Spark Imagination",
      description: "Watch as creativity blooms and language skills develop through play!",
      image: "/lovable-uploads/351cc6b9-e617-4bcd-8988-f83cdb2b68de.png", 
      icon: "✨"
    }
  ];

  return (
    <section className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Three simple steps to unlock endless creativity and learning
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Glassmorphic Card */}
              <div className="bg-white/30 backdrop-blur-lg border border-white/40 rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 h-full">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="text-5xl mb-6 text-center animate-float" style={{animationDelay: `${index * 0.5}s`}}>
                  {step.icon}
                </div>
                
                {/* Image */}
                <div className="mb-6 rounded-2xl overflow-hidden">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-48 object-contain bg-white/50 rounded-2xl p-4"
                  />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
