import React from 'react';
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <span className="footer-name"> Mr Dream With No Exit Door</span>
        </div>
        <nav className="footer-nav">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
      <div className="footer-bottom">
        <span>© {currentYear} Theo Korir. All rights reserved.</span>
        <div className="footer-links">
          <a href="#terms">Terms of Use</a>
          <a href="#privacy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
