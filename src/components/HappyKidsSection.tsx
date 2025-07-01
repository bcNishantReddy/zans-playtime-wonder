
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
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent px-2">
            😊 Happy Kids, Happy Stories! 🌈
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto px-4">
            Watch the joy and creativity bloom as children discover endless adventures with our storytelling dice!
          </p>
        </div>

        {/* Mobile-First Carousel */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent className="-ml-2 md:-ml-4">
              {images.map((image, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden shadow-xl rounded-2xl sm:rounded-3xl transform hover:scale-105 transition-all duration-300 border-0 h-full">
                    <div className="relative">
                      <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="w-full h-60 sm:h-72 md:h-80 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                        <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4">
                          <h3 className="font-bold text-base sm:text-lg text-gray-800 mb-1 sm:mb-2">{image.title}</h3>
                          <p className="text-gray-600 text-xs sm:text-sm">"{image.description}"</p>
                        </div>
                      </div>
                      <div className="absolute top-3 sm:top-4 right-3 sm:right-4 text-2xl sm:text-3xl animate-bounce">
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

        {/* Benefits Grid - Mobile Responsive */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          <div className="text-center p-3 sm:p-4 md:p-6 bg-white rounded-xl sm:rounded-2xl shadow-lg transform hover:scale-105 transition-all">
            <div className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3">🎨</div>
            <h4 className="font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2">Creativity Boost</h4>
            <p className="text-gray-600 text-xs sm:text-sm">Endless story combinations spark imagination</p>
          </div>
          
          <div className="text-center p-3 sm:p-4 md:p-6 bg-white rounded-xl sm:rounded-2xl shadow-lg transform hover:scale-105 transition-all">
            <div className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3">🗣️</div>
            <h4 className="font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2">Language Skills</h4>
            <p className="text-gray-600 text-xs sm:text-sm">Vocabulary and communication development</p>
          </div>
          
          <div className="text-center p-3 sm:p-4 md:p-6 bg-white rounded-xl sm:rounded-2xl shadow-lg transform hover:scale-105 transition-all">
            <div className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3">🤝</div>
            <h4 className="font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2">Social Play</h4>
            <p className="text-gray-600 text-xs sm:text-sm">Encourages sharing and cooperation</p>
          </div>
          
          <div className="text-center p-3 sm:p-4 md:p-6 bg-white rounded-xl sm:rounded-2xl shadow-lg transform hover:scale-105 transition-all">
            <div className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3">📱</div>
            <h4 className="font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2">Screen-Free</h4>
            <p className="text-gray-600 text-xs sm:text-sm">Healthy alternative to digital entertainment</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HappyKidsSection;
