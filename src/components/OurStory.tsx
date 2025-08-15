
import React from 'react';

const OurStory: React.FC = () => {
  return (
    <section id="story-section" className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 via-cyan-50/50 to-blue-50/50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
            The ZANS Story
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our journey to create meaningful play experiences
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {/* Main Story Card */}
          <div className="bg-white/30 backdrop-blur-lg border border-white/40 rounded-3xl shadow-2xl overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Image Side */}
              <div className="lg:w-1/2 p-8">
                <div className="bg-white/50 rounded-2xl p-4">
                  <img 
                    src="/lovable-uploads/4f8233af-64a3-4dad-ae2c-9399dbcfb3fd.png" 
                    alt="ZANS at Elevate 2024" 
                    className="rounded-2xl shadow-md w-full h-auto object-cover"
                  />
                </div>
              </div>
              
              {/* Content Side */}
              <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                <div className="prose max-w-none text-gray-700">
                  <p className="text-lg leading-relaxed mb-6">
                    Once upon a time, in a world filled with digital screens and constant notifications, we dreamed of creating something different - a toy that would spark imagination, encourage bonding, and help children develop critical skills while having fun.
                  </p>
                  
                  <p className="text-lg leading-relaxed mb-6">
                    Our founder, passionate about child development, teamed up with experts from RV University and IIT-M to design the perfect storytelling companion - a soft, colorful cube that would be safe for the smallest hands but engaging enough for growing minds.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Bottom Content */}
            <div className="p-8 bg-white/20">
              <div className="prose max-w-none text-gray-700">
                <p className="text-lg leading-relaxed mb-6">
                  Each side of our Storytelling Dice features carefully embroidered images - a dinosaur, an airplane, a castle, a scorpion, a footprint, and a spiral - chosen specifically to trigger creativity and help children weave magical tales while developing speech and cognitive abilities.
                </p>
                
                <blockquote className="text-xl leading-relaxed italic border-l-4 border-teal-500 pl-6 bg-white/30 p-6 rounded-r-2xl">
                  "We believe that the best toys aren't just entertaining - they're educational, developmental, and bring families together. That's the heart of ZANS, and that's the future we're building, one story at a time."
                </blockquote>
              </div>
              
              {/* Value Badges */}
              <div className="mt-8 flex flex-wrap gap-3 justify-center">
                <span className="bg-white/40 backdrop-blur-sm px-4 py-2 rounded-full text-teal-700 font-medium border border-white/30">
                  Child Development
                </span>
                <span className="bg-white/40 backdrop-blur-sm px-4 py-2 rounded-full text-blue-700 font-medium border border-white/30">
                  Educational Play
                </span>
                <span className="bg-white/40 backdrop-blur-sm px-4 py-2 rounded-full text-green-700 font-medium border border-white/30">
                  Screen-Free Entertainment
                </span>
                <span className="bg-white/40 backdrop-blur-sm px-4 py-2 rounded-full text-purple-700 font-medium border border-white/30">
                  Parent-Child Bonding
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
