
import React from 'react';
import HeroSection from '@/components/HeroSection';
import ProductCard from '@/components/ProductCard';
import EducationalBenefits from '@/components/EducationalBenefits';
import TrustSection from '@/components/TrustSection';
import OurStory from '@/components/OurStory';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen font-poppins">
      {/* Main content */}
      <main>
        <HeroSection />
        <ProductCard />
        <EducationalBenefits />
        <OurStory />
        <Testimonials />
        <TrustSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
