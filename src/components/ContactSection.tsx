
import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageSquare, Mail, Instagram, Facebook, Youtube } from "lucide-react";

const ContactSection: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917349045386', '_blank');
  };

  return (
    <section className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-pink-50/50 to-blue-50/50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you!
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="bg-white/30 backdrop-blur-lg border border-white/40 rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-800">WhatsApp</div>
                  <div className="text-gray-600">+91 7349045386</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-800">Email</div>
                  <div className="text-gray-600">zansoffice@gmail.com</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="font-medium mb-4 text-gray-800">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-pink-500/20 rounded-full flex items-center justify-center hover:bg-pink-500/30 transition-colors">
                  <Instagram className="h-5 w-5 text-pink-600" />
                </a>
                <a href="#" className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center hover:bg-blue-500/30 transition-colors">
                  <Facebook className="h-5 w-5 text-blue-600" />
                </a>
                <a href="#" className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center hover:bg-red-500/30 transition-colors">
                  <Youtube className="h-5 w-5 text-red-600" />
                </a>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="bg-white/30 backdrop-blur-lg border border-white/40 rounded-3xl p-8 shadow-xl flex flex-col justify-center">
            <div className="text-center">
              <div className="text-6xl mb-6">💬</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Ready to Order?</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Get your ZANS Storytelling Dice today and start creating magical stories with your little ones!
              </p>
              
              <Button 
                className="w-full bg-green-500 hover:bg-green-600 text-white text-lg py-6 rounded-2xl shadow-lg transform hover:scale-105 transition-all flex items-center gap-3 justify-center"
                onClick={handleWhatsAppClick}
              >
                <MessageSquare className="h-5 w-5" />
                Start Chat on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
