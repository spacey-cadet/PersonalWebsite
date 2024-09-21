import React from 'react';
import './Footer.css'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <span className="footer-name"> Web Launch</span>
        </div>
        <nav className="footer-nav">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#blog">Blog</a>
        </nav>
        <div className="contact-me" id="contact">
          <div className="contacts">
            <p>phone : 0708092390</p>
            <p>e-mail: theo.korirchbng@gmail.com</p>
          </div>
        
          <div className="socials">
            <a className="links-socials" href=''>
              <FaInstagram className="social-icons"/>
            </a >
            <a className="links-socials">
             <FaXTwitter className="social-icons"/>
            </a>
            <a className="links-socials">
              <CiLinkedin className="social-icons"/>
            </a>
          </div>
        </div>
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