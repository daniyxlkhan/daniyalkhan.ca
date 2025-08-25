import React from 'react';
import '../styles/Home.css';

const Home = () => {
  const handleScrollClick = (e) => {
    e.preventDefault();
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <h1 className="home__name">
          Daniyal Khan
        </h1>

        <div className="home__social">
          <a href="https://github.com/Javantax" target="_blank" rel="noopener noreferrer" className="home__social-link">
            <i className="ri-github-line"></i>
          </a>
          <a href="https://www.linkedin.com/in/daniyxl-khan" target="_blank" rel="noopener noreferrer" className="home__social-link">
            <i className="ri-linkedin-box-line"></i>
          </a>
          <a href="https://twitter.com/daniyxl_khan" target="_blank" rel="noopener noreferrer" className="home__social-link">
            <i className="ri-twitter-line"></i>
          </a>
        </div>

        <div className="home__info">
          <p className="home__description">
            <b>Student Developer</b>
            architecting dreams in <br /> the realm of code, where algorithms dance and
            pixels breathe. Crafting a symphony of logic and
            creativity, I navigate the digital cosmos with   
            lines of elegance and bytes of imagination.
          </p>
          <a href="#about" className="home__scroll" onClick={handleScrollClick}>
            <div className="home__scroll-box">
              <i className="ri-arrow-down-s-line"></i>
            </div>
            <span className="home_scroll-text"></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
