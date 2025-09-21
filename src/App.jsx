import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import ScrollUp from './components/ScrollUp.jsx';
import './App.css';

function App() {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 1000,
      delay: 300,
      reset: false
    });

    sr.reveal('.home__info, .contact__mail', {origin: 'right'});
    sr.reveal('.home__name, .contact__social, .contact__data', {origin: 'left'});
    sr.reveal('.about__container, .section__title-1, .about__info', {origin: 'left'});
    sr.reveal('.projects__card', {interval: 70});
  }, []);

  return (
    <div className="App">
      <Header />
      <main className="main">
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </div>
  );
}

export default App;