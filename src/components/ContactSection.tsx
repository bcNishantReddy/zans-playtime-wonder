
import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageSquare, Mail, Instagram, Facebook, Youtube } from "lucide-react";

const ContactSection: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917349045386', '_blank');
  };

  return (
    <section className="py-12 sm:py-16 md:py-24 relative bg-gradient-to-br from-primary/5 via-background to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 text-foreground">
            Get In Touch
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-medium px-4 sm:px-0">
            Have questions? We'd love to hear from you!
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Info */}
          <div className="animate-slide-up">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-10 text-foreground">Contact Information</h3>
            
            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-green-500 to-green-400 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
                  <MessageSquare className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <div>
                  <div className="font-bold text-foreground text-base sm:text-lg">WhatsApp</div>
                  <div className="text-muted-foreground text-base sm:text-lg">+91 7349045386</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-primary to-primary/80 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
                  <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <div>
                  <div className="font-bold text-foreground text-base sm:text-lg">Email</div>
                  <div className="text-muted-foreground text-base sm:text-lg">zansoffice@gmail.com</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 sm:mt-12">
              <h4 className="font-bold mb-4 sm:mb-6 text-foreground text-lg sm:text-xl">Follow Us</h4>
              <div className="flex gap-3 sm:gap-4">
                <a href="#" className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-pink-500 to-pink-400 rounded-xl sm:rounded-2xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                  <Instagram className="h-5 w-5 sm:h-7 sm:w-7 text-white" />
                </a>
                <a href="#" className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-blue-500 to-blue-400 rounded-xl sm:rounded-2xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                  <Facebook className="h-5 w-5 sm:h-7 sm:w-7 text-white" />
                </a>
                <a href="#" className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-red-500 to-red-400 rounded-xl sm:rounded-2xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                  <Youtube className="h-5 w-5 sm:h-7 sm:w-7 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="flex flex-col justify-center text-center animate-slide-up" style={{animationDelay: '0.2s'}}>
            <div className="text-6xl sm:text-8xl mb-6 sm:mb-8 animate-float">
              <MessageSquare className="h-16 w-16 sm:h-20 sm:w-20 text-primary mx-auto" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-foreground">Ready to Order?</h3>
            <p className="text-muted-foreground mb-8 sm:mb-10 leading-relaxed text-lg sm:text-xl px-4 sm:px-0">
              Get your ZANS Storytelling Dice today and start creating magical stories with your little ones!
            </p>
            
            <Button 
              className="w-full bg-gradient-to-r from-green-500 to-green-400 hover:from-green-600 hover:to-green-500 text-white text-lg sm:text-xl py-6 sm:py-8 rounded-xl sm:rounded-2xl shadow-2xl transform hover:scale-105 transition-all flex items-center gap-3 sm:gap-4 justify-center font-bold"
              onClick={handleWhatsAppClick}
            >
              <MessageSquare className="h-6 w-6 sm:h-7 sm:w-7" />
              Start Chat on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
