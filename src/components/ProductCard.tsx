
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
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
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <Card className="overflow-hidden border-0 shadow-2xl max-w-7xl mx-auto rounded-2xl sm:rounded-3xl">
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Product Image - Enhanced and Mobile Responsive */}
              <div className="bg-gradient-to-br from-zans-lightpink to-zans-lightblue p-6 sm:p-8 md:p-12 flex items-center justify-center relative min-h-[500px] sm:min-h-[600px] md:min-h-[700px]">
                <span className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 bg-red-500 text-white text-sm sm:text-base md:text-lg font-bold py-1 px-2 sm:py-2 sm:px-3 md:py-2 md:px-4 rounded-full animate-pulse shadow-lg">
                  🔥 Launch Offer
                </span>
                
                <div className="relative w-full max-w-lg">
                  {/* Main product image - Responsive */}
                  <div className="relative w-full h-72 sm:h-80 md:h-96 mb-6 sm:mb-8">
                    <img 
                      src="/lovable-uploads/2a47b6d2-cfce-4368-8532-e2b34d4fcbb5.png" 
                      alt="ZANS Soft Storytelling Dice Set - 3 Colorful Dice" 
                      className="w-full h-full object-contain rounded-xl sm:rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 text-3xl sm:text-4xl md:text-6xl animate-bounce">✨</div>
                    <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 text-2xl sm:text-3xl md:text-5xl animate-pulse">🎲</div>
                  </div>
                  
                  {/* Carousel for gallery images */}
                  <div className="w-full">
                    <Carousel className="w-full max-w-xs mx-auto">
                      <CarouselContent>
                        {galleryImages.map((image, index) => (
                          <CarouselItem key={index} className="basis-1/3">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg sm:rounded-xl overflow-hidden shadow-lg transform hover:scale-110 transition-transform duration-300">
                              <img 
                                src={image.src} 
                                alt={image.alt} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-0 w-6 h-6 sm:w-8 sm:h-8" />
                      <CarouselNext className="right-0 w-6 h-6 sm:w-8 sm:h-8" />
                    </Carousel>
                  </div>
                </div>
              </div>
              
              {/* Product Info - Mobile Responsive */}
              <div className="p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <div className="mb-4 sm:mb-6">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-sm sm:text-base font-bold shadow-lg">
                    🎯 Complete Set
                  </span>
                </div>
                
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Soft Storytelling Dice Set
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 mb-4 sm:mb-6">🎲 Set of 3 Colorful Story Dice 🎲</p>
                
                <div className="flex flex-wrap items-baseline gap-2 sm:gap-4 mb-6 sm:mb-8">
                  <span className="text-gray-400 line-through text-xl sm:text-2xl">₹1,899</span>
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-red-500">₹1,299</span>
                  <span className="text-green-600 font-bold bg-green-50 px-2 py-1 sm:px-3 sm:py-2 rounded-lg text-sm sm:text-base shadow-md">
                    💰 Save ₹600!
                  </span>
                </div>
                
                <div className="space-y-3 sm:space-y-4 md:space-y-5 mb-8 sm:mb-10">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <Check className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-sm sm:text-base md:text-lg"><strong>3 Soft Dice Set</strong> - Complete storytelling experience</p>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <Check className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-sm sm:text-base md:text-lg"><strong>🧸 Baby Safe Materials</strong> - Soft, embroidered fabric cubes</p>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <Check className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-sm sm:text-base md:text-lg"><strong>🎨 Creative Learning</strong> - Builds imagination & storytelling skills</p>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <Check className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-sm sm:text-base md:text-lg"><strong>📱 Screen-Free Fun</strong> - Physical play for digital detox</p>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <Check className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-sm sm:text-base md:text-lg"><strong>👨‍👩‍👧‍👦 Family Bonding</strong> - Perfect for parent-child interaction</p>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <Check className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-sm sm:text-base md:text-lg"><strong>🎯 Ages 3+</strong> - Suitable for toddlers and young children</p>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-green-500 hover:bg-green-600 text-white text-base sm:text-lg md:text-xl py-6 sm:py-8 transform hover:scale-105 transition-all shadow-xl font-bold rounded-xl sm:rounded-2xl"
                  onClick={handleWhatsAppClick}
                >
                  🛒 Order Complete Set on WhatsApp
                </Button>
                
                <p className="text-center text-sm sm:text-base text-gray-500 mt-4 sm:mt-6">
                  ✅ Free shipping • 💯 Quality guaranteed • 🔄 Easy returns
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
