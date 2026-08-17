import React from 'react';
import './HeroSection.css';

// Using provided local figma assets
import imgVector1 from '../assets/1b029b506cdf9d283a1fad3bf79fc6a93df82af7.svg';
import imgVuesaxBoldQuoteUp from '../assets/0a9145f1e53199d3e0ff8c0da06aba2e473fa614.svg';
import imgStar from '../assets/e6ca78e450aec2993a4f0a3b564dca05c8305bc9.svg';
import imgEllipse2 from '../assets/4fb3a80914193c828437132c8f102e4e79500408.svg';
import imgYoungWoman from '../assets/Gemini_Generated_Image_5nk74k5nk74k5nk7 1.png';
import imgVector from '../assets/b2effe9bec60307f97eb158dbc2f791ee7dd0eef.svg';

export const HeroSection = () => {
  return (
    <section className="hero-container">
      {/* Decorative Vectors could go here */}
      <div className="hero-decorations">
        {/* Placeholder for complex SVG background elements */}
      </div>

      <div className="hero-content">
        <div className="hello-badge-wrapper">
          <div className="hello-badge">Hello!</div>
          <img className="hello-icon" src={imgVector1} alt="Decoration" />
        </div>

        <h1 className="hero-title">
          I'm <span className="highlight">Ridoy</span>,<br />
          Mobile App Developer
        </h1>
      </div>

      <div className="hero-portrait-wrapper">
        <img className="hero-portrait-bg" src={imgEllipse2} alt="Background Shape" fetchpriority="high" />
        <img className="hero-portrait-img" src={imgYoungWoman} alt="Jenny - Product Designer" fetchpriority="high" />

        <div className="hero-actions">
          <button className="hero-btn-primary">
            Portfolio
            {/* <div className="hero-btn-icon">
              <img src={imgVector} alt="Arrow" style={{ width: '20px', height: '20px' }} />
            </div> */}
          </button>
          <button className="hero-btn-secondary">Hire me</button>
        </div>
      </div>

      <div className="hero-quote">
        <img className="hero-quote-icon" src={imgVuesaxBoldQuoteUp} alt="Quote" />
        <p className="hero-quote-text">
          Ridoy's Exceptional Development<br />
          ensure our App's success.<br />
          Highly Recommended
        </p>
      </div>

      <div className="hero-experience">
        <div className="hero-stars">
          {[1, 2, 3, 4, 5].map(i => (
            <img key={i} className="hero-star-icon" src={imgStar} alt="Star" />
          ))}
        </div>
        <div style={{ textAlign: 'right' }}>
          <div className="hero-experience-number">7 Years</div>
          <div className="hero-experience-text">Experience</div>
        </div>
      </div>
    </section>
  );
};
