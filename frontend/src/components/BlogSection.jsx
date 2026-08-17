import React from 'react';
import './BlogSection.css';

import imgRectangle10 from '../assets/8744623f3ade5e08253afb7f86f1aae077b46d79.png';
import imgRectangle11 from '../assets/0b379b098f7b4b9e0c646b2c60cad1858eddd9c7.png';
import imgRectangle12 from '../assets/8e36ea06bcb67fd630cf8e1cf2f9a09c0d54ce77.png';
import imgVector from '../assets/e26045ee17e5d21d4e55b04b71fa716059f745ad.svg';

export const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      img: imgRectangle10,
      tag: "UI/ UX Design",
      author: "Jayesh Patil",
      date: "10 Nov, 2023",
      title: "Design Unraveled: Behind the Scenes of UI/UX Magic"
    },
    {
      id: 2,
      img: imgRectangle11,
      tag: "App Design",
      author: "Jayesh Patil",
      date: "09 Oct, 2023",
      title: "Sugee: Loan Management System for Rural Sector."
    },
    {
      id: 3,
      img: imgRectangle12,
      tag: "App Design",
      author: "Jayesh Patil",
      date: "13 Aug, 2023",
      title: "Cinetrade: Innovative way to invest in Digital Media"
    }
  ];

  return (
    <section className="blog-container" id="blog">
      <div className="blog-header">
        <h2 className="blog-title">
          From my<br/>blog post
        </h2>
        <button className="see-all-btn">See All</button>
      </div>

      <div className="blog-cards">
        {blogs.map(blog => (
          <div key={blog.id} className="blog-card">
            <div className="blog-card-image-wrapper">
              <img className="blog-card-img" src={blog.img} alt={blog.title} />
              <div className="blog-card-icon">
                <img src={imgVector} alt="Go" style={{width: '30px', height: '30px', transform: 'rotate(45deg)'}} />
              </div>
            </div>
            
            <div className="blog-card-tag">{blog.tag}</div>
            
            <div className="blog-card-meta">
              <div className="meta-item">
                <div className="meta-dot"></div>
                <span className="meta-text">{blog.author}</span>
              </div>
              <div className="meta-item">
                <div className="meta-dot"></div>
                <span className="meta-text">{blog.date}</span>
              </div>
            </div>

            <h3 className="blog-card-title">{blog.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};
