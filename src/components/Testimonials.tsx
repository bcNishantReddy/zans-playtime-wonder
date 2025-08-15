
import React from 'react';
import { Star } from "lucide-react";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Priya S.",
      role: "Mother of 2",
      text: "My 3-year-old loves this dice! We roll it every night before bed and make up stories. It's helping her vocabulary grow so much!",
      rating: 5,
      avatar: "👩"
    },
    {
      name: "Arjun K.",
      role: "Early Childhood Educator", 
      text: "As a preschool teacher, I can confidently say this is one of the most effective learning toys I've seen. The children are always excited when I bring it out.",
      rating: 5,
      avatar: "👨‍🏫"
    },
    {
      name: "Meera T.",
      role: "Parent & Pediatrician",
      text: "I recommend the ZANS dice to many of my patients. It's a wonderful screen-free option that genuinely helps with development.",
      rating: 5,
      avatar: "👩‍⚕️"
    }
  ];

  return (
    <section className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-purple-50/50 to-pink-50/50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            What Parents Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from families who have made ZANS Storytelling Dice part of their daily routine
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative group">
              {/* Glassmorphic Speech Bubble */}
              <div className="bg-white/30 backdrop-blur-lg border border-white/40 rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 relative">
                {/* Speech Bubble Tail */}
                <div className="absolute -bottom-3 left-8 w-6 h-6 bg-white/30 backdrop-blur-lg border-r border-b border-white/40 transform rotate-45"></div>
                
                {/* Rating Stars */}
                <div className="flex mb-6 justify-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="text-gray-700 mb-6 text-center italic leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
              </div>
              
              {/* Avatar and Info */}
              <div className="flex items-center justify-center mt-6">
                <div className="bg-white/40 backdrop-blur-lg border border-white/30 rounded-full p-4 mr-4 text-2xl">
                  {testimonial.avatar}
                </div>
                <div className="text-center">
                  <p className="font-bold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
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
