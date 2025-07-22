import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-header">
          <h2>About Me</h2>
          <p>Get to know me better</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <h3>Who I Am</h3>
            <p>
              I'm Vaia Gialama, a Biologist and Neuroscience Researcher with hands-on experience 
              in aseptic techniques, GMP compliance, and cleanroom operations gained through 
              microbiology and neuroscience research. I'm committed to contributing precision, 
              quality, and a strong foundation in laboratory standards and data analysis.
            </p>
            
            <p>
              With a background in both neuroscience research and microbiology analysis, I enjoy 
              working across interdisciplinary fields and learning new laboratory techniques. 
              I'm particularly passionate about bridging the gap between neuroscience research 
              and public understanding through innovative science communication.
            </p>

            <div className="about-details">
              <div className="detail-item">
                <h4>Education</h4>
                <p>MSc in Neuroscience</p>
                <p>University of Thessaly</p>
                <p>GPA: 8.63/10</p>
              </div>
              
              <div className="detail-item">
                <h4>Location</h4>
                <p>Maastricht, Netherlands</p>
                <p>Available for opportunities</p>
              </div>
              
              <div className="detail-item">
                <h4>Interests</h4>
                <p>Neuroscience Research</p>
                <p>Microbiology Analysis</p>
                <p>Science Communication</p>
              </div>
            </div>

            <div className="about-cta">
              <a 
                href="/src/assets/documents/Resume_Vaia_Gialama.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Download Resume
              </a>
            </div>
          </div>
          
          <div className="about-image">
            <div className="image-placeholder">
              <div className="placeholder-content">
                <span>Profile Photo</span>
                <p>Add your photo here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 