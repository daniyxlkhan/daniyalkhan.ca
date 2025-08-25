import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const handleLinkClick = (sectionId, e) => {
    e.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer__container container grid">
        <ul className="footer__links">
          <li>
            <a href="#home" className="footer__link" onClick={(e) => handleLinkClick('home', e)}>Home</a>
          </li>
          <li>
            <a href="#projects" className="footer__link" onClick={(e) => handleLinkClick('projects', e)}>Projects</a>
          </li>
          <li>
            <a href="#contact" className="footer__link" onClick={(e) => handleLinkClick('contact', e)}>Contact</a>
          </li>
        </ul>

        <span className="footer__copy">
          &#169;
          <a href="#home" onClick={(e) => handleLinkClick('home', e)}>Daniyal Khan</a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;