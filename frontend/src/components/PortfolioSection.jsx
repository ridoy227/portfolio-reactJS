import React, { useState, useRef, useEffect } from 'react';
import './PortfolioSection.css';

import imgFrame26 from '../assets/investor-groupllc.png';
import imgUnion from '../assets/ccfdb7502b85a08a8680dd69bbf8f40d1aecb56c.svg';
import imgVector from '../assets/81bdce8e525ef4788fce47b9d51ca1c4127e86c6.svg';
import imgVector1 from '../assets/3b88acfc6a5ec5ad32cd308a92fa59b742d56c2b.svg';


// list of items with iamge path, name
const portfolioList = [
  { id: 1, name: 'Investors Group LLC', image: imgFrame26 },
  { id: 1, name: 'Lirante', image: imgFrame26 },
  { id: 1, name: 'Lirante', image: imgFrame26 },
  { id: 1, name: 'Lirante', image: imgFrame26 },
];


export const PortfolioSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      if (carouselRef.current) {
        const itemWidth = carouselRef.current.children[0].offsetWidth;
        const gap = 24;
        const totalItems = portfolioList.length;

        setCurrentIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % totalItems;
          carouselRef.current.scrollTo({
            left: nextIndex * (itemWidth + gap),
            behavior: 'smooth'
          });
          return nextIndex;
        });
      }
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft;
      const itemWidth = carouselRef.current.children[0].offsetWidth;
      const gap = 24;
      const newIndex = Math.round(scrollLeft / (itemWidth + gap));
      setCurrentIndex(newIndex);
    }
  };

  const handleDotClick = (index) => {
    if (carouselRef.current) {
      const itemWidth = carouselRef.current.children[0].offsetWidth;
      const gap = 24;
      carouselRef.current.scrollTo({
        left: index * (itemWidth + gap),
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  return (
    <section className="portfolio-wrapper" id="project">
      <div className="portfolio-header">
        <h2 className="portfolio-title">
          Lets have a look at my <span className="highlight">Portfolio</span>
        </h2>
        <button className="see-all-btn">See All</button>
      </div>

      <div className="portfolio-content">
        <div
          className="portfolio-carousel"
          ref={carouselRef}
          onScroll={handleScroll}
        >
          {portfolioList.map((item, index) => (
            <div key={index} className="portfolio-card">
              <img className="portfolio-card-bg" src={item.image} alt="Project" />
              <div className="portfolio-card-gradient"></div>
              <div className="portfolio-card-content">
                {/* <div className="portfolio-card-icon">
                  <img src={imgUnion} alt="Arrow" style={{ width: '24px', height: '24px' }} />
                </div> */}
                <h3 className="portfolio-card-title">{item.name}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="portfolio-pagination">
          {portfolioList.map((_, index) => (
            <div
              key={index}
              className={`dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
              style={{ cursor: 'pointer' }}
            ></div>
          ))}
        </div>

        <div className="portfolio-marquee-wrapper">
          <div className="portfolio-marquee">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="portfolio-marquee-content">
                {["Landing Page", "✦", "Product Design", "✦", "Animation", "✦", "Glassmorphism", "✦", "Cards", "✦"].map((tag, j) => (
                  <span key={j} className="portfolio-marquee-tag">{tag}</span>
                ))}
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};
