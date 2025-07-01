
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductCard: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917349045386', '_blank');
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <Card className="overflow-hidden border-0 shadow-2xl max-w-7xl mx-auto rounded-3xl">
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Product Image - Enhanced and Bigger */}
              <div className="bg-gradient-to-br from-zans-lightpink to-zans-lightblue p-12 flex items-center justify-center relative min-h-[600px]">
                <span className="absolute top-6 right-6 bg-red-500 text-white text-lg font-bold py-2 px-4 rounded-full animate-pulse shadow-lg">
                  🔥 Launch Offer
                </span>
                
                <div className="relative w-full max-w-lg">
                  {/* Main product image - Bigger */}
                  <div className="relative w-full h-96 mb-8">
                    <img 
                      src="/lovable-uploads/2a47b6d2-cfce-4368-8532-e2b34d4fcbb5.png" 
                      alt="ZANS Soft Storytelling Dice Set - 3 Colorful Dice" 
                      className="w-full h-full object-contain rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute -top-4 -right-4 text-6xl animate-bounce">✨</div>
                    <div className="absolute -bottom-4 -left-4 text-5xl animate-pulse">🎲</div>
                  </div>
                  
                  {/* Auto-rotating gallery images - Bigger */}
                  <div className="flex gap-4 justify-center">
                    <div className="w-24 h-24 rounded-xl overflow-hidden shadow-lg transform hover:scale-110 transition-transform duration-300">
                      <img 
                        src="/lovable-uploads/d4329b10-4f51-4095-8797-1facffe17405.png" 
                        alt="Child playing with dice" 
                        className="w-full h-full object-cover animate-spin-slow"
                      />
                    </div>
                    <div className="w-24 h-24 rounded-xl overflow-hidden shadow-lg transform hover:scale-110 transition-transform duration-300" style={{ animationDelay: '2s' }}>
                      <img 
                        src="/lovable-uploads/4d86a8d1-7da7-4d57-b494-d93c29d442e4.png" 
                        alt="Family playing together" 
                        className="w-full h-full object-cover animate-spin-slow"
                      />
                    </div>
                    <div className="w-24 h-24 rounded-xl overflow-hidden shadow-lg transform hover:scale-110 transition-transform duration-300" style={{ animationDelay: '4s' }}>
                      <img 
                        src="/lovable-uploads/351cc6b9-e617-4bcd-8988-f83cdb2b68de.png" 
                        alt="Children with dice" 
                        className="w-full h-full object-cover animate-spin-slow"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Product Info - Enhanced */}
              <div className="p-12 lg:p-16 flex flex-col justify-center">
                <div className="mb-6">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-base font-bold shadow-lg">
                    🎯 Complete Set
                  </span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Soft Storytelling Dice Set
                </h2>
                <p className="text-xl text-gray-600 mb-6">🎲 Set of 3 Colorful Story Dice 🎲</p>
                
                <div className="flex items-baseline gap-4 mb-8">
                  <span className="text-gray-400 line-through text-2xl">₹1,899</span>
                  <span className="text-4xl lg:text-5xl font-bold text-red-500">₹1,299</span>
                  <span className="text-green-600 font-bold bg-green-50 px-3 py-2 rounded-lg text-base shadow-md">
                    💰 Save ₹600!
                  </span>
                </div>
                
                <div className="space-y-5 mb-10">
                  <div className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-lg"><strong>3 Soft Dice Set</strong> - Complete storytelling experience</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-lg"><strong>🧸 Baby Safe Materials</strong> - Soft, embroidered fabric cubes</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-lg"><strong>🎨 Creative Learning</strong> - Builds imagination & storytelling skills</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-lg"><strong>📱 Screen-Free Fun</strong> - Physical play for digital detox</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-lg"><strong>👨‍👩‍👧‍👦 Family Bonding</strong> - Perfect for parent-child interaction</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-lg"><strong>🎯 Ages 3+</strong> - Suitable for toddlers and young children</p>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-green-500 hover:bg-green-600 text-white text-xl py-8 transform hover:scale-105 transition-all shadow-xl font-bold"
                  onClick={handleWhatsAppClick}
                >
                  🛒 Order Complete Set on WhatsApp
                </Button>
                
                <p className="text-center text-base text-gray-500 mt-6">
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
