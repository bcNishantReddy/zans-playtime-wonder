
import React from 'react';
import { Star, User } from "lucide-react";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Priya S.",
      role: "Mother of 2",
      text: "My 3-year-old loves this dice! We roll it every night before bed and make up stories. It's helping her vocabulary grow so much!",
      rating: 5,
      avatar: <User className="h-6 w-6 sm:h-8 sm:w-8" />
    },
    {
      name: "Arjun K.",
      role: "Early Childhood Educator", 
      text: "As a preschool teacher, I can confidently say this is one of the most effective learning toys I've seen. The children are always excited when I bring it out.",
      rating: 5,
      avatar: <User className="h-6 w-6 sm:h-8 sm:w-8" />
    },
    {
      name: "Meera T.",
      role: "Parent & Pediatrician",
      text: "I recommend the ZANS dice to many of my patients. It's a wonderful screen-free option that genuinely helps with development.",
      rating: 5,
      avatar: <User className="h-6 w-6 sm:h-8 sm:w-8" />
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 relative bg-gradient-to-br from-primary/5 via-background to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 text-foreground">
            What Parents Say
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-medium px-4 sm:px-0">
            Hear from families who have made ZANS Storytelling Dice part of their daily routine
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative group text-center animate-slide-up px-4 sm:px-0" style={{animationDelay: `${index * 0.2}s`}}>
              {/* Main Content */}
              <div className="relative pt-12 sm:pt-16 pb-6 sm:pb-8 group-hover:transform group-hover:scale-105 transition-all duration-500">
                {/* Rating Stars */}
                <div className="flex mb-6 sm:mb-8 justify-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 sm:h-6 sm:w-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="text-foreground mb-6 sm:mb-8 text-center italic leading-relaxed text-base sm:text-lg font-medium">
                  "{testimonial.text}"
                </blockquote>
              </div>
              
              {/* Avatar and Info */}
              <div className="flex items-center justify-center">
                <div className="bg-primary/10 rounded-full p-3 sm:p-4 mr-3 sm:mr-4 text-primary shadow-lg">
                  {testimonial.avatar}
                </div>
                <div className="text-left">
                  <p className="font-bold text-foreground text-base sm:text-lg">{testimonial.name}</p>
                  <p className="text-muted-foreground text-sm sm:text-base">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
