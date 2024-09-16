'use client'
import React from 'react'
import { useState } from 'react';
import "./Header.css"

const Header = () => {
  const [activeLink, setActiveLink] = useState('home');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  
  return (

    <header>
    <nav>
      <div className="logo">Theo Korir</div>
      <ul>
        {['home', 'services', 'skills', 'projects', 'testimonials', 'contact'].map((link) => (
          <li key={link}>
            <a 
              href={`#${link}`} 
              className={activeLink === link ? 'active' : ''}
              onClick={() => handleLinkClick(link)}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </header>
  )
}

export default Header