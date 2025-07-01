import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Gallery: React.FC = () => {
  const galleryImages = [
    {
      src: "/lovable-uploads/d4329b10-4f51-4095-8797-1facffe17405.png",
      alt: "Happy child creating stories with dice",
      title: "Creative Storytelling Session",
      description: "Children discovering the magic of storytelling"
    },
    {
      src: "/lovable-uploads/4d86a8d1-7da7-4d57-b494-d93c29d442e4.png",
      alt: "Family enjoying dice games together",
      title: "Family Bonding Time",
      description: "Parents and children sharing precious moments"
    },
    {
      src: "/lovable-uploads/351cc6b9-e617-4bcd-8988-f83cdb2b68de.png",
      alt: "Children playing and learning with story dice",
      title: "Learning Through Play",
      description: "Educational fun with storytelling dice"
    },
    {
      src: "/lovable-uploads/a607f44f-90b6-4154-82d7-93b79e49bf8c.png",
      alt: "Group of children sitting in circle playing with dice",
      title: "Circle Time Stories",
      description: "Community storytelling brings everyone together"
    },
    {
      src: "/lovable-uploads/cf0eda08-ed5d-481d-a3b5-5d36e6a6f8c9.png",
      alt: "Children with colorful dice outdoors",
      title: "Outdoor Adventure Stories",
      description: "Taking creativity outside with colorful dice"
    },
    {
      src: "/lovable-uploads/391558f6-f85c-46cd-81e4-dfa4165eb793.png",
      alt: "Young child with adult showing dice",
      title: "One-on-One Learning",
      description: "Personal attention helps build confidence"
    },
    {
      src: "/lovable-uploads/b1b69221-a7ca-4d47-81b0-c42cfe16a551.png",
      alt: "Large group of children playing with dice",
      title: "Community Play Time",
      description: "Bringing children together through storytelling"
    },
    {
      src: "/lovable-uploads/d86a2abd-d9af-4255-b1d2-b5ab732fc8cc.png",
      alt: "Children holding colorful story dice",
      title: "Dice in Action",
      description: "Each dice tells a different part of the story"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-8 md:py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            📸 Kids & Stories Gallery 🌟
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Witness the joy, creativity, and learning that happens when children discover the magic of storytelling dice!
          </p>
        </div>
      </section>

      {/* Featured Carousel */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              🎭 Featured Moments
            </h2>
            <p className="text-gray-700 text-sm md:text-base">
              Swipe through these beautiful moments of children engaged in creative storytelling
            </p>
          </div>
          
          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent className="-ml-2 md:-ml-4">
              {galleryImages.slice(0, 4).map((image, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2">
                  <Card className="overflow-hidden shadow-xl rounded-xl transform hover:scale-105 transition-all duration-300 border-0 h-full">
                    <div className="relative">
                      <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="w-full h-64 md:h-80 object-cover"
                      />
                    </div>
                    <div className="p-4 bg-white">
                      <h3 className="font-bold text-lg text-gray-800 mb-2">{image.title}</h3>
                      <p className="text-gray-600 text-sm">"{image.description}"</p>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
        </div>
      </section>

      {/* Full Gallery Grid */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              🖼️ Complete Gallery
            </h2>
            <p className="text-gray-700 text-sm md:text-base">
              Explore all the wonderful moments captured during storytelling sessions
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {galleryImages.map((image, index) => (
              <Card key={index} className="overflow-hidden shadow-lg rounded-xl transform hover:scale-105 transition-all duration-300 border-0 group">
                <div className="relative">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-bold text-sm md:text-base mb-1">{image.title}</h3>
                    <p className="text-xs md:text-sm text-gray-200">{image.description}</p>
                  </div>
                  <div className="absolute top-3 right-3 text-2xl animate-bounce">
                    {index % 4 === 0 ? '🌟' : index % 4 === 1 ? '❤️' : index % 4 === 2 ? '🎈' : '✨'}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-8 md:py-12 bg-gradient-to-r from-green-500 to-blue-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            🎲 Ready to Create Your Own Stories? 
          </h2>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Join thousands of happy families who have discovered the joy of storytelling with our dice!
          </p>
          <button 
            onClick={() => window.open('https://wa.me/917349045386', '_blank')}
            className="bg-white text-green-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg transform hover:scale-105 transition-all shadow-lg"
          >
            🛒 Order Your Set Today!
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
