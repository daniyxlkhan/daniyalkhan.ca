import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: "/assets/img/speedtest50.jpeg",
      subtitle: "Web Application", 
      title: "Speedtest50",
      description: "Speedtest50 allows you to effortlessly measure your network speed and monitor your network's performance over time. By logging in, you unlock the ability to track and your network's speed, ensuring you always stay connected at optimal speeds.",
      githubLink: "https://github.com/Javantax/speedtest50"
    },
    {
      id: 2,
      image: "/assets/img/FilterC.jpeg",
      subtitle: "Program",
      title: "Edge Detection in C", 
      description: "This program allows you to apply different image processing filters to BMP images. It serves as a tool for performing basic image manipulation tasks.",
      githubLink: "https://github.com/Javantax/Edge-Detection-and-Filters"
    }
  ];

  return (
    <section className="projects section" id="projects">
      <h2 className="section__title-1">Some of my projects.</h2>

      <div className="projects__container container grid">
        {projects.map(project => (
          <article key={project.id} className="projects__card">
            <div className="projects__image">
              <img src={project.image} alt="image" className="projects__img" />

              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="projects__button button">
                <i className="ri-arrow-right-up-line"></i>
              </a>
            </div>

            <div className="projects__content">
              <h3 className="'projects__subtitle">{project.subtitle}</h3>
              <h2 className="projects__title">{project.title}</h2>

              <p className="projects__description">
                {project.description}
              </p>
            </div>

            <div className="projects__buttons">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="projects__link">
                <i className="ri-github-line"></i> View
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
