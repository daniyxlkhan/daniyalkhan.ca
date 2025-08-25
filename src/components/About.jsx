import React from 'react';
import '../styles/About.css';

const About = () => {
  const handleContactClick = (e) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="about section" id="about">
      <div className="about__container container">
        <h2 className="section__title-1">
          <span>About me.</span> 
        </h2>

        <div className="about__perfil">
          <div className="about__image-container">
            <img src="/assets/img/AboutPage.jpeg" alt="image" className="about__img" />
            <div className="about__shadow"></div>
            <div className="geometric-box"></div>
            <img src="/assets/img/random-lines.svg" alt="" className="about__line" />
            <div className="about__box"></div>
          </div>
          
          <div className="about__info">
            <p className="about__description">
              Hello, I'm Daniyal Khan, a student developer with
              a keen interest in photography. I find joy in capturing
              moments and exploring the worlds shaped by the sounds
              I immerse myself in. 
              My curiosity extends to learning about
              new technologies and the art of creative coding.
            </p>
            <ul className="about__list">
              <li className="about__item">
                <b>My Skills Are:</b> Java, Python, C, SQLite, JavaScript, HTML, CSS, Flask & Bootstrap
              </li>
            </ul>

            <div className="about__buttons">
              <a href="#contact" className="button" onClick={handleContactClick}>
                <i className="ri-send-plane-line"></i> Contact Me
              </a>

              <a href="https://www.linkedin.com/in/daniyxl-khan" target="_blank" rel="noopener noreferrer" className="button__ghost">
                <i className="ri-linkedin-box-line"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
