import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-header">
          <h2>About Me</h2>
        </div>
        
        <div className="about-content">
          <div className="about-text">
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

            <div className="about-cta">
              <a 
                href="/Resume_Vaia_Gialama.pdf" 
                className="btn btn-primary"
                download="Resume_Vaia_Gialama.pdf"
              >
                📄 Download Resume
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

        {/* About Details moved below the text-photo grid */}
        <div className="about-details">
          <div className="detail-item education-item">
            <h4>Education</h4>
            <p>MSc in Neuroscience-Neurorehabilitation</p>
            <p>BSc in Biological Appliances & Technology</p>
            <div className="gpa-info">
              <span className="gpa-text">MSc GPA: 8.63/10</span>
              <span className="gpa-text">BSc GPA: 7.18/10</span>
            </div>
          </div>
          
          <div className="detail-item">
            <h4>Location</h4>
            <p>Maastricht, Netherlands</p>
            <p>Available for opportunities-Willing to relocate</p>
          </div>
          
          <div className="detail-item">
            <h4>Interests</h4>
            <p>Neuroscience Research</p>
            <p>Microbiology Analysis</p>
            <p>Science Communication</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 