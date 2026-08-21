import React, { useState, useRef, useEffect } from 'react';
import './PortfolioSection.css';

import imgFrame26 from '../assets/investor-groupllc.png';
import imgUnion from '../assets/ccfdb7502b85a08a8680dd69bbf8f40d1aecb56c.svg';
import imgVector from '../assets/81bdce8e525ef4788fce47b9d51ca1c4127e86c6.svg';
import imgVector1 from '../assets/3b88acfc6a5ec5ad32cd308a92fa59b742d56c2b.svg';


import imgSocialApp from '../assets/social-mobile-app.jpg';
import imgExpenseTracker from '../assets/expense-tracker.jpg';
import moodTracker from '../assets/mood-tracker.jpg';
import taskManager from '../assets/task-manager.jpg';


// list of items with iamge path, name
const portfolioList = [
  {
    id: 1,
    name: 'Social Mobile App',
    image: imgSocialApp,
    description: 'Social Mobile App is a next-generation platform designed to bring people closer. It features real-time instant messaging, end-to-end encryption, interactive feeds, custom profile designs, and advanced privacy settings to ensure user safety while sharing posts, images, and videos with friends and followers.',
    priceRange: '$8,000 - $12,000',
    duration: '2-3 months',
    industries: 'Social Media, Communication'
  },
  {
    id: 2,
    name: 'Expense Tracker',
    image: imgExpenseTracker,
    description: 'Expense Tracker is a robust financial utility created to simplify budgeting and cost tracking. Users can seamlessly connect accounts, log expenses, scan receipts using optical character recognition, track monthly budget targets, and view clean visual charts summarizing their spending behavior.',
    priceRange: '$4,000 - $6,000',
    duration: '1-2 months',
    industries: 'Finance, Utilities'
  },
  {
    id: 3,
    name: 'Mood Tracker',
    image: moodTracker,
    description: 'Mood Tracker is a wellness application that helps users monitor and analyze their mental well-being over time. Through a series of quick check-ins, journal entries, and customizable emotion tags, the app provides insights, mood trends, and personalized mindfulness exercises to help foster mental balance.',
    priceRange: '$5,000 - $7,500',
    duration: '1-2 months',
    industries: 'Health & Wellness, Lifestyle'
  },
  {
    id: 4,
    name: 'Task Manager',
    image: taskManager,
    description: 'Task Manager is a collaborative workflow tool built for teams and individuals. It provides a visual Kanban board, progress timelines, check-lists, files attachments, deadline alerts, and automatic notifications, enabling teams to complete tasks on time with maximum productivity.',
    priceRange: '$6,000 - $9,000',
    duration: '2 months',
    industries: 'Productivity, Enterprise'
  },
];


export const PortfolioSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
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
            <div
              key={index}
              className="portfolio-card"
              onClick={() => setSelectedProject(item)}
              style={{ cursor: 'pointer' }}
            >
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
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="portfolio-modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="portfolio-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="portfolio-modal-close" onClick={() => setSelectedProject(null)}>
              ✕
            </button>

            <div className="portfolio-modal-image-wrapper">
              <img src={selectedProject.image} alt={selectedProject.name} className="portfolio-modal-img" />
            </div>

            <div className="portfolio-modal-info">
              <h2 className="portfolio-modal-title">{selectedProject.name}</h2>

              <div className="portfolio-modal-specs">
                <div className="spec-item">
                  <span className="spec-label">Price range</span>
                  <span className="spec-value">{selectedProject.priceRange}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Project duration</span>
                  <span className="spec-value">{selectedProject.duration}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Industries</span>
                  <span className="spec-value">{selectedProject.industries}</span>
                </div>
              </div>

              <div className="portfolio-modal-divider"></div>

              <p className="portfolio-modal-desc">{selectedProject.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
