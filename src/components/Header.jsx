'use client'
import React from 'react'
import { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import "./Header.css"

const Header = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  function handleHamburgerClick() {
    setShowDropdown((prevState) => !prevState);
  }
 
  return (
    <header>
      <div className="header-content">
        <nav>
          <div className="logo">WebLaunch</div>
          <ul>
            {['home', 'services', 'projects', 'testimonials', 'skills', 'contact'].map((link) => (
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
          <IoMenu className="hamburger" onClick={handleHamburgerClick}/>
        </nav>
        {showDropdown && 
          <div className="dropdown-menu">
            <ul>
              {['home', 'services', 'projects', 'testimonials', 'skills', 'contact'].map((link) => (
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
          </div>
        }
      </div>
    </header>
  )
}

export default Header