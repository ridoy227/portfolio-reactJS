import React, { useState, useRef, useEffect } from 'react';
import './PortfolioSection.css';

import imgInvestor from '../assets/investor-groupllc.png';
import imgLirante from '../assets/b0eb65dcdb6082da906fde33327b458268159d80.png';
import imgUnion from '../assets/ccfdb7502b85a08a8680dd69bbf8f40d1aecb56c.svg';
import imgVector from '../assets/81bdce8e525ef4788fce47b9d51ca1c4127e86c6.svg';
import imgVector1 from '../assets/3b88acfc6a5ec5ad32cd308a92fa59b742d56c2b.svg';

// list of items with iamge path, name
const portfolioList = [
  { id: 1, name: 'Lirante', image: imgLirante },
  { id: 2, name: 'Investors Group LLC', image: imgInvestor },
  { id: 3, name: 'Lirante', image: imgLirante },
  { id: 4, name: 'Lirante', image: imgLirante },
];

export const PortfolioSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('Landing Page');
  const carouselRef = useRef(null);

  const categories = [
    'Landing Page',
    'Product Design',
    'Animation',
    'Glassmorphism',
    'Cards'
  ];

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
    <section className="portfolio-wrapper mt-10" id="project">
      <div className="portfolio-header">
        <h2 className="portfolio-title">
          Lets have a look at my <span className="highlight">Portfolio</span>
        </h2>
        <button className="see-all-btn">See All</button>
      </div>

      <div className="portfolio-content mb-20">
        {/* Carousel */}
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
                <div className="portfolio-card-icon">
                  <img src={imgUnion} alt="Arrow" style={{ width: '24px', height: '24px' }} />
                </div>
                <h3 className="portfolio-card-title">{item.name}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Dots */}
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

        {/* Categories Bar */}
        <div className="portfolio-categories">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className={`category-pill ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              <p>{cat}</p>
            </button>
          ))}
        </div>

        {/* Project Details Block */}
        <div className="portfolio-details">
          <div className="portfolio-details-header">
            <h3 className="portfolio-details-title">
              Lirante - Food Delivery Solution
            </h3>
            <button className="portfolio-details-btn">
              <div className="portfolio-details-arrow-wrapper">
                <img src={imgVector1} alt="" className="arrow-line-1" />
                <img src={imgVector} alt="" className="arrow-line-2" />
              </div>
            </button>
          </div>
          <p className="portfolio-details-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.
          </p>
        </div>
      </div>
    </section>
  );
};
