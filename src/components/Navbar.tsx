
import React, { useState } from 'react';
import { Menu, X, Sparkles, Camera, Home } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleInterestedClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSfvF2hlxdkcVw1BxcJ4Y925ahhaUcYxGoPe0LToW_rD1jjq5g/viewform', '_blank');
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img src="/lovable-uploads/d53ae836-3b93-4660-b442-cff017f47c91.png" alt="ZANS Logo" className="h-10 w-auto object-contain" />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="flex items-center text-gray-700 hover:text-purple-600 transition-colors font-medium">
              <Home className="h-4 w-4 mr-1" />
              Home
            </Link>
            <Link to="/story-dice" className="flex items-center text-gray-700 hover:text-purple-600 transition-colors font-medium">
              <Sparkles className="h-4 w-4 mr-1" />
              Story Dice
            </Link>
            <Link to="/gallery" className="flex items-center text-gray-700 hover:text-purple-600 transition-colors font-medium">
              <Camera className="h-4 w-4 mr-1" />
              Gallery
            </Link>
            <Button onClick={handleInterestedClick} className="text-white bg-sky-500 hover:bg-sky-400">
              Interested
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button onClick={handleInterestedClick} size="sm" className="text-white bg-sky-500 hover:bg-sky-400">
              Interested
            </Button>
            <button onClick={toggleMenu} className="p-2">
              {isMenuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-2 rounded-lg bg-white shadow">
            <div className="flex flex-col space-y-3 px-4 py-2">
              <Link to="/" className="flex items-center py-2 text-gray-700 hover:text-purple-600 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                <Home className="h-4 w-4 mr-2" />
                Home
              </Link>
              <Link to="/story-dice" className="flex items-center py-2 text-gray-700 hover:text-purple-600 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                <Sparkles className="h-4 w-4 mr-2" />
                Story Dice
              </Link>
              <Link to="/gallery" className="flex items-center py-2 text-gray-700 hover:text-purple-600 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                <Camera className="h-4 w-4 mr-2" />
                Gallery
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
