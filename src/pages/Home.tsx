import React, { useEffect } from 'react';
import { Hero } from '../components/home/Hero';
import { FeaturesBento } from '../components/home/FeaturesBento';
import { AboutPreview } from '../components/home/AboutPreview';
import { GettingStartedSteps } from '../components/home/GettingStartedSteps';
import { BenefitsSection } from '../components/home/BenefitsSection';
import { TestimonialsCarousel } from '../components/home/TestimonialsCarousel';
import { PricingSection } from '../components/home/PricingSection';
import { FAQAccordion } from '../components/home/FAQAccordion';
import { BlogPreview } from '../components/home/BlogPreview';
import { FinalCTA } from '../components/home/FinalCTA';

export const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full">
      {/* 2. Hero */}
      <Hero />

      {/* 3. Features */}
      <FeaturesBento />

      {/* 4. About */}
      <AboutPreview />

      {/* 5. Getting Started (3-step interactive) */}
      <GettingStartedSteps />

      {/* 6. Benefits (Doctors, Clinics/Hospitals, Patients) */}
      <BenefitsSection />

      {/* 7. Testimonials */}
      <TestimonialsCarousel />

      {/* 8. Pricing */}
      <PricingSection />

      {/* 9. FAQ */}
      <FAQAccordion />

      {/* 10. Blog Preview */}
      <BlogPreview />

      {/* 11. Final CTA */}
      <FinalCTA />
    </div>
  );
};
