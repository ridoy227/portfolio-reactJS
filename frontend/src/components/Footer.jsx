import React from 'react';
import './Footer.css';

import imgIconOutlinedDirectionsStraightArrowsUpRight from '../assets/d62ea272f21fbc89ae8e248373574296cc11bb18.svg';
import imgLine5 from '../assets/7d713aeaa9f2b0bc61374e15ed600828fb68f845.svg';
import imgFrame55 from '../assets/dce43808955735977e2bb470cd2125cb97d94ed3.svg';
import imgTypo from '../assets/65fe09dec165d94ac33ffad3c3499226414be1f8.svg';
import imgVuesaxBoldFacebook from '../assets/75dffa80ea8abbaa8d8a423a59b6aaa483d57515.svg';
import imgVuesaxBoldYoutube from '../assets/ea7b398a064e2dd0e77f9fde7b7ba20ea12c33a3.svg';
import imgVuesaxBoldWhatsapp from '../assets/f063da44e55603a7061a0f6cce4ce6fbe96ba0ef.svg';
import imgVuesaxBoldInstagram from '../assets/52a976cec6c061dbb21e114f4ba459189d876802.svg';
import imgUnion from '../assets/d2549e64c93aef30395d57796928025dfe8d0468.svg';
import imgSubtract from '../assets/0e9a3916b369b08541e9a15f4b6a343a9777bd54.svg';

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-header">
        <h2 className="footer-title">Lets Connect there</h2>
        <button className="footer-hire-btn">
          <span>Hire me</span>
          <img src={imgIconOutlinedDirectionsStraightArrowsUpRight} alt="Arrow" />
        </button>
      </div>

      {/* <img src={imgLine5} className="footer-line" alt="Separator" /> */}
      <div className="footer-line"></div>

      <div className="footer-main">
        <div className="footer-col-1">
          {/* <div className="footer-logo">
            <img src={imgFrame55} alt="Logo Mark" style={{ width: '46px', height: '46px' }} />
            <img src={imgTypo} alt="Md Ridoy" style={{ height: '19px' }} />
          </div> */}
          <p className="footer-desc">
            I help early-stage founders turn an idea into a working, launch-ready app in Flutter.
          </p>
          <div className="footer-socials">
            <img src={imgVuesaxBoldFacebook} alt="Facebook" />
            <img src={imgVuesaxBoldYoutube} alt="Youtube" />
            <img src={imgVuesaxBoldWhatsapp} alt="Whatsapp" />
            <img src={imgVuesaxBoldInstagram} alt="Instagram" />
            <img src={imgUnion} alt="Twitter" />
          </div>
        </div>

        <div className="footer-col">
          <h3 className="footer-col-title">Navigation</h3>
          <div className="footer-links">
            <a href="#" className="footer-link">Home</a>
            <a href="#" className="footer-link">About Us</a>
            <a href="#" className="footer-link">Service</a>
            <a href="#" className="footer-link">Resume</a>
            <a href="#" className="footer-link">Project</a>
          </div>
        </div>

        <div className="footer-col">
          <h3 className="footer-col-title">Contact</h3>
          <div className="footer-links">
            <a href="#" className="footer-link">+880 1405804033</a>
            <a href="mailto:ashiquer6364@gmail.com" className="footer-link">ashiquer6364@gmail.com</a>
            <a href="#" className="footer-link">devridoy.netlify.app</a>
          </div>
        </div>

        <div className="footer-col">
          <h3 className="footer-col-title">Get the latest information</h3>
          <div className="footer-newsletter">
            <input type="email" className="footer-newsletter-input" placeholder="Email Address" />
            <button className="footer-newsletter-btn">
              <img src={imgSubtract} alt="Send" style={{ width: '24px', height: '24px' }} />
            </button>
          </div>
        </div>
      </div>

      <div className="footer-line"></div>

      <div className="footer-bottom">
        <span>Copyright© 2026 Ridoy. All Rights Reserved.</span>
        <span>User Terms & Conditions | Privacy Policy</span>
      </div>
    </footer>
  );
};
