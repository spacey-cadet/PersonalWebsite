
import React from 'react';
import { ArrowRight, CalculatorIcon, Target } from 'lucide-react';
import './Projects.css';

const ProjectCard = ({ title, description, learnMoreText }) => (
  <div className="project-card">
    <h3 className="title">{title}</h3>
    <p className="description">{description}</p>
    <a href="#" className="learn-more">
      {learnMoreText} <ArrowRight className="arrow-icon" />
    </a>
  </div>
);

const Projects = () => {
  return (
    <section className="projects-section">
      <h1>My Portfolio</h1>
      <div className="projects-container">
        <ProjectCard
          title="HARAMBEESTATS"
          description="Games and Stats For East African Games: Live, Shedules and Played. "
          learnMoreText="harambeestats.com"
        />
        <ProjectCard
          title="GHALABORA"
          description="Modern quality monitoring solution for storage facilities."
          learnMoreText="ghalabora.chbng.com"
        />
        <ProjectCard
          title="BENMAPPERS"
          description="Mapping, surveying, construction and supplies."
          learnMoreText="benmappers.netlify.com"
        />
      </div>
    </section>
  );
};

export default Projects;