
import React from 'react';
import { Star, User } from "lucide-react";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Priya S.",
      role: "Mother of 2",
      text: "My 3-year-old loves this dice! We roll it every night before bed and make up stories. It's helping her vocabulary grow so much!",
      rating: 5,
      avatar: <User className="h-8 w-8" />
    },
    {
      name: "Arjun K.",
      role: "Early Childhood Educator", 
      text: "As a preschool teacher, I can confidently say this is one of the most effective learning toys I've seen. The children are always excited when I bring it out.",
      rating: 5,
      avatar: <User className="h-8 w-8" />
    },
    {
      name: "Meera T.",
      role: "Parent & Pediatrician",
      text: "I recommend the ZANS dice to many of my patients. It's a wonderful screen-free option that genuinely helps with development.",
      rating: 5,
      avatar: <User className="h-8 w-8" />
    }
  ];

  return (
    <section className="py-24 relative bg-gradient-to-br from-primary/5 via-background to-primary/5">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-foreground">
            What Parents Say
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto font-medium">
            Hear from families who have made ZANS Storytelling Dice part of their daily routine
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative group text-center animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
              {/* Main Content */}
              <div className="relative pt-16 pb-8 group-hover:transform group-hover:scale-105 transition-all duration-500">
                {/* Rating Stars */}
                <div className="flex mb-8 justify-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="text-foreground mb-8 text-center italic leading-relaxed text-lg font-medium">
                  "{testimonial.text}"
                </blockquote>
              </div>
              
              {/* Avatar and Info */}
              <div className="flex items-center justify-center">
                <div className="bg-primary/10 rounded-full p-4 mr-4 text-primary shadow-lg">
                  {testimonial.avatar}
                </div>
                <div className="text-left">
                  <p className="font-bold text-foreground text-lg">{testimonial.name}</p>
                  <p className="text-muted-foreground">{testimonial.role}</p>
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
