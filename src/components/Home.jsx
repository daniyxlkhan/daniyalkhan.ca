import { useState, useEffect } from 'react';
import '../styles/Home.css';

const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showInfo, setShowInfo] = useState(false);
  
  const fullText = "Hello, my name is Daniyal.";

  useEffect(() => {
    if (currentIndex < fullText.length && isTyping) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    } else if (currentIndex === fullText.length) {
      setIsTyping(false);
      setTimeout(() => {
        setShowInfo(true);
      }, 200);
    }
  }, [currentIndex, isTyping, fullText]);

  const handleScrollClick = (e) => {
    e.preventDefault();
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="home section" id="home">
      <div className="home__container container">
        <h1 className="home__name">
          {displayText}
          <span className="typing-cursor">|</span>
        </h1>

        <div className={`home__info ${showInfo ? 'show-info' : ''}`}>
          <p className="home__description">
            <b>I like to code.</b> 
          </p>
          <a href="#about" className="home__scroll" onClick={handleScrollClick}>
            <div className="home__scroll-box">
              <i className="ri-arrow-down-s-line"></i>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;