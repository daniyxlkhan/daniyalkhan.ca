import React, { useState, useEffect } from 'react';
import '../styles/ScrollUp.css';

const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <a 
      href="#" 
      className={`scrollup ${isVisible ? 'show-scroll' : ''}`} 
      id="scroll-up"
      onClick={(e) => {
        e.preventDefault();
        scrollToTop();
      }}
    >
      <i className="ri-arrow-up-s-line"></i>
    </a>
  );
};

export default ScrollUp;