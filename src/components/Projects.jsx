
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
          description="Dynamic Website with all East African Games and Stats: Live, Shedules and Played. "
          learnMoreText="harambeestats.com"
        />
        <ProjectCard
          title="GHALABORA"
          description="Modern quality monitoring solution for storage facilities."
          learnMoreText="ghalabora.thisandthat.com"
        />
        <ProjectCard
          title="BLOG WEBSITE: Sunsetatchesly"
          description="The path may seem unclear. We can help you find your way."
          learnMoreText="sunsetatchesly.thisandthat.com"
        />
      </div>
    </section>
  );
};

export default Projects;