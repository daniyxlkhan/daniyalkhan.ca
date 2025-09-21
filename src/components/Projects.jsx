import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: "/assets/img/minilinkify.png",
      title: "Minilinkify URL Shortener", 
      description: "This program allows you to apply different image processing filters to BMP images. It serves as a tool for performing basic image manipulation tasks.",
      skills: ["Spring Boot", "Java", "PostgreSQL", "Docker", "AWS EC2"],
      githubLink: "https://github.com/daniyxlkhan/minilinkify-url-api",
      liveLink: "https://minilinkify.tech/"
    },
    {
      id: 2,
      image: "/assets/img/FilterC.jpeg",
      title: "Edge Detection in C", 
      description: "This program allows you to apply different image processing filters to BMP images. It serves as a tool for performing basic image manipulation tasks.",
      skills: ["C", "Image Processing", "Algorithms"],
      githubLink: "https://github.com/daniyxlkhan/Edge-Detection-and-Filters"
    },
    {
      id: 3,
      image: "/assets/img/speedtest50.jpeg",
      title: "Speedtest50",
      description: "Speedtest50 allows you to effortlessly measure your network speed and monitor your network's performance over time. By logging in, you unlock the ability to track and your network's speed, ensuring you always stay connected at optimal speeds.",
      skills: ["Flask", "Python", "SQLite", "HTML", "CSS", "Javascript"],
      githubLink: "https://github.com/Javantax/speedtest50",
    },
    {
      id: 4,
      image: "/assets/img/dragonball-game.png",
      title: "Dragon Ball Memory Game",
      description: "A memory card game built with React featuring Dragon Ball characters. Test your memory by clicking on different characters without repeating any.",
      skills: ["React", "CSS3", "HTML5"],
      githubLink: "https://github.com/daniyxlkhan/dragonball-memory-card-game",
      liveLink: "https://dragonball-memory-card-game.vercel.app/" 
    },
    {
      id: 5,
      image: "/assets/img/resume-builder.png",
      title: "Resume Builder",
      description: "A modern, interactive resume builder built with React that allows users to create professional resumes with real-time preview.",
      skills: ["React", "JavaScript", "CSS3", "HTML5"],
      githubLink: "https://github.com/daniyxlkhan/resume-builder",
      livelink: "https://resume-builder-mocha-two.vercel.app/"
    },
  ];

  return (
    <section className="projects section" id="projects">
      <h2 className="section__title-1">Some of my projects.</h2>

      <div className="projects__container container grid">
        {projects.map(project => (
          <article key={project.id} className="projects__card">
            <div className="projects__image">
              <img src={project.image} alt="image" className="projects__img" />
            </div>

            <div className="projects__content">
              <h2 className="projects__title">{project.title}</h2>

              <p className="projects__description">
                {project.description}
              </p>

              <div className="projects__skills">
                {project.skills.map((skill, index) => (
                  <span key={index} className="projects__skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="projects__buttons">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="projects__link">
                <i className="ri-github-line"></i> Code
              </a>
              
              {project.liveLink && (
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="projects__link">
                  <i className="ri-external-link-line"></i> Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
