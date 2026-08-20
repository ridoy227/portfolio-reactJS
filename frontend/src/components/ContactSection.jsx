import React from 'react';
import './ContactSection.css';

import imgVuesaxBoldShieldTick from '../assets/adc227e8b3631a95969d2bd01fb389e91ed98d1b.svg';
import imgVuesaxBoldAward from '../assets/c7903ef191d853013f37cbf584651c1cdebefc86.svg';
import imgVuesaxBoldStar from '../assets/ea1f66ce91d56e38d5116b44fc22986378630a6f.svg';
import imgVuesaxBoldSms from '../assets/a2ab69b658e0167dd47b8b3d6ae3daea49629842.svg';

export const ContactSection = () => {
  return (
    <section className="contact-container" id="contact">
      <h2 className="contact-title">
        Have an Awsome Project Idea? <span className="highlight">Let's Discuss</span>
      </h2>

      <div className="contact-form-wrapper">
        <div className="contact-form">
          <div className="contact-input-group">
            <div className="contact-icon-wrapper">
              <img src={imgVuesaxBoldSms} alt="SMS" style={{ width: '32px', height: '32px' }} />
            </div>
            <input
              type="email"
              className="contact-input"
              placeholder="Enter Email Address"
            />
          </div>
          <button className="contact-btn">Send</button>
        </div>

        <div className="contact-badges">
          <div className="contact-badge">
            <img src={imgVuesaxBoldStar} alt="Star" style={{ width: '24px', height: '24px' }} />
            <span className="contact-badge-text">4.9/5 Average Ratings</span>
          </div>
          <div className="contact-badge">
            <img src={imgVuesaxBoldAward} alt="Award" style={{ width: '24px', height: '24px' }} />
            <span className="contact-badge-text">25+ Winning Awards</span>
          </div>
          <div className="contact-badge">
            <img src={imgVuesaxBoldShieldTick} alt="Shield" style={{ width: '24px', height: '24px' }} />
            <span className="contact-badge-text">Certified Product Designer</span>
          </div>
        </div>
      </div>
    </section>
  );
};
