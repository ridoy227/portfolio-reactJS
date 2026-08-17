import React from 'react';
import './WhyHireMeSection.css';

import imgMaskGroup from '../assets/1b5633d8c33f2ece91ab6f55e11cdcd6c4f9c261.png';

export const WhyHireMeSection = () => {
  return (
    <section className="why-hire-me-wrapper" id="about">
      <div className="why-hire-me-container">
        <div className="why-hire-me-content">
          <div className="why-hire-me-images">
            <img className="why-hire-me-mask" src={imgMaskGroup} alt="Why Hire Me" />
            {/* The decorative ellipses are omitted for simplicity, but could be added via absolute positioned svgs */}
          </div>
          
          <div className="why-hire-me-details">
            <h2 className="why-title">
              Why <span className="highlight">Hire me</span>?
            </h2>
            <p className="why-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales 
            </p>
            
            <div className="why-stats">
              <div className="stat-item">
                <span className="stat-number">450+</span>
                <span className="stat-label">Project Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">450+</span>
                <span className="stat-label">Project Completed</span>
              </div>
            </div>

            <button className="why-hire-btn">Hire me</button>
          </div>
        </div>
      </div>
    </section>
  );
};
