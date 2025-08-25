import React, { useState, useEffect } from 'react';
import '../styles/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [shadowHeader, setShadowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Shadow header
      setShadowHeader(window.scrollY >= 50);
      
      // Update active link based on scroll position
      const sections = document.querySelectorAll('section[id]');
      const scrollDown = window.scrollY;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
          setActiveLink(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLinkClick = (link, e) => {
    e.preventDefault();
    setActiveLink(link);
    closeMenu();
    
    // Smooth scroll to section
    const element = document.getElementById(link);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${shadowHeader ? 'shadow-header' : ''}`} id="header">
      <div className="nav container">
        <a 
          href="#" 
          className="nav__logo"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="nav__logo-circle">D</span>
          <span className="nav__logo-name">Daniyal Khan.</span>
        </a>

        <div className={`nav__menu ${isMenuOpen ? 'show-menu' : ''}`} id="nav-menu">
          <span className="nav__title">Menu</span>
          
          <h3 className="nav__name">Daniyal</h3>

          <ul className="nav__list">
            <li className="nav__item">
              <a 
                href="#home" 
                className={`nav__link ${activeLink === 'home' ? 'active-link' : ''}`}
                onClick={(e) => handleLinkClick('home', e)}
              >
                Home
              </a>
            </li>
            <li className="nav__item">
              <a 
                href="#about" 
                className={`nav__link ${activeLink === 'about' ? 'active-link' : ''}`}
                onClick={(e) => handleLinkClick('about', e)}
              >
                About Me
              </a>
            </li>
            <li className="nav__item">
              <a 
                href="#projects" 
                className={`nav__link ${activeLink === 'projects' ? 'active-link' : ''}`}
                onClick={(e) => handleLinkClick('projects', e)}
              >
                Projects
              </a>
            </li>
            <li className="nav__item">
              <a 
                href="#contact" 
                className={`nav__link nav__link-button ${activeLink === 'contact' ? 'active-link' : ''}`}
                onClick={(e) => handleLinkClick('contact', e)}
              >
                Contact
              </a>
            </li>
          </ul>
          
          <div className="nav__close" id="nav-close" onClick={closeMenu}>
            <i className="ri-close-line"></i>
          </div>   
        </div>
    
        <div className="nav__buttons">
          <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
            <i className="ri-menu-4-line"></i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;