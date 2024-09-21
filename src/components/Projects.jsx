import React from 'react';
import { ArrowRight, CalculatorIcon, Target } from 'lucide-react';
import './Projects.css';

const ProjectCard = ({ title, description, learnMoreText }) => (
  <div className="project-card">
    <div className="overlay">
      <h3 className="title">{title}</h3>
      <p className="description">{description}</p>
      <a href="#" className="learn-more">
        {learnMoreText}
        <ArrowRight className="arrow-icon" />
      </a>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2>My Portfolio</h2>

      <div className="projects-container">
        <ProjectCard
          title="HARAMBEESTATS"
          description="Dynamic website for Stats and fixtures for all East African Games"
          learnMoreText="harambeestats.com"
        />
        <ProjectCard
          title="BEN MAPPERS LIMITED"
          description="Landing page for a Land Surveying,Mapping, Supplies and Construction company "
          learnMoreText="benmappers.netlify.app"
        />
        <ProjectCard
          title="GHALA BORA"
          description="Landing Page and Dashboard for an IoT based monitoring solution for beans under storage "
          learnMoreText="ghalabora.chbng.com"
        />
      </div>
    </section>
  );
};

export default Projects;