import React from 'react';
import '../styles/About.css';
import PhotoCarousel from './PhotoCarousel';

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
          <div className="about__info">
            <p className="about__description">
              Software development started as something I was curious about, but the more I built, the more I realized it's what I want to spend my career doing. 
              I love solving problems, breaking things down into clean solutions, and constantly finding better ways to build. 
              <br></br><br></br>
              When I'm not coding, I'm usually outdoors hiking, climbing, running, or exploring trails with my camera in hand.
              I have a passion for photography and love capturing moments whether it's landscapes, cityscapes, or candid shots of friends.
              I enjoy chasing good views as much as I enjoy chasing good ideas. 
              At the end of the day, I just love learning and pushing myself, whether it's in tech or out on an adventure.
              <br></br><br></br>
              
            </p>

            <div className="about__buttons">
              <a href="#contact" className="button" onClick={handleContactClick}>
                <i className="ri-send-plane-line"></i> Contact Me
              </a>

              <a href="https://www.linkedin.com/in/daniyxl-khan" target="_blank" rel="noopener noreferrer" className="button__ghost">
                <i className="ri-linkedin-box-line"></i>
              </a>
            </div>
          </div>

          <div className="about__image-container">
            <img src="/assets/img/me-in-center-canada.jpg" alt="image" className="about__img" />
            <div className="about__shadow"></div>
            <div className="geometric-box"></div>
            <img src="/assets/img/random-lines.svg" alt="" className="about__line" />
            <div className="about__box"></div>
          </div>
        </div>
        
        <PhotoCarousel />
      </div>
    </section>
  );
};

export default About;
