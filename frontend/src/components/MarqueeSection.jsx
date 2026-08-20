import React from 'react';
import './MarqueeSection.css';

export const MarqueeSection = () => {
  const marqueeItems = [
    "Landing Page", "✦", 
    "Product Design", "✦", 
    "Animation", "✦", 
    "Glassmorphism", "✦", 
    "Cards", "✦"
  ];

  return (
    <div className="marquee-section-container">
      <div className="marquee-section-wrapper">
        <div className="marquee-section-track">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="marquee-section-content">
              {marqueeItems.map((tag, j) => (
                <span key={j} className="marquee-section-tag">{tag}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
