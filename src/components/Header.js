import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-brand">
          <h1>Vaia Gialama</h1>
        </div>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li><button onClick={() => scrollToSection('home')}>Home</button></li>
            <li><button onClick={() => scrollToSection('about')}>About</button></li>
            <li><button onClick={() => scrollToSection('experience')}>Experience</button></li>
            <li><button onClick={() => scrollToSection('research')}>Research</button></li>
            <li><button onClick={() => scrollToSection('skills')}>Expertise</button></li>
            <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
          </ul>
        </div>

        <div className="nav-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>

      <div className="hero" id="home">
        <div className="hero-overlay">
          <div className="hero-content">
          <h1 className="hero-title">Hi, I'm Vaia Gialama</h1>
          <p className="hero-subtitle">Biologist | Neuroscience Researcher | Microbiology Analyst</p>
          <p className="hero-description">
            Bringing hands-on experience in aseptic techniques, GMP compliance, and cleanroom operations. 
            Passionate about bridging the gap between neuroscience research and public understanding.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('research')}
            >
              View My Research
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </button>
          </div>
        </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 