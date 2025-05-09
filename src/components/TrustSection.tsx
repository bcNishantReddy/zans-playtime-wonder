import React from 'react';
import { Check } from "lucide-react";
const TrustSection: React.FC = () => {
  return <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Trust Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ZANS is created with expertise, quality, and safety in mind
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {/* Expert Credentials */}
          <div className="bg-gradient-to-br from-white to-zans-lightpink/30 rounded-3xl p-6 shadow">
            <h3 className="text-xl font-bold mb-4">Expert Design & Credentials</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <p>Designed by students of RV University and IIT-M</p>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <p>Mentored by ABAI & RV University</p>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <p>Elevate 2024 Grand Finale Winners</p>
              </li>
            </ul>
          </div>
          
          {/* Safety & Quality */}
          <div className="bg-gradient-to-br from-white to-zans-lightblue/30 rounded-3xl p-6 shadow">
            <h3 className="text-xl font-bold mb-4">Safety & Quality</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <p>Safe, parent-approved materials</p>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <p>Rigorously tested for durability</p>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <p>Child-safe embroidered designs</p>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Updated Logos */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          <div className="bg-white p-3 rounded-lg shadow w-40 h-24 flex items-center justify-center">
            <div className="text-center">
              <img src="/lovable-uploads/abaa153f-525d-4dd9-942e-f5af8aec5239.png" alt="Government of Karnataka" className="h-16 object-contain mx-auto" />
            </div>
          </div>
          <div className="bg-white p-3 rounded-lg shadow w-40 h-24 flex items-center justify-center">
            <div className="text-center">
              <img src="/lovable-uploads/48e647af-10f1-4937-ba61-474ed771363f.png" alt="Elevate 2024" className="h-16 object-contain mx-auto" />
            </div>
          </div>
          <div className="bg-white p-3 rounded-lg shadow w-40 h-24 flex items-center justify-center">
            <div className="text-center">
              <img src="/lovable-uploads/6bead77b-dc71-4861-96b3-1e286d34f946.png" alt="KTech" className="h-16 object-contain mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default TrustSection;