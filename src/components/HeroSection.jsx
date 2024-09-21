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
            Does Your Startup Need An Online Presence?<br/>
          </h1>
          <p>
           Bring Your Web Ideas to Life
          </p>
          <div className="greeting">Launch Your Startup Today</div>
          <div className="cta-buttons">
            <button className="hire-me">
              HIRE ME
              <span className="arrow-right"></span>
            </button>
            <button className="view-portfolio">
              VIEW PORTFOLIO
              <span className="arrow-right"></span>
            </button>
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