import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProductCard from '@/components/ProductCard';
import EducationalBenefits from '@/components/EducationalBenefits';
import TrustSection from '@/components/TrustSection';
import OurStory from '@/components/OurStory';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import HappyKidsSection from '@/components/HappyKidsSection';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen font-poppins">
      {/* Navbar */}
      <Navbar />
      
      {/* Main content */}
      <main>
        <HeroSection />
        <div id="products-section">
          <ProductCard />
        </div>
        <HappyKidsSection />
        <div id="benefits-section">
          <EducationalBenefits />
        </div>
        <div id="story-section">
          <OurStory />
        </div>
        <div id="testimonials-section">
          <Testimonials />
        </div>
        <TrustSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
