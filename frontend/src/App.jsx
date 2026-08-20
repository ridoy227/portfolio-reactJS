import React from 'react';
import './index.css';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ServiceSection } from './components/ServiceSection';
import { ExperienceSection } from './components/ExperienceSection';
import { WhyHireMeSection } from './components/WhyHireMeSection';
import { PortfolioSection } from './components/PortfolioSection';
import { MarqueeSection } from './components/MarqueeSection';
import { TestimonialSection } from './components/TestimonialSection';
import { ContactSection } from './components/ContactSection';
import { BlogSection } from './components/BlogSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Header />
      <HeroSection />
      <ServiceSection />
      <ExperienceSection />
      <WhyHireMeSection />
      <PortfolioSection />
      <MarqueeSection />
      <TestimonialSection />
      <ContactSection />
      <BlogSection />
      <Footer />
    </div>
  );
}

export default App;
