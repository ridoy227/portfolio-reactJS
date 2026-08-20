import React, { useState, useEffect, useRef } from 'react';
import './TestimonialSection.css';

// SVG & Image Assets
import imgAvatar from '../assets/bdb1bd2084846e2167944a4c5bedb3966aebacac.png';
import imgBgPattern from '../assets/57e2221906d547fa2080873389d5cdb526033110.png';
import imgScribble from '../assets/4591a1e83f0e7ba85d5b6fb691c59d69aaf6bd4c.svg';
import imgQuote from '../assets/99cfc081232e79e81df105877a17091f4e93cdef.svg';
import imgStarDeco from '../assets/0664179bad72f22419ba90a41ecd336d17aa2626.svg';
import imgRatingStar from '../assets/e6ca78e450aec2993a4f0a3b564dca05c8305bc9.svg';

export const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Jayesh Patil',
      role: 'CEO, Lirante',
      rating: '5.0',
      avatar: imgAvatar,
      quote: 'consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.'
    },
    {
      id: 2,
      name: 'Sarah Jenkins',
      role: 'Product Lead, FinTech',
      rating: '5.0',
      avatar: imgAvatar, // reusing same avatar as per figma design or can default to same style
      quote: 'Exceptional mobile app development! Ridoy delivered our project ahead of schedule with clean code, robust architecture, and great responsiveness. Our app store rating went from 3.5 to 4.8 stars!'
    },
    {
      id: 3,
      name: 'Alex Mercer',
      role: 'Founder, Startup X',
      rating: '5.0',
      avatar: imgAvatar,
      quote: 'Working with Ridoy was an absolute pleasure. His expertise in React Native and Clean Architecture saved us months of development. The real-time messaging and payment systems work flawlessly.'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(1); // Start with center card (Jayesh Patil) active
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  const containerRef = useRef(null);

  // Minimum distance required for a swipe action
  const minSwipeDistance = 50;

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentIndex < testimonials.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // Desktop Drag-to-Swipe functionality
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setDragOffset(0);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    const diff = currentX - startX;
    setDragOffset(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragOffset < -minSwipeDistance && currentIndex < testimonials.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else if (dragOffset > minSwipeDistance && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
    setDragOffset(0);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setDragOffset(0);
    }
  };

  return (
    <section className="testimonial-section-wrapper" id="testimonials">
      <div className="testimonial-bg-layer">
        <div className="testimonial-bg-color" />
        <img className="testimonial-bg-image" src={imgBgPattern} alt="Background Pattern" />
      </div>

      <div className="testimonial-container">
        {/* Header Section */}
        <div className="testimonial-header">
          <h2 className="testimonial-title">
            Testimonials That
            <span className="title-scribble">
              <img src={imgScribble} alt="Scribble decoration" />
            </span>
            <br />
            Speak to <span className="highlight">My Results</span>
          </h2>

          <div className="testimonial-subtitle-container">
            <img className="star-deco star-deco-left" src={imgStarDeco} alt="Star decoration left" />
            <p className="testimonial-subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.
            </p>
            <img className="star-deco star-deco-right" src={imgStarDeco} alt="Star decoration right" />
          </div>
        </div>

        {/* Carousel Slider */}
        <div
          className="testimonial-carousel-viewport"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          ref={containerRef}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          <div
            className="testimonial-carousel-track"
            style={{
              transform: `translateX(calc(50% - 371px - ${currentIndex * 808}px + ${dragOffset}px))`,
              transition: isDragging ? 'none' : 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }}
          >
            {testimonials.map((item, idx) => {
              const isActive = idx === currentIndex;
              return (
                <div
                  key={item.id}
                  className={`testimonial-card ${isActive ? 'active' : ''}`}
                >
                  {/* Glass Background Overlay */}
                  <div className="card-glass-bg" />

                  {/* Quote Icon */}
                  <div className="card-quote-icon">
                    <img src={imgQuote} alt="Quote Down" />
                  </div>

                  {/* User Profile */}
                  <div className="card-profile-header">
                    <div className="card-avatar-wrapper">
                      <img src={item.avatar} alt={item.name} className="card-avatar" />
                    </div>
                    <div className="card-user-info">
                      <h3 className="card-username">{item.name}</h3>
                      <p className="card-userrole">{item.role}</p>
                    </div>
                  </div>

                  {/* Rating Stars */}
                  <div className="card-rating-container">
                    <div className="card-stars">
                      {[...Array(5)].map((_, i) => (
                        <img
                          key={i}
                          className="card-star-icon"
                          src={imgRatingStar}
                          alt="Rating Star"
                        />
                      ))}
                    </div>
                    <span className="card-rating-value">{item.rating}</span>
                  </div>

                  {/* Quote Text */}
                  <p className="card-quote-text">
                    {item.quote}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="testimonial-pagination">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              className={`pagination-dot ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

    </section>

  );
};
