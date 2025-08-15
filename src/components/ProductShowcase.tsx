
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
    <section className="py-12 sm:py-16 md:py-24 relative overflow-hidden bg-gradient-to-r from-primary/5 via-background to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 text-foreground">
            Product Gallery
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-medium px-4 sm:px-0">
            See our beautiful storytelling dice in action
          </p>
        </div>

        <div className="max-w-6xl mx-auto animate-scale-in">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 sm:-ml-6">
              {images.map((image, index) => (
                <CarouselItem key={index} className="pl-2 sm:pl-6 basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="relative group animate-slide-up px-2 sm:px-0" style={{animationDelay: `${index * 0.2}s`}}>
                    {/* Image Container */}
                    <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 bg-card">
                      <img 
                        src={image.src} 
                        alt={image.caption}
                        className="w-full h-72 sm:h-80 md:h-96 object-contain p-6 sm:p-8 group-hover:scale-110 transition-transform duration-500"
                      />
                      
                      {/* Overlay Caption */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-4 sm:p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-background font-bold text-lg sm:text-xl mb-1 sm:mb-2">{image.caption}</h3>
                        <p className="text-background/90 text-sm">{image.description}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-card/90 hover:bg-card border-border shadow-lg hover:shadow-xl -left-2 sm:-left-6 h-8 w-8 sm:h-10 sm:w-10" />
            <CarouselNext className="bg-card/90 hover:bg-card border-border shadow-lg hover:shadow-xl -right-2 sm:-right-6 h-8 w-8 sm:h-10 sm:w-10" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
