import React, { useState, useEffect } from 'react';
import './ServiceSection.css';

import imgServiceBg from '../assets/service-bg.png';
import imgServiceStar1 from '../assets/service-star-1.png';
import imgServiceStar2 from '../assets/service-star-2.png';
import imgServiceStar3 from '../assets/service-star-3.png';
import imgServiceUiUx from '../assets/uiux.jpeg';
import imgServiceWeb from '../assets/web-development.jpeg';
import imgLandingPage from '../assets/landing-page.jpeg';
import imgServiceBorder from '../assets/service-border.svg';
import imgServiceArrow1 from '../assets/service-arrow1.svg';
import imgServiceArrow2 from '../assets/service-arrow2.svg';
import mobileApp from '../assets/mobile-app.jpeg';
import productStategy from '../assets/product-strategy.jpeg';


export const ServiceSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const services = [
    { title: "UI/ UX Design", image: imgServiceUiUx },
    { title: "Web Design", image: imgServiceWeb },
    { title: "Landing Page", image: imgLandingPage },
    { title: "Mobile App", image: mobileApp },
    { title: "Product Strategy", image: productStategy },
  ];

  // Clone the first 3 items at the end to make infinite scroll seamless
  const extendedServices = [
    ...services,
    ...services.slice(0, 3)
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTransitionEnabled(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  // Reset index to 0 without transition when reaching the first clone page
  useEffect(() => {
    if (currentIndex === services.length) {
      const timeout = setTimeout(() => {
        setTransitionEnabled(false);
        setCurrentIndex(0);
        
        // Re-enable transition in the next tick
        setTimeout(() => {
          setTransitionEnabled(true);
        }, 50);
      }, 500); // 500ms matches transition duration

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, services.length]);

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
        </div>

        {/* Service Cards */}
        <div className="service-cards-container">
          <div className="service-cards-viewport">
            <div
              className="service-cards-track"
              style={{ 
                transform: `translateX(-${currentIndex * (416 + 20)}px)`,
                transition: transitionEnabled ? 'transform 0.5s ease-in-out' : 'none'
              }}
            >
              {extendedServices.map((service, index) => (
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
            {services.map((_, idx) => (
              <div
                key={idx}
                className={`dot ${currentIndex % services.length === idx ? 'active' : ''}`}
                onClick={() => {
                  setTransitionEnabled(true);
                  setCurrentIndex(idx);
                }}
                style={{ cursor: 'pointer' }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
