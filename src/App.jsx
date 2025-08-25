import React, { useEffect } from 'react';
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
    // Initialize EmailJS
    if (window.emailjs) {
      window.emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID
    }
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
