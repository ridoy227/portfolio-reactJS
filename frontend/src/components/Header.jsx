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
  const [rootElement, setRootElement] = useState(null);

  useEffect(() => {
    // We get the root element after mount to avoid issues
    setRootElement(document.getElementById('root'));
  }, []);

  return (
    <header className="header-container">
      <button className="nav-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</button>
      <a href="#service" className="nav-link">Service</a>
      <a href="#resume" className="nav-link">Resume</a>
      <a href="#about" className="nav-link">About</a>
      <a href="#project" className="nav-link">Portfolio</a>
      <a href="#contact" className="nav-link">Contact</a>
      <a href="#blog" className="nav-link">Blog</a>

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
