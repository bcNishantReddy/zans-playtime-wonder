import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
const Testimonials: React.FC = () => {
  const testimonials = [{
    name: "Priya S.",
    role: "Mother of 2",
    text: "My 3-year-old loves this dice! We roll it every night before bed and make up stories. It's helping her vocabulary grow so much!",
    rating: 5
  }, {
    name: "Arjun K.",
    role: "Early Childhood Educator",
    text: "As a preschool teacher, I can confidently say this is one of the most effective learning toys I've seen. The children are always excited when I bring it out.",
    rating: 5
  }, {
    name: "Meera T.",
    role: "Parent & Pediatrician",
    text: "I recommend the ZANS dice to many of my patients. It's a wonderful screen-free option that genuinely helps with development.",
    rating: 5
  }];
  return <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 text-zans-blue px-4 py-1 text-sm bg-slate-950">Testimonials</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Parents Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from families who have made ZANS Storytelling Dice part of their daily routine
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-6 shadow">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />)}
              </div>
              
              <blockquote className="text-gray-700 mb-4">"{testimonial.text}"</blockquote>
              
              <div className="mt-auto">
                <p className="font-medium">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Testimonials;