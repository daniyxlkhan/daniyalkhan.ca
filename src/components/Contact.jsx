import '../styles/Contact.css';

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <div className="contact__container grid">
        <div className="contact__social">
          <img src="/assets/img/curved-arrow.svg" alt="" className="contact__social-arrow" />

          <div className="contact__social-data">
            <div>
              <p className="contact__social-description-1">
                :)
              </p>

              <p className="contact__social-description-2">
                Checkout my social networks
              </p>
            </div>
          </div>

          <div className="contact__social-links">
            <a href="https://github.com/daniyxlkhan" target="_blank" rel="noopener noreferrer" className="contact__social-link">
              <i className="ri-github-line"></i>
            </a>

            <a href="https://www.linkedin.com/in/daniyxl-khan" target="_blank" rel="noopener noreferrer" className="contact__social-link">
              <i className="ri-linkedin-box-line"></i>
            </a>

            <a href="https://www.instagram.com/daniyxl.explores/" target="_blank" rel="noopener noreferrer" className="contact__social-link">
              <i className="ri-instagram-line"></i>
            </a>

            <a href="https://twitter.com/daniyxl_khan" target="_blank" rel="noopener noreferrer" className="contact__social-link">
              <i className="ri-twitter-line"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
