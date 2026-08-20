import React, { useState, useEffect } from 'react';
import './Header.css';

import imgFrame55 from '../assets/dce43808955735977e2bb470cd2125cb97d94ed3.svg';
import imgTypo from '../assets/65fe09dec165d94ac33ffad3c3499226414be1f8.svg';

const Logo = () => (
  <div className="logo-container">
    <div className="logo-icon">
      <img alt="Logo Icon" src={imgFrame55} style={{ width: '100%', height: '100%' }} />
    </div>
    <div className="logo-text">
      <img alt="Logo Text" src={imgTypo} style={{ width: '100%', height: '100%' }} />
    </div>
  </div>
);

export const Header = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = currentScrollY;

      const sections = ['home', 'service', 'resume', 'about', 'project', 'contact', 'blog'];
      const scrollPosition = currentScrollY + 150; // Offset for the fixed header

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Call once initially
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header-container ${isVisible ? '' : 'hidden'}`}>
      <a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}>Home</a>
      <a href="#service" className={`nav-link ${activeSection === 'service' ? 'active' : ''}`}>Service</a>
      <a href="#resume" className={`nav-link ${activeSection === 'resume' ? 'active' : ''}`}>Resume</a>
      <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>About</a>
      <a href="#project" className={`nav-link ${activeSection === 'project' ? 'active' : ''}`}>Portfolio</a>
      <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>Contact</a>
      <a href="#blog" className={`nav-link ${activeSection === 'blog' ? 'active' : ''}`}>Blog</a>

      <button className="header-btn-primary" onClick={() => setIsCalendlyOpen(true)}>
        Let's Talk
      </button>

      {isCalendlyOpen && (
        <div className="google-calendar-modal-overlay" onClick={() => setIsCalendlyOpen(false)}>
          <div className="google-calendar-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="google-calendar-close-btn" onClick={() => setIsCalendlyOpen(false)}>
              &times;
            </button>
            <iframe 
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0..." /* Replace with your Google Appointment Scheduling link */
              style={{ border: 0, width: '100%', height: '100%' }} 
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      )}
    </header>
  );
};
