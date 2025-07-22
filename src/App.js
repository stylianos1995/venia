import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Research from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import heroImage from './assets/images/hero.png';

function App() {
  return (
    <div className="App">
      {/* Global Background */}
      <div 
        className="global-background"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      <Header />
      <About />
      <Experience className="section-with-pattern" style={{ backgroundImage: `url(${heroImage})` }} />
      <Research />
      <Skills className="section-with-pattern" style={{ backgroundImage: `url(${heroImage})` }} />
      <Contact />
    </div>
  );
}

export default App;
