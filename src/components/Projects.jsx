import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 6,
      image: "/assets/img/spotlight.png",
      title: "Spotlight",
      description: "A gig marketplace app that connects verified post-secondary students with people who need help on small jobs. Handles booking, in-app chat, and payments with payouts to students. Live on the App Store.",
      skills: ["React Native", "Expo", "Spring Boot", "PostgreSQL", "Stripe", "Supabase"],
      liveLink: "https://apps.apple.com/ca/app/spotlight-hire-or-hustle/id6777232092",
      websiteLink: "https://thespotlightlife.com",
      featured: true,
      screenshots: [
        { src: "/assets/img/spotlight-student-home-screen.png", alt: "Spotlight student home screen" },
        { src: "/assets/img/spotlight-hirer-homescreen.png", alt: "Spotlight hirer home screen" }
      ]
    },
    {
      id: 1,
      image: "/assets/img/zenfeed_logo.png",
      title: "ZenFeed",
      description: "A browser extension that helps you stay focused by hiding short-form content like YouTube Shorts, Instagram Reels, and Facebook Reels. Available on Chromium based browsers and FireFox.",
      skills: ["JavaScript", "Web Extensions", "Chrome API", "CSS", "Manifest.json"],
      githubLink: "https://github.com/daniyxlkhan/ZenFeed-extension",
      liveLink: "https://chromewebstore.google.com/detail/zenfeed-hide-shorts-reels/cpamdbkgjacecpfcmcclkaefpfnekoal",
      featured: true,
      screenshots: [
        { src: "/assets/img/zenfeed-popup.png", alt: "ZenFeed popup with Instagram toggles" }
      ]
    },
    {
      id: 2,
      image: "/assets/img/nhl_logo.png",
      title: "NHL Game Predictor",
      description: "Random Forest classifier predicting NHL game winners using 8 engineered features. Trained on 1,300+ games. Integrates NHL API to automate daily predictions with win probabilities.",
      skills: ["Python", "Scikit-learn", "Pandas", "Machine Learning"],
      githubLink: "https://github.com/daniyxlkhan/nhl_game_predictor",
    },
    {
      id: 3,
      image: "/assets/img/minilinkify.png",
      title: "Minilinkify URL Shortener", 
      description: "A simple URL shortener that converts long URLs into short codes, tracks usage stats, and handles validation and redirection. Dockerized and deployed on AWS EC2.",
      skills: ["Spring Boot", "Java", "PostgreSQL", "Docker", "AWS EC2"],
      githubLink: "https://github.com/daniyxlkhan/minilinkify-url-api",
    },
    {
      id: 4,
      image: "/assets/img/FilterC.jpeg",
      title: "Edge Detection in C", 
      description: "This program allows you to apply different image processing filters to BMP images. It serves as a tool for performing basic image manipulation tasks.",
      skills: ["C", "Image Processing", "Algorithms"],
      githubLink: "https://github.com/daniyxlkhan/Edge-Detection-and-Filters"
    },
    {
      id: 5,
      image: "/assets/img/speedtest50.jpeg",
      title: "Speedtest50",
      description: "Speedtest50 allows you to effortlessly measure your network speed and monitor your network's performance over time.",
      skills: ["Flask", "Python", "SQLite", "HTML", "CSS", "Javascript"],
      githubLink: "https://github.com/Javantax/speedtest50",
    },
    {
      id: 8,
      image: "/assets/img/flappybird.png",
      title: "Flappy bird",
      description: "A Java implementation of the classic Flappy Bird game using Swing GUI framework.",
      skills: ["Java", "Swing", "2D Graphics Programming", "AWT (Abstract Window Toolkit)"],
      githubLink: "https://github.com/daniyxlkhan/flappyBird",
    },

  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section className="projects section" id="projects">
      <h2 className="section__title-1">Things I've shipped.</h2>

      <div className="projects__featured container grid">
        {featuredProjects.map(project => (
          <article key={project.id} className="projects__card projects__card--featured">
            <div className="projects__featured-info">
              <h2 className="projects__title">{project.title}</h2>

              <p className="projects__featured-description">
                {project.description}
              </p>

              <div className="projects__skills">
                {project.skills.map((skill, index) => (
                  <span key={index} className="projects__skill-tag">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="projects__buttons">
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="projects__link">
                    <i className="ri-github-line"></i> Code
                  </a>
                )}

                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="projects__link">
                    <i className="ri-external-link-line"></i> Demo
                  </a>
                )}

                {project.websiteLink && (
                  <a href={project.websiteLink} target="_blank" rel="noopener noreferrer" className="projects__link">
                    <i className="ri-global-line"></i> Website
                  </a>
                )}
              </div>
            </div>

            <div className="projects__screenshots">
              {project.screenshots.map((shot, index) => (
                <img key={index} src={shot.src} alt={shot.alt} className="projects__screenshot" />
              ))}
            </div>
          </article>
        ))}
      </div>

      <h2 className="section__title-1 projects__title-more">Some of my projects.</h2>

      <div className="projects__container container grid">
        {otherProjects.map(project => (
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
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="projects__link">
                  <i className="ri-github-line"></i> Code
                </a>
              )}

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
