import React from 'react';
import './WorkCardStyles.css'; // Ensure you have styles for the component

const WorkCard = ({ title, description, technologies, link, repoLink }) => {
  return (
    <div className="project-card">
      <h2 className="project-title">{title}</h2>
      <p>{description}</p>
      <ul className="tech-list">
        {technologies.map((tech, index) => (
          <li key={index} className="tech-item">{tech}</li>
        ))}
      </ul>
      <div className="pro-btns">
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="btn">
            Live Demo
          </a>
        )}
        {repoLink && (
          <a href={repoLink} target="_blank" rel="noopener noreferrer" className="btn">
            GitHub Repo
          </a>
        )}
      </div>
    </div>
  );
};

export default WorkCard;
