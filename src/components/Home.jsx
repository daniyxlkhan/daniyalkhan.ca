import { useState, useEffect } from 'react';
import '../styles/Home.css';

const activities = ["code", "climb", "hike", "run", "take photos"];

const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showInfo, setShowInfo] = useState(false);
  
  const fullText = "Hello, my name is Daniyal.";

  const [activityIndex, setActivityIndex] = useState(0);
  const [activityText, setActivityText] = useState(activities[0]);
  const [isDeleting, setIsDeleting] = useState(false);

  // Update this by hand whenever it changes
  const now = "Currently: building Spotlight";

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

  // Cycle through "I like to ___." once the intro is done
  useEffect(() => {
    if (!showInfo) return;

    const word = activities[activityIndex];
    let delay = isDeleting ? 50 : 90;

    if (!isDeleting && activityText === word) {
      delay = 2000;
    }

    const timeout = setTimeout(() => {
      if (!isDeleting && activityText === word) {
        setIsDeleting(true);
      } else if (isDeleting && activityText === '') {
        setIsDeleting(false);
        setActivityIndex(prev => (prev + 1) % activities.length);
      } else if (isDeleting) {
        setActivityText(prev => prev.slice(0, -1));
      } else {
        setActivityText(word.slice(0, activityText.length + 1));
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [showInfo, activityText, isDeleting, activityIndex]);

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
            <b>I like to {activityText}<span className="home__activity-cursor">|</span>.</b>
          </p>

          <p className="home__now">{now}</p>

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