import React from 'react';
import './ExperienceSection.css';

import imgLine4 from '../assets/5d823b16500fe64a9e716475fe807dc83a527305.svg';
import imgFrame70 from '../assets/d21533f2df854db622c2b3a5a897dc42611f6299.svg';
import imgFrame71 from '../assets/9053a0fc7c95436cb334dd5309b5a8638843b004.svg';

export const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      company: "Cognizant, Mumbai",
      date: "Sep 2016- July 2020",
      role: "Experince Designer",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales",
      dotImg: imgFrame70
    },
    {
      id: 2,
      company: "Sugee Pvt limited, Mumbai",
      date: "Sep 2020- July 2023",
      role: "UI/UX Designer",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales",
      dotImg: imgFrame71
    },
    {
      id: 3,
      company: "Cinetstox, Mumbai",
      date: "Sep 2023",
      role: "Lead UX Designer",
      desc: "",
      dotImg: imgFrame70
    }
  ];

  return (
    <section className="experience-container" id="resume">
      <h2 className="experience-title">
        My <span className="highlight">Work Experince</span>
      </h2>

      <div className="experience-list">
        {experiences.map(exp => (
          <div key={exp.id} className="experience-row">
            <div className="experience-company-col">
              <h3 className="company-name">{exp.company}</h3>
              <p className="company-date">{exp.date}</p>
            </div>

            <div className="experience-timeline-col">
              <div className="timeline-line"></div>
              <img className="timeline-dot" src={exp.dotImg} alt="" />
            </div>

            <div className="experience-role-col">
              <h3 className="role-title">{exp.role}</h3>
              {exp.desc && <p className="role-desc">{exp.desc}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
