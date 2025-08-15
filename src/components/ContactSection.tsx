
import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageSquare, Mail, Instagram, Facebook, Youtube } from "lucide-react";

const ContactSection: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917349045386', '_blank');
  };

  return (
    <section className="py-24 relative bg-gradient-to-br from-shiny-blue-50/30 via-white to-shiny-blue-50/30">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-shiny-blue-700 to-shiny-blue-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-2xl text-slate-600 max-w-3xl mx-auto font-medium">
            Have questions? We'd love to hear from you!
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="animate-slide-up">
            <h3 className="text-3xl font-bold mb-10 text-slate-800">Contact Information</h3>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-400 rounded-2xl flex items-center justify-center shadow-lg">
                  <MessageSquare className="h-8 w-8 text-white" />
                </div>
                <div>
                  <div className="font-bold text-slate-800 text-lg">WhatsApp</div>
                  <div className="text-slate-600 text-lg">+91 7349045386</div>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-gradient-to-r from-shiny-blue-500 to-shiny-blue-400 rounded-2xl flex items-center justify-center shadow-lg">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <div>
                  <div className="font-bold text-slate-800 text-lg">Email</div>
                  <div className="text-slate-600 text-lg">zansoffice@gmail.com</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-12">
              <h4 className="font-bold mb-6 text-slate-800 text-xl">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-14 h-14 bg-gradient-to-r from-pink-500 to-pink-400 rounded-2xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                  <Instagram className="h-7 w-7 text-white" />
                </a>
                <a href="#" className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-400 rounded-2xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                  <Facebook className="h-7 w-7 text-white" />
                </a>
                <a href="#" className="w-14 h-14 bg-gradient-to-r from-red-500 to-red-400 rounded-2xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                  <Youtube className="h-7 w-7 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="flex flex-col justify-center text-center animate-slide-up" style={{animationDelay: '0.2s'}}>
            <div className="text-8xl mb-8 animate-float">
              <MessageSquare className="h-20 w-20 text-shiny-blue-500 mx-auto" />
            </div>
            <h3 className="text-3xl font-bold mb-6 text-slate-800">Ready to Order?</h3>
            <p className="text-slate-600 mb-10 leading-relaxed text-xl">
              Get your ZANS Storytelling Dice today and start creating magical stories with your little ones!
            </p>
            
            <Button 
              className="w-full bg-gradient-to-r from-green-500 to-green-400 hover:from-green-600 hover:to-green-500 text-white text-xl py-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-all flex items-center gap-4 justify-center font-bold"
              onClick={handleWhatsAppClick}
            >
              <MessageSquare className="h-7 w-7" />
              Start Chat on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
