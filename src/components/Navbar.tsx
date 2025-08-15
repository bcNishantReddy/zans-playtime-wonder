
import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Camera, Home } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleInterestedClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSfvF2hlxdkcVw1BxcJ4Y925ahhaUcYxGoPe0LToW_rD1jjq5g/viewform', '_blank');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/80 backdrop-blur-xl border-b border-border shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/d53ae836-3b93-4660-b442-cff017f47c91.png" 
                alt="ZANS Logo" 
                className="h-8 w-auto object-contain" 
              />
              <span className="font-bold text-xl text-foreground">ZANS</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            <Link 
              to="/story-dice" 
              className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
            >
              <Sparkles className="h-4 w-4" />
              <span>Story Dice</span>
            </Link>
            <Link 
              to="/gallery" 
              className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
            >
              <Camera className="h-4 w-4" />
              <span>Gallery</span>
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button 
              onClick={handleInterestedClick} 
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-6"
            >
              Get Interested
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <Button 
              onClick={handleInterestedClick} 
              size="sm" 
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Interested
            </Button>
            <button 
              onClick={toggleMenu} 
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border">
            <div className="container mx-auto px-6 py-4">
              <div className="flex flex-col space-y-4">
                <Link 
                  to="/" 
                  className="flex items-center space-x-2 py-2 text-muted-foreground hover:text-foreground transition-colors font-medium" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Home className="h-4 w-4" />
                  <span>Home</span>
                </Link>
                <Link 
                  to="/story-dice" 
                  className="flex items-center space-x-2 py-2 text-muted-foreground hover:text-foreground transition-colors font-medium" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Sparkles className="h-4 w-4" />
                  <span>Story Dice</span>
                </Link>
                <Link 
                  to="/gallery" 
                  className="flex items-center space-x-2 py-2 text-muted-foreground hover:text-foreground transition-colors font-medium" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Camera className="h-4 w-4" />
                  <span>Gallery</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
