
import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const Footer: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917349045386', '_blank');
  };
  
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main content */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Left column - Contact & CTA */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">ZANS</h3>
              <p className="text-gray-600 mb-6 max-w-md">
                Crafting tomorrow's thinkers through fun, engaging, and educational toys that spark creativity and joy.
              </p>
              
              <Button 
                className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-2"
                onClick={handleWhatsAppClick}
              >
                <MessageSquare className="h-5 w-5" />
                Order on WhatsApp
              </Button>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Contact Us</h4>
              <p className="text-gray-600 mb-1">WhatsApp: +91 7349045386</p>
              <p className="text-gray-600">Email: xansoffice@gmail.com</p>
            </div>
          </div>
          
          {/* Right column - Logos */}
          <div>
            <h4 className="font-medium mb-4">Trusted By</h4>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white p-3 rounded-lg shadow h-16 flex items-center justify-center">
                <div className="text-center text-xs font-medium px-4">
                  Govt of Karnataka
                </div>
              </div>
              <div className="bg-white p-3 rounded-lg shadow h-16 flex items-center justify-center">
                <div className="text-center text-xs font-medium px-4">
                  Elevate 2025
                </div>
              </div>
              <div className="bg-white p-3 rounded-lg shadow h-16 flex items-center justify-center">
                <div className="text-center text-xs font-medium px-4">
                  KTech
                </div>
              </div>
              <div className="bg-white p-3 rounded-lg shadow h-16 flex items-center justify-center">
                <div className="text-center text-xs font-medium px-4">
                  100% Trust
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom section with copyright */}
        <div className="border-t border-gray-200 pt-8 mt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} ZANS Toys. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
