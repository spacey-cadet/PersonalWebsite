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
            Reach your clients using high converting websites<br/>
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
        <Image  src="/rocket1.svg" alt="Hire Me To Launch" width={200} height={200} className="rocket"/>
        <div className="image-container">
          <Image src="/Theo4.svg" alt="Mr Dream With No Exit Door" width={500} height={500} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;