import React from 'react';
import { Badge } from "@/components/ui/badge";
const OurStory: React.FC = () => {
  return <section id="story-section" className="py-16 bg-gradient-to-br from-white to-zans-lightblue/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 text-zans-pink px-4 py-1 text-sm bg-slate-950">Our Journey</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The ZANS Story</h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
              <div className="w-full md:w-1/2">
                <img src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" alt="ZANS Storytelling Journey" className="rounded-2xl shadow-md w-full h-auto object-cover aspect-video" />
              </div>
              
              <div className="w-full md:w-1/2 prose max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  Once upon a time, in a world filled with digital screens and constant notifications, we dreamed of creating something different - a toy that would spark imagination, encourage bonding, and help children develop critical skills while having fun.
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  Our founder, passionate about child development, teamed up with experts from RV University and IIT-M to design the perfect storytelling companion - a soft, colorful cube that would be safe for the smallest hands but engaging enough for growing minds.
                </p>
              </div>
            </div>
            
            <div className="prose max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                Each side of our Storytelling Dice features carefully embroidered images - a dinosaur, an airplane, a castle, a scorpion, a footprint, and a spiral - chosen specifically to trigger creativity and help children weave magical tales while developing speech and cognitive abilities.
              </p>
              
              <p className="text-lg leading-relaxed italic border-l-4 border-zans-pink pl-4">
                "We believe that the best toys aren't just entertaining - they're educational, developmental, and bring families together. That's the heart of ZANS, and that's the future we're building, one story at a time."
              </p>
              
              <div className="mt-8 flex flex-wrap gap-4 justify-center">
                <Badge variant="outline" className="px-3 py-1 border-zans-pink text-zans-pink">
                  Child Development
                </Badge>
                <Badge variant="outline" className="px-3 py-1 border-zans-blue text-zans-blue">
                  Educational Play
                </Badge>
                <Badge variant="outline" className="px-3 py-1 border-green-500 text-green-500">
                  Screen-Free Entertainment
                </Badge>
                <Badge variant="outline" className="px-3 py-1 border-purple-500 text-purple-500">
                  Parent-Child Bonding
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default OurStory;