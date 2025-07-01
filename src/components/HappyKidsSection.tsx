
import React from 'react';
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const HappyKidsSection: React.FC = () => {
  const images = [
    {
      src: "/lovable-uploads/d4329b10-4f51-4095-8797-1facffe17405.png",
      alt: "Happy child creating stories with dice",
      title: "🎭 Creative Storytelling",
      description: "Every roll creates a new adventure!"
    },
    {
      src: "/lovable-uploads/4d86a8d1-7da7-4d57-b494-d93c29d442e4.png",
      alt: "Family enjoying dice games together",
      title: "👨‍👩‍👧‍👦 Family Bonding",
      description: "Quality time that creates memories!"
    },
    {
      src: "/lovable-uploads/351cc6b9-e617-4bcd-8988-f83cdb2b68de.png",
      alt: "Children playing and learning with story dice",
      title: "🧠 Learning Through Play",
      description: "Education disguised as pure fun!"
    }
  ];

  return (
    <section className="py-6 sm:py-8 md:py-12 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4 sm:mb-6 md:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent px-2">
            😊 Happy Kids, Happy Stories! 🌈
          </h2>
          <p className="text-sm sm:text-base text-gray-700 max-w-3xl mx-auto px-4">
            Watch the joy and creativity bloom as children discover endless adventures with our storytelling dice!
          </p>
        </div>

        {/* Mobile-First Carousel */}
        <div className="mb-4 sm:mb-6 md:mb-8">
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent className="-ml-2 md:-ml-4">
              {images.map((image, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden shadow-xl rounded-lg sm:rounded-xl transform hover:scale-105 transition-all duration-300 border-0 h-full">
                    <div className="relative">
                      <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="w-full h-48 sm:h-56 md:h-64 object-contain bg-white p-2"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                      <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3">
                        <div className="bg-white/95 backdrop-blur-sm rounded-lg p-2 sm:p-3">
                          <h3 className="font-bold text-sm sm:text-base text-gray-800 mb-1">{image.title}</h3>
                          <p className="text-gray-600 text-xs sm:text-sm">"{image.description}"</p>
                        </div>
                      </div>
                      <div className="absolute top-2 sm:top-3 right-2 sm:right-3 text-lg sm:text-xl animate-bounce">
                        {index === 0 ? '🌟' : index === 1 ? '❤️' : '🎈'}
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -left-4 md:-left-12" />
            <CarouselNext className="hidden sm:flex -right-4 md:-right-12" />
          </Carousel>
        </div>

        {/* Benefits Grid - Smaller fonts for mobile */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
          <div className="text-center p-2 sm:p-3 md:p-4 bg-white rounded-lg sm:rounded-xl shadow-lg transform hover:scale-105 transition-all">
            <div className="text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2">🎨</div>
            <h4 className="font-bold text-xs sm:text-sm md:text-base mb-1">Creativity Boost</h4>
            <p className="text-gray-600 text-xs">Endless story combinations spark imagination</p>
          </div>
          
          <div className="text-center p-2 sm:p-3 md:p-4 bg-white rounded-lg sm:rounded-xl shadow-lg transform hover:scale-105 transition-all">
            <div className="text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2">🗣️</div>
            <h4 className="font-bold text-xs sm:text-sm md:text-base mb-1">Language Skills</h4>
            <p className="text-gray-600 text-xs">Vocabulary and communication development</p>
          </div>
          
          <div className="text-center p-2 sm:p-3 md:p-4 bg-white rounded-lg sm:rounded-xl shadow-lg transform hover:scale-105 transition-all">
            <div className="text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2">🤝</div>
            <h4 className="font-bold text-xs sm:text-sm md:text-base mb-1">Social Play</h4>
            <p className="text-gray-600 text-xs">Encourages sharing and cooperation</p>
          </div>
          
          <div className="text-center p-2 sm:p-3 md:p-4 bg-white rounded-lg sm:rounded-xl shadow-lg transform hover:scale-105 transition-all">
            <div className="text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2">📱</div>
            <h4 className="font-bold text-xs sm:text-sm md:text-base mb-1">Screen-Free</h4>
            <p className="text-gray-600 text-xs">Healthy alternative to digital entertainment</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HappyKidsSection;
