import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_subject: '',
    user_message: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setMessage('Message sent successfully!');
    setFormData({
      user_name: '',
      user_email: '',
      user_subject: '',
      user_message: ''
    });
  };

  return (
    <section className="contact section" id="contact">
      <div className="contact__container grid">
        <div className="contact__data">
          <h2 className="section__title-2">
            <span>Contact Me.</span>
          </h2>

          <p className="contact__description-1">
            Send me a message and I'll get back to you.
          </p>

          <p className="contact__description-2">
            Enter your <b>Name</b> and <b>Email Address</b>
          </p>

          <div className="geometric-box"></div>
        </div>

        <div className="contact__mail">
          <h2 className="contact__title">
            Send Me A Message
          </h2>
          <form className="contact__form" id="contact-form" onSubmit={handleSubmit}>
            <div className="contact__group">
              <div className="contact__box">
                <input 
                  type="text" 
                  name="user_name" 
                  className="contact__input" 
                  id="name" 
                  required 
                  placeholder="First Name"
                  value={formData.user_name}
                  onChange={handleChange}
                />
                <label htmlFor="name" className="contact__label">First Name</label>
              </div>
              
              <div className="contact__box">
                <input 
                  type="email" 
                  name="user_email" 
                  className="contact__input" 
                  id="email" 
                  required 
                  placeholder="Email Address"
                  value={formData.user_email}
                  onChange={handleChange}
                />
                <label htmlFor="email" className="contact__label">Email Address</label>
              </div>
              
              <div className="contact__box">
                <input 
                  type="text" 
                  name="user_subject" 
                  className="contact__input" 
                  id="subject" 
                  required 
                  placeholder="Subject"
                  value={formData.user_subject}
                  onChange={handleChange}
                />
                <label htmlFor="subject" className="contact__label">Subject</label>
              </div>
              
              <div className="contact__box contact__area">
                <textarea 
                  name="user_message" 
                  id="message" 
                  className="contact__input" 
                  required 
                  placeholder="Message"
                  value={formData.user_message}
                  onChange={handleChange}
                ></textarea>
                <label htmlFor="message" className="contact__label">Message</label>
              </div>
              
              <p className="contact__message" id="contact-message">
                {message}
              </p>

              <button type="submit" className="contact__button button">
                <i className="ri-send-plane-line"></i> Send Message
              </button>
            </div>
          </form>
        </div>

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
            <a href="https://github.com/Javantax" target="_blank" rel="noopener noreferrer" className="contact__social-link">
              <i className="ri-github-line"></i>
            </a>

            <a href="https://www.linkedin.com/in/daniyxl-khan" target="_blank" rel="noopener noreferrer" className="contact__social-link">
              <i className="ri-linkedin-box-line"></i>
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