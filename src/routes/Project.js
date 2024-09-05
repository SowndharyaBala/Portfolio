import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import HeroImg2 from '../Components/HeroImg2';
import ProjectsList from '../Components/ProjectsList'; // Corrected import

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECTS." text="Some of my most recent works" />
      <ProjectsList />
      <Footer />
    </div>
  );
};

export default Project;
