import '../styles/Footer.css';

const Footer = () => {
  const handleLinkClick = (sectionId, e) => {
    e.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer__container container">
        <span className="footer__copy">
          <a href="#home" onClick={(e) => handleLinkClick('home', e)}>Built with ❤️ by Daniyal Khan </a>&#169; 2025
        </span>
      </div>
    </footer>
  );
};

export default Footer;