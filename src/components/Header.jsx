'use client'
import React from 'react'
import { useState, useEffect } from 'react';
import { IoMenu } from "react-icons/io5";
import "./Header.css"

const Header = () => {
  const [activeLink, setActiveLink] = useState('home');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const [scrolled, setScrolled] = useState(false);
  const [showDropdown , setShowDropdown]= useState(false)


  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 5;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);


  function handleHamburgerClick() {
    setShowDropdown((prevState) => !prevState);
  }
 
  
  return (

    <header className={scrolled ? 'scrolled' : ''}>
     <nav >
      <div className="logo">WebLaunch</div>
      <ul>
        {['home', 'services', 'projects' ,'testimonials','skills', 'contact'].map((link) => (
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
    {
        showDropdown && 
        <div className="dropdown-menu">
        <ul>
          {['home', 'services', 'projects' ,'testimonials','skills', 'contact'].map((link) => (
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
  </header>
  )
}

export default Header