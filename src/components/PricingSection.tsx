
import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageSquare, Check, Truck } from "lucide-react";

const PricingSection: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917349045386?text=Hi!%20I%20want%20to%20buy%20the%20ZANS%20Storytelling%20Dice', '_blank');
  };

  return (
    <section className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-blue-50/50 to-purple-50/50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Get Your ZANS Dice Today!
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Invest in your child's creativity and development
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          {/* Glassmorphic Pricing Card */}
          <div className="bg-white/30 backdrop-blur-lg border border-white/40 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-400/20 blur-xl"></div>
            
            <div className="relative z-10">
              {/* Price */}
              <div className="text-center mb-8">
                <div className="text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  ₹299
                </div>
                <div className="text-gray-600 text-lg">ZANS Storytelling Dice Set</div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Soft & Safe Materials</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">6 Unique Story Images</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Educational & Fun</span>
                </div>
                <div className="flex items-center gap-3">
                  <Truck className="h-5 w-5 text-blue-500" />
                  <span className="text-gray-700 font-medium">Free Shipping in India</span>
                </div>
              </div>

              {/* CTA Button */}
              <Button 
                className="w-full bg-green-500 hover:bg-green-600 text-white text-xl py-6 rounded-2xl shadow-lg transform hover:scale-105 transition-all flex items-center gap-3 justify-center"
                onClick={handleWhatsAppClick}
              >
                <MessageSquare className="h-6 w-6" />
                Buy Now on WhatsApp
              </Button>

              <p className="text-center text-sm text-gray-500 mt-4">
                Secure payment • Fast delivery • 100% satisfaction
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
