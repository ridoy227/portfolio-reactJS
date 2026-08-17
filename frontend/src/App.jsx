import React from 'react';
import './index.css';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ServiceSection } from './components/ServiceSection';
import { ExperienceSection } from './components/ExperienceSection';
import { WhyHireMeSection } from './components/WhyHireMeSection';
import { PortfolioSection } from './components/PortfolioSection';
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
      <ContactSection />
      <BlogSection />
      <Footer />
    </div>
  );
}

export default App;
