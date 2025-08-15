
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import ProductShowcase from '@/components/ProductShowcase';
import EducationalBenefits from '@/components/EducationalBenefits';
import Testimonials from '@/components/Testimonials';
import PricingSection from '@/components/PricingSection';
import OurStory from '@/components/OurStory';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen font-poppins bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Navbar */}
      <Navbar />
      
      {/* Main content */}
      <main>
        <HeroSection />
        <div id="how-it-works">
          <HowItWorks />
        </div>
        <div id="products-section">
          <ProductShowcase />
        </div>
        <div id="benefits-section">
          <EducationalBenefits />
        </div>
        <div id="testimonials-section">
          <Testimonials />
        </div>
        <div id="pricing-section">
          <PricingSection />
        </div>
        <div id="story-section">
          <OurStory />
        </div>
        <div id="faq-section">
          <FAQSection />
        </div>
        <div id="contact-section">
          <ContactSection />
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
