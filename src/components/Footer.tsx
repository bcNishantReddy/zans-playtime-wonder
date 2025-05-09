import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageSquare, Youtube, Instagram, Facebook, Twitter } from "lucide-react";
const Footer: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917349045386', '_blank');
  };
  return <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main content */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Left column - Contact & CTA */}
          <div>
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <img src="/lovable-uploads/d53ae836-3b93-4660-b442-cff017f47c91.png" alt="ZANS Logo" className="h-10 w-auto object-contain mr-2" />
              </div>
              <p className="text-gray-600 mb-6 max-w-md">
                Crafting tomorrow's thinkers through fun, engaging, and educational toys that spark creativity and joy.
              </p>
              
              <Button className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-2" onClick={handleWhatsAppClick}>
                <MessageSquare className="h-5 w-5" />
                Order on WhatsApp
              </Button>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Contact Us</h4>
              <p className="text-gray-600 mb-1">WhatsApp: +91 7349045386</p>
              <p className="text-gray-600">Email: zansoffice@gmail.com</p>
              
              <div className="flex gap-4 mt-4">
                <a href="https://www.youtube.com/channel/UCxxxxxxxxxx" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-500 transition-colors" aria-label="YouTube">
                  <Youtube className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors" aria-label="Instagram">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors" aria-label="Facebook">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-400 transition-colors" aria-label="Twitter">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Right column - Trusted By Logos */}
          <div>
            <h4 className="font-medium mb-4">Mission Believed By</h4>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white p-3 rounded-lg shadow h-16 flex items-center justify-center">
                <div className="text-center text-xs font-medium px-4">
                  <img src="/lovable-uploads/abaa153f-525d-4dd9-942e-f5af8aec5239.png" alt="Government of Karnataka" className="h-10 object-contain" />
                </div>
              </div>
              <div className="bg-white p-3 rounded-lg shadow h-16 flex items-center justify-center">
                <div className="text-center text-xs font-medium px-4">
                  <img src="/lovable-uploads/48e647af-10f1-4937-ba61-474ed771363f.png" alt="Elevate 2024" className="h-10 object-contain" />
                </div>
              </div>
              <div className="bg-white p-3 rounded-lg shadow h-16 flex items-center justify-center">
                <div className="text-center text-xs font-medium px-4">
                  <img src="/lovable-uploads/6bead77b-dc71-4861-96b3-1e286d34f946.png" alt="KTech" className="h-10 object-contain" />
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
    </footer>;
};
export default Footer;