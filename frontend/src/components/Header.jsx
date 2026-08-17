import React from 'react';
import './Header.css';

import imgFrame55 from '../assets/dce43808955735977e2bb470cd2125cb97d94ed3.svg';
import imgTypo from '../assets/65fe09dec165d94ac33ffad3c3499226414be1f8.svg';

const Logo = () => (
  <div className="logo-container">
    <div className="logo-icon">
      <img alt="Logo Icon" src={imgFrame55} style={{ width: '100%', height: '100%' }} />
    </div>
    <div className="logo-text">
      <img alt="Logo Text" src={imgTypo} style={{ width: '100%', height: '100%' }} />
    </div>
  </div>
);

export const Header = () => {
  return (
    <header className="header-container">
      <button className="nav-link active">Home</button>
      <a href="#about" className="nav-link">About</a>
      <a href="#service" className="nav-link">Service</a>
      {/* <Logo /> */}
      <a href="#resume" className="nav-link">Resume</a>
      <a href="#project" className="nav-link">Project</a>
      <a href="#contact" className="nav-link">Contact</a>
    </header>
  );
};
