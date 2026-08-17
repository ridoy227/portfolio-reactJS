import React, { useState, useEffect } from 'react';
import './ServiceSection.css';

import imgServiceBg from '../assets/service-bg.png';
import imgServiceStar1 from '../assets/service-star-1.png';
import imgServiceStar2 from '../assets/service-star-2.png';
import imgServiceStar3 from '../assets/service-star-3.png';
import imgServiceUiUx from '../assets/service-uiux.png';
import imgServiceWeb from '../assets/service-web.png';
import imgServiceMask from '../assets/service-mask.svg';
import imgServiceBorder from '../assets/service-border.svg';
import imgServiceLine from '../assets/service-line.svg';
import imgServiceArrow1 from '../assets/service-arrow1.svg';
import imgServiceArrow2 from '../assets/service-arrow2.svg';

export const ServiceSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    { title: "UI/ UX Design", image: imgServiceUiUx },
    { title: "Web Design", image: imgServiceWeb },
    { title: "Landing Page", image: imgServiceUiUx },
    { title: "Mobile App", image: imgServiceWeb },
    { title: "Product Strategy", image: imgServiceUiUx },
    { title: "Illustration", image: imgServiceWeb }
  ];

  // For a 3-item layout, we can slide up to (total - 3) times.
  // With 6 items, that gives us exactly 4 distinct pages/dots (0, 1, 2, 3)
  const maxIndex = services.length - 3; 

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
    }, 3000);

    return () => clearInterval(timer);
  }, [maxIndex]);

  return (
    <section className="service-container" id="service">
      <div className="service-wrapper">
        {/* Background Layer */}
        <div className="service-bg-layer">
          <div className="service-bg-color"></div>
          <img className="service-bg-image" src={imgServiceBg} alt="" />
        </div>

        {/* 3D Abstract Shapes */}
        <div className="service-decorations">
          <img className="service-abstract-1 floating-1" src={imgServiceStar1} alt="" />
          <div className="service-abstract-2-wrapper floating-2">
            <img className="service-abstract-2" src={imgServiceStar3} alt="" />
          </div>
          <div className="service-abstract-3-wrapper floating-3">
            <img className="service-abstract-3" src={imgServiceStar2} alt="" />
          </div>
        </div>

        {/* Content Header */}
        <div className="service-header">
          <h2 className="service-title">
            My <span className="highlight">Services</span>
          </h2>
          <p className="service-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales 
          </p>
        </div>

        {/* Service Cards */}
        <div className="service-cards-container">
          <div className="service-cards-viewport">
            <div 
              className="service-cards-track"
              style={{ transform: `translateX(-${currentIndex * (416 + 20)}px)` }}
            >
              {services.map((service, index) => (
                <div key={index} className="service-card">
                  {/* The mask applies the cut-out corner shape */}
                  <div className="service-card-mask">
                    
                    {/* The SVG containing the glass gradient and border */}
                    <img className="service-glass-bg" src={imgServiceBorder} alt="" />
                    
                    {/* The stacked mockups */}
                    <div className="service-card-stack">
                      <div className="service-stack-layer-1"></div>
                      <div className="service-stack-layer-2"></div>
                      <div className="service-stack-layer-3">
                        <img src={service.image} alt={service.title} />
                      </div>
                    </div>

                    {/* Text Content inside the mask */}
                    <div className="service-card-content">
                      <h3 className="service-card-title">{service.title}</h3>
                      <img className="service-card-line" src={imgServiceLine} alt="" />
                    </div>
                  </div>

                  {/* Arrow Button outside the mask but positioned over the cutout */}
                  <div className="service-card-btn">
                    <div className="service-btn-icon">
                      <img src={imgServiceArrow1} alt="" className="arrow-layer-1" />
                      <img src={imgServiceArrow2} alt="" className="arrow-layer-2" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="service-pagination">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <div 
                key={idx} 
                className={`dot ${currentIndex === idx ? 'active' : ''}`}
                onClick={() => setCurrentIndex(idx)}
                style={{ cursor: 'pointer' }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
