import React from 'react';
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
  { id: 2, name: 'Lirante', image: imgFrame26 },
];


export const PortfolioSection = () => {
  return (
    <section className="portfolio-wrapper" id="project">
      <div className="portfolio-header">
        <h2 className="portfolio-title">
          Lets have a look at my <span className="highlight">Portfolio</span>
        </h2>
        <button className="see-all-btn">See All</button>
      </div>

      <div className="portfolio-content">
        <div className="portfolio-carousel">
          {portfolioList.map(item => (
            <div key={item.id} className="portfolio-card">
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

        <div className="portfolio-pagination">
          <div className="dot active"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
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
