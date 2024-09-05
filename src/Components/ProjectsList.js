import React from 'react';
import WorkCard from './WorkCard';

const projects = [
  {
    title: 'Thangam Rice Mart',
    description: 'Created simple website for my fathers shop ',
    technologies: ['React', 'JavaScript', 'CSS'],
    link: 'https://live-demo-link.com',
    repoLink: 'https://github.com/yourusername/project1',
  },

];

const ProjectsList = () => {
  return (
    <div className="projects-list">
      {projects.map((project, index) => (
        <WorkCard
          key={index}
          title={project.title}
          description={project.description}
          technologies={project.technologies}
          link={project.link}
          repoLink={project.repoLink}
        />
      ))}
    </div>
  );
};

export default ProjectsList;
