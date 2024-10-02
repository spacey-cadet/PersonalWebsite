import React from 'react';
import './HeroSection.css';
import Header from "./Header.jsx"
import Image from "next/image"

const HeroSection = () => {
  return (
    <section className="hero" id="home">
      <Header/>
      <div className="content-container">
        <div className="content">
          <h1>
            Reach your clients
            through our <br/>
            high converting  custom websites<br/>
          </h1>
          <p>
           Your business to the world
          </p>
          <div className="greeting">Launch Your Startup Today</div>
          <div className="cta-buttons">
            <a className="hire-me" href="#contact-me">
              HIRE ME
              <span className="arrow-right"></span>
            </a>
            <a className="view-portfolio" href="#projects">
               VIEW PORTFOLIO
              <span className="arrow-right"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;