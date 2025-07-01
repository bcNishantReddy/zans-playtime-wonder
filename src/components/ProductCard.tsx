
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductCard: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917349045386', '_blank');
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <Card className="overflow-hidden border-0 shadow-xl max-w-6xl mx-auto rounded-3xl">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Product Image */}
              <div className="bg-gradient-to-br from-zans-lightpink to-zans-lightblue p-8 flex items-center justify-center relative">
                <span className="absolute top-4 right-4 bg-red-500 text-white text-sm font-medium py-1 px-3 rounded-full animate-pulse">
                  🔥 Launch Offer
                </span>
                
                <div className="relative">
                  {/* Main product image */}
                  <div className="relative w-80 h-80 mb-6">
                    <img 
                      src="/lovable-uploads/2a47b6d2-cfce-4368-8532-e2b34d4fcbb5.png" 
                      alt="ZANS Soft Storytelling Dice Set - 3 Colorful Dice" 
                      className="w-full h-full object-contain rounded-xl shadow-2xl"
                    />
                    <div className="absolute -top-2 -right-2 text-4xl animate-bounce">✨</div>
                    <div className="absolute -bottom-2 -left-2 text-3xl animate-pulse">🎲</div>
                  </div>
                  
                  {/* Small gallery images */}
                  <div className="flex gap-3 justify-center">
                    <img 
                      src="/lovable-uploads/d4329b10-4f51-4095-8797-1facffe17405.png" 
                      alt="Child playing with dice" 
                      className="w-16 h-16 rounded-lg object-cover shadow-md opacity-80 hover:opacity-100 transition-opacity"
                    />
                    <img 
                      src="/lovable-uploads/4d86a8d1-7da7-4d57-b494-d93c29d442e4.png" 
                      alt="Family playing together" 
                      className="w-16 h-16 rounded-lg object-cover shadow-md opacity-80 hover:opacity-100 transition-opacity"
                    />
                    <img 
                      src="/lovable-uploads/351cc6b9-e617-4bcd-8988-f83cdb2b68de.png" 
                      alt="Children with dice" 
                      className="w-16 h-16 rounded-lg object-cover shadow-md opacity-80 hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>
              </div>
              
              {/* Product Info */}
              <div className="p-8 md:p-10">
                <div className="mb-4">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    🎯 Complete Set
                  </span>
                </div>
                
                <h2 className="text-3xl font-bold mb-2">Soft Storytelling Dice Set</h2>
                <p className="text-gray-600 mb-4">🎲 Set of 3 Colorful Story Dice 🎲</p>
                
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-gray-400 line-through text-xl">₹1,899</span>
                  <span className="text-3xl font-bold text-red-500">₹1,299</span>
                  <span className="text-green-600 font-medium bg-green-50 px-2 py-1 rounded text-sm">
                    💰 Save ₹600!
                  </span>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <p><strong>3 Soft Dice Set</strong> - Complete storytelling experience</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <p><strong>🧸 Baby Safe Materials</strong> - Soft, embroidered fabric cubes</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <p><strong>🎨 Creative Learning</strong> - Builds imagination & storytelling skills</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <p><strong>📱 Screen-Free Fun</strong> - Physical play for digital detox</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <p><strong>👨‍👩‍👧‍👦 Family Bonding</strong> - Perfect for parent-child interaction</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <p><strong>🎯 Ages 3+</strong> - Suitable for toddlers and young children</p>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-green-500 hover:bg-green-600 text-white text-lg py-6 transform hover:scale-105 transition-all shadow-lg"
                  onClick={handleWhatsAppClick}
                >
                  🛒 Order Complete Set on WhatsApp
                </Button>
                
                <p className="text-center text-sm text-gray-500 mt-4">
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
