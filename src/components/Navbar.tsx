
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-zans-pink to-zans-blue flex items-center justify-center text-white font-bold text-lg">
              Z
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-zans-pink to-zans-blue bg-clip-text text-transparent">ZANS</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('products-section')} 
              className="text-gray-700 hover:text-zans-pink transition-colors"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('benefits-section')} 
              className="text-gray-700 hover:text-zans-pink transition-colors"
            >
              Benefits
            </button>
            <button 
              onClick={() => scrollToSection('story-section')} 
              className="text-gray-700 hover:text-zans-pink transition-colors"
            >
              Our Story
            </button>
            <button 
              onClick={() => scrollToSection('testimonials-section')} 
              className="text-gray-700 hover:text-zans-pink transition-colors"
            >
              Testimonials
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="p-2">
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-2 rounded-lg bg-white shadow">
            <div className="flex flex-col space-y-3 px-4 py-2">
              <button 
                onClick={() => scrollToSection('products-section')}
                className="text-left py-2 text-gray-700 hover:text-zans-pink transition-colors"
              >
                Products
              </button>
              <button 
                onClick={() => scrollToSection('benefits-section')}
                className="text-left py-2 text-gray-700 hover:text-zans-pink transition-colors"
              >
                Benefits
              </button>
              <button 
                onClick={() => scrollToSection('story-section')}
                className="text-left py-2 text-gray-700 hover:text-zans-pink transition-colors"
              >
                Our Story
              </button>
              <button 
                onClick={() => scrollToSection('testimonials-section')}
                className="text-left py-2 text-gray-700 hover:text-zans-pink transition-colors"
              >
                Testimonials
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
