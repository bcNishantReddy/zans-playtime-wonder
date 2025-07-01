
import React from 'react';
import { Card } from "@/components/ui/card";

const HappyKidsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
            😊 Happy Kids, Happy Stories! 🌈
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Watch the joy and creativity bloom as children discover endless adventures with our storytelling dice!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Kid 1 */}
          <Card className="overflow-hidden shadow-xl rounded-3xl transform hover:scale-105 transition-all duration-300 border-0">
            <div className="relative">
              <img 
                src="/lovable-uploads/d4329b10-4f51-4095-8797-1facffe17405.png" 
                alt="Happy child creating stories with dice" 
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4">
                  <h3 className="font-bold text-lg text-gray-800 mb-2">🎭 Creative Storytelling</h3>
                  <p className="text-gray-600 text-sm">"Every roll creates a new adventure!"</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 text-3xl animate-bounce">🌟</div>
            </div>
          </Card>

          {/* Kid 2 */}
          <Card className="overflow-hidden shadow-xl rounded-3xl transform hover:scale-105 transition-all duration-300 border-0">
            <div className="relative">
              <img 
                src="/lovable-uploads/4d86a8d1-7da7-4d57-b494-d93c29d442e4.png" 
                alt="Family enjoying dice games together" 
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4">
                  <h3 className="font-bold text-lg text-gray-800 mb-2">👨‍👩‍👧‍👦 Family Bonding</h3>
                  <p className="text-gray-600 text-sm">"Quality time that creates memories!"</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 text-3xl animate-pulse">❤️</div>
            </div>
          </Card>

          {/* Kid 3 */}
          <Card className="overflow-hidden shadow-xl rounded-3xl transform hover:scale-105 transition-all duration-300 border-0">
            <div className="relative">
              <img 
                src="/lovable-uploads/351cc6b9-e617-4bcd-8988-f83cdb2b68de.png" 
                alt="Children playing and learning with story dice" 
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4">
                  <h3 className="font-bold text-lg text-gray-800 mb-2">🧠 Learning Through Play</h3>
                  <p className="text-gray-600 text-sm">"Education disguised as pure fun!"</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 text-3xl animate-float">🎈</div>
            </div>
          </Card>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg transform hover:scale-105 transition-all">
            <div className="text-4xl mb-3">🎨</div>
            <h4 className="font-bold text-lg mb-2">Creativity Boost</h4>
            <p className="text-gray-600 text-sm">Endless story combinations spark imagination</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg transform hover:scale-105 transition-all">
            <div className="text-4xl mb-3">🗣️</div>
            <h4 className="font-bold text-lg mb-2">Language Skills</h4>
            <p className="text-gray-600 text-sm">Vocabulary and communication development</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg transform hover:scale-105 transition-all">
            <div className="text-4xl mb-3">🤝</div>
            <h4 className="font-bold text-lg mb-2">Social Play</h4>
            <p className="text-gray-600 text-sm">Encourages sharing and cooperation</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg transform hover:scale-105 transition-all">
            <div className="text-4xl mb-3">📱</div>
            <h4 className="font-bold text-lg mb-2">Screen-Free</h4>
            <p className="text-gray-600 text-sm">Healthy alternative to digital entertainment</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HappyKidsSection;
