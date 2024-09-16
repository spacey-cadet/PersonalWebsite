import React from 'react';
import './HeroSection.css';
import Header from "./Header.jsx"
import Image from "next/image"

const HeroSection = () => {
  return (
    <section className="hero">
      <Header/>
      <div className="content-container">
        <div className="content">
          <div className="greeting">Hi There!</div>
          <h1>
            I am Theo Korir<br />
            Theo Korir.<br/>
            Theo <br/>
            There<br/>
            There's A Way
          </h1>
          <p>
           Bring Your Web Ideas to Life - Bring 'em Here
          </p>
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
        <div className="image-container">
          <div className="ring outer-ring"></div>
          <div className="ring middle-ring"></div>
          <div className="ring inner-ring"></div>
          <Image src="/Theo4.svg" alt="Mr Dream With No Exit Door" width={500} height={500} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;