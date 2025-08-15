
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProductCard: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917349045386', '_blank');
  };

  const galleryImages = [
    {
      src: "/lovable-uploads/d4329b10-4f51-4095-8797-1facffe17405.png",
      alt: "Child playing with dice"
    },
    {
      src: "/lovable-uploads/4d86a8d1-7da7-4d57-b494-d93c29d442e4.png",
      alt: "Family playing together"
    },
    {
      src: "/lovable-uploads/351cc6b9-e617-4bcd-8988-f83cdb2b68de.png",
      alt: "Children with dice"
    }
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <Card className="overflow-hidden border-0 shadow-2xl max-w-7xl mx-auto rounded-xl sm:rounded-2xl glass-card">
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Product Image */}
              <div className="bg-gradient-to-br from-primary/10 to-accent/20 p-4 sm:p-6 md:p-8 flex items-center justify-center relative min-h-[400px] sm:min-h-[500px] md:min-h-[600px]">
                <span className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 bg-destructive text-destructive-foreground text-xs sm:text-sm font-bold py-1 px-2 sm:py-2 sm:px-3 rounded-full shadow-lg flex items-center gap-1">
                  <Star className="h-3 w-3 fill-current" />
                  Launch Offer
                </span>
                
                <div className="relative w-full max-w-lg">
                  <div className="relative w-full h-60 sm:h-72 md:h-80 mb-4 sm:mb-6">
                    <img 
                      src="/lovable-uploads/2a47b6d2-cfce-4368-8532-e2b34d4fcbb5.png" 
                      alt="ZANS Soft Storytelling Dice Set - 3 Colorful Dice" 
                      className="w-full h-full object-contain rounded-lg sm:rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="w-full">
                    <Carousel className="w-full max-w-xs mx-auto">
                      <CarouselContent>
                        {galleryImages.map((image, index) => (
                          <CarouselItem key={index} className="basis-1/3">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-lg overflow-hidden shadow-lg transform hover:scale-110 transition-transform duration-300 glass">
                              <img 
                                src={image.src} 
                                alt={image.alt} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-0 w-5 h-5 sm:w-6 sm:h-6" />
                      <CarouselNext className="right-0 w-5 h-5 sm:w-6 sm:h-6" />
                    </Carousel>
                  </div>
                </div>
              </div>
              
              {/* Product Info */}
              <div className="p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-3 sm:mb-4">
                  <span className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                    Complete Set
                  </span>
                </div>
                
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 text-foreground">
                  Soft Storytelling Dice Set
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground mb-3 sm:mb-4">Set of 3 Colorful Story Dice</p>
                
                <div className="flex flex-wrap items-baseline gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <span className="text-muted-foreground line-through text-lg sm:text-xl">₹1,299</span>
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">₹999</span>
                  <span className="text-destructive font-bold bg-destructive/10 px-2 py-1 rounded-lg text-xs sm:text-sm shadow-md">
                    Save ₹300
                  </span>
                </div>
                
                <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-xs sm:text-sm md:text-base text-foreground"><strong>3 Soft Dice Set</strong> - Complete storytelling experience</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-xs sm:text-sm md:text-base text-foreground"><strong>Baby Safe Materials</strong> - Soft, embroidered fabric cubes</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-xs sm:text-sm md:text-base text-foreground"><strong>Creative Learning</strong> - Builds imagination & storytelling skills</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-xs sm:text-sm md:text-base text-foreground"><strong>Screen-Free Fun</strong> - Physical play for digital detox</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-xs sm:text-sm md:text-base text-foreground"><strong>Family Bonding</strong> - Perfect for parent-child interaction</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-xs sm:text-sm md:text-base text-foreground"><strong>Ages 3+</strong> - Suitable for toddlers and young children</p>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-sm sm:text-base md:text-lg py-4 sm:py-6 transform hover:scale-105 transition-all shadow-xl font-bold rounded-lg sm:rounded-xl"
                  onClick={handleWhatsAppClick}
                >
                  Order Complete Set on WhatsApp
                </Button>
                
                <p className="text-center text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4">
                  Free shipping • Quality guaranteed • Easy returns
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProductCard;
