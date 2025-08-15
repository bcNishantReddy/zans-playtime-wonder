
import React from 'react';

const OurStory: React.FC = () => {
  return (
    <section id="story-section" className="py-12 sm:py-16 md:py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-foreground">
            The ZANS Story
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
            Our journey to create meaningful play experiences
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {/* Main Story Card */}
          <div className="bg-card/30 backdrop-blur-lg border border-border/40 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Image Side */}
              <div className="lg:w-1/2 p-6 sm:p-8">
                <div className="bg-card/50 rounded-xl sm:rounded-2xl p-3 sm:p-4">
                  <img 
                    src="/lovable-uploads/4f8233af-64a3-4dad-ae2c-9399dbcfb3fd.png" 
                    alt="ZANS at Elevate 2024" 
                    className="rounded-xl sm:rounded-2xl shadow-md w-full h-auto object-cover"
                  />
                </div>
              </div>
              
              {/* Content Side */}
              <div className="lg:w-1/2 p-6 sm:p-8 flex flex-col justify-center">
                <div className="prose max-w-none text-muted-foreground">
                  <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                    Once upon a time, in a world filled with digital screens and constant notifications, we dreamed of creating something different - a toy that would spark imagination, encourage bonding, and help children develop critical skills while having fun.
                  </p>
                  
                  <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                    Our founder, passionate about child development, teamed up with experts from RV University and IIT-M to design the perfect storytelling companion - a soft, colorful cube that would be safe for the smallest hands but engaging enough for growing minds.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Bottom Content */}
            <div className="p-6 sm:p-8 bg-card/20">
              <div className="prose max-w-none text-muted-foreground">
                <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                  Each side of our Storytelling Dice features carefully embroidered images - a dinosaur, an airplane, a castle, a scorpion, a footprint, and a spiral - chosen specifically to trigger creativity and help children weave magical tales while developing speech and cognitive abilities.
                </p>
                
                <blockquote className="text-lg sm:text-xl leading-relaxed italic border-l-4 border-primary pl-4 sm:pl-6 bg-card/30 p-4 sm:p-6 rounded-r-xl sm:rounded-r-2xl">
                  "We believe that the best toys aren't just entertaining - they're educational, developmental, and bring families together. That's the heart of ZANS, and that's the future we're building, one story at a time."
                </blockquote>
              </div>
              
              {/* Value Badges */}
              <div className="mt-6 sm:mt-8 flex flex-wrap gap-2 sm:gap-3 justify-center">
                <span className="bg-card/40 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-primary font-medium border border-border text-sm">
                  Child Development
                </span>
                <span className="bg-card/40 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-primary font-medium border border-border text-sm">
                  Educational Play
                </span>
                <span className="bg-card/40 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-primary font-medium border border-border text-sm">
                  Screen-Free Entertainment
                </span>
                <span className="bg-card/40 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-primary font-medium border border-border text-sm">
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
