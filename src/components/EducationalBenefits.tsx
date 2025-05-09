
import React from 'react';
import { Book, Clock, HandHeart } from "lucide-react";

const EducationalBenefits: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-zans-lightblue/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Educational Benefits</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our Soft Storytelling Dice is more than just a toy - it's a learning tool designed to help your child develop essential skills.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Speech Development */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 group">
            <div className="bg-zans-pink/20 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6 group-hover:bg-zans-pink/40 transition-colors">
              <Book className="h-8 w-8 text-zans-pink" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">Speech Development</h3>
            <p className="text-gray-600 text-center">
              Encourages verbal expression and vocabulary growth as children describe the images they see.
            </p>
          </div>
          
          {/* Cognitive Development */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 group">
            <div className="bg-zans-blue/20 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6 group-hover:bg-zans-blue/40 transition-colors">
              <Clock className="h-8 w-8 text-zans-blue" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">Cognitive Development</h3>
            <p className="text-gray-600 text-center">
              Builds critical thinking and creative problem-solving as children connect and create stories.
            </p>
          </div>
          
          {/* Parent-Child Bonding */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 group">
            <div className="bg-zans-pink/20 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6 group-hover:bg-zans-pink/40 transition-colors">
              <HandHeart className="h-8 w-8 text-zans-pink" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">Parent-Child Bonding</h3>
            <p className="text-gray-600 text-center">
              Creates meaningful moments of connection and shared joy through collaborative storytelling.
            </p>
          </div>
        </div>
        
        {/* Story-style Product Description */}
        <div className="max-w-3xl mx-auto mt-16 bg-white p-8 rounded-2xl shadow-lg border border-zans-pink/30">
          <h3 className="text-2xl font-bold mb-4 text-center italic text-gray-700">
            "Once upon a time, a little cube made of clouds helped kids tell the greatest stories ever told... each roll opened a new world!"
          </h3>
        </div>
      </div>
    </section>
  );
};

export default EducationalBenefits;
