
import React from 'react';
import HeroSection from '@/components/HeroSection';
import ProductCard from '@/components/ProductCard';
import EducationalBenefits from '@/components/EducationalBenefits';
import TrustSection from '@/components/TrustSection';
import RSVPForm from '@/components/RSVPForm';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen font-poppins">
      {/* Main content */}
      <main>
        <HeroSection />
        <ProductCard />
        <EducationalBenefits />
        <TrustSection />
        <RSVPForm />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
