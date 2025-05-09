
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
        <Card className="overflow-hidden border-0 shadow-xl max-w-5xl mx-auto rounded-3xl">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Product Image */}
              <div className="bg-gradient-to-br from-zans-lightpink to-zans-lightblue p-8 flex items-center justify-center relative">
                <span className="absolute top-4 right-4 bg-red-500 text-white text-sm font-medium py-1 px-3 rounded-full">
                  Launch Offer
                </span>
                {/* Placeholder for product image - in real site you'd use an actual image */}
                <div className="w-60 h-60 bg-white rounded-full shadow-lg flex items-center justify-center animate-float">
                  <div className="text-7xl">🎲</div>
                </div>
              </div>
              
              {/* Product Info */}
              <div className="p-8 md:p-10">
                <h2 className="text-3xl font-bold mb-2">Soft Storytelling Dice</h2>
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-gray-400 line-through text-xl">₹999</span>
                  <span className="text-3xl font-bold text-red-500">₹599</span>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <p>Soft, embroidered, baby-safe cube</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <p>Builds imagination and storytelling</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <p>No screens, only fun</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <p>Parent-child bonding</p>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-green-500 hover:bg-green-600 text-white"
                  onClick={handleWhatsAppClick}
                >
                  Order on WhatsApp
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProductCard;
