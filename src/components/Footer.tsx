
import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageSquare, Youtube, Instagram, Facebook, Twitter } from "lucide-react";

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
              
              <div className="flex gap-4 mt-4">
                <a 
                  href="https://www.youtube.com/channel/UCxxxxxxxxxx" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-red-500 transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="h-6 w-6" />
                </a>
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-pink-500 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-blue-500 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-blue-400 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Right column - Logos */}
          <div>
            <h4 className="font-medium mb-4">Trusted By</h4>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white p-3 rounded-lg shadow h-16 flex items-center justify-center">
                <div className="text-center text-xs font-medium px-4">
                  <img 
                    src="https://ksca.gov.in/en/wp-content/themes/twentynineteen-child/images/ka-logo.png" 
                    alt="Government of Karnataka" 
                    className="h-10 object-contain"
                  />
                </div>
              </div>
              <div className="bg-white p-3 rounded-lg shadow h-16 flex items-center justify-center">
                <div className="text-center text-xs font-medium px-4">
                  <img 
                    src="https://ktech.karnataka.gov.in/storage/logos/1662379314elevate_logo.jpg" 
                    alt="Elevate 2025" 
                    className="h-10 object-contain"
                  />
                </div>
              </div>
              <div className="bg-white p-3 rounded-lg shadow h-16 flex items-center justify-center">
                <div className="text-center text-xs font-medium px-4">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/K-Tech_Logo.jpg/1200px-K-Tech_Logo.jpg" 
                    alt="KTech" 
                    className="h-10 object-contain"
                  />
                </div>
              </div>
              <div className="bg-white p-3 rounded-lg shadow h-16 flex items-center justify-center">
                <div className="text-center text-xs font-medium px-4">
                  <img 
                    src="https://www.pngitem.com/pimgs/m/80-800194_transparent-verified-png-100-trusted-badge-png-png.png" 
                    alt="100% Trust" 
                    className="h-10 object-contain"
                  />
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
