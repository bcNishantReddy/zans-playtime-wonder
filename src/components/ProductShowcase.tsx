
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProductShowcase: React.FC = () => {
  const images = [
    {
      src: "/lovable-uploads/d4329b10-4f51-4095-8797-1facffe17405.png",
      caption: "Soft, safe, and colorful",
      description: "Perfect for little hands"
    },
    {
      src: "/lovable-uploads/4d86a8d1-7da7-4d57-b494-d93c29d442e4.png", 
      caption: "Family bonding time",
      description: "Creating memories together"
    },
    {
      src: "/lovable-uploads/351cc6b9-e617-4bcd-8988-f83cdb2b68de.png",
      caption: "Educational play", 
      description: "Learning through fun"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-purple-50/50 to-pink-50/50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Product Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See our beautiful storytelling dice in action
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent className="-ml-4">
              {images.map((image, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="relative group">
                    {/* Glassmorphic Card */}
                    <div className="bg-white/30 backdrop-blur-lg border border-white/40 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500">
                      {/* Image */}
                      <div className="relative overflow-hidden">
                        <img 
                          src={image.src} 
                          alt={image.caption}
                          className="w-full h-80 object-contain bg-white/50 p-6 group-hover:scale-110 transition-transform duration-500"
                        />
                        
                        {/* Overlay Caption */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                          <h3 className="text-white font-bold text-xl mb-2">{image.caption}</h3>
                          <p className="text-white/80 text-sm">{image.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-white/30 backdrop-blur-sm border-white/40 hover:bg-white/50" />
            <CarouselNext className="bg-white/30 backdrop-blur-sm border-white/40 hover:bg-white/50" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
