
import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageSquare, Check, Truck, Clock } from "lucide-react";

const PricingSection: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917349045386?text=Hi!%20I%20want%20to%20buy%20the%20ZANS%20Storytelling%20Dice', '_blank');
  };

  return (
    <section className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/10 to-secondary/15"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Get Your ZANS Dice Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Invest in your child's creativity and development
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Product Image */}
            <div className="order-2 lg:order-1">
              <div className="glass-card rounded-3xl p-8 shadow-2xl">
                <img 
                  src="/lovable-uploads/2a47b6d2-cfce-4368-8532-e2b34d4fcbb5.png" 
                  alt="ZANS Soft Storytelling Dice Set" 
                  className="w-full h-auto object-contain rounded-2xl"
                />
              </div>
            </div>

            {/* Pricing Card */}
            <div className="order-1 lg:order-2">
              <div className="glass-card rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
                {/* Limited Time Badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    Limited Time
                  </div>
                </div>
                
                <div className="relative z-10">
                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-2xl text-muted-foreground line-through">₹1,299</span>
                      <span className="text-5xl font-bold text-primary">₹999</span>
                    </div>
                    <div className="text-destructive font-semibold text-lg mb-2">
                      Save ₹300 - Limited Time Offer
                    </div>
                    <div className="text-muted-foreground text-lg">ZANS Storytelling Dice Set</div>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">Soft & Safe Materials</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">6 Unique Story Images</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">Educational & Fun</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Truck className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground font-medium">Free Shipping in India</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-xl py-6 rounded-2xl shadow-lg transform hover:scale-105 transition-all flex items-center gap-3 justify-center font-semibold"
                    onClick={handleWhatsAppClick}
                  >
                    <MessageSquare className="h-6 w-6" />
                    Buy Now on WhatsApp
                  </Button>

                  <p className="text-center text-sm text-muted-foreground mt-4">
                    Secure payment • Fast delivery • 100% satisfaction
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
