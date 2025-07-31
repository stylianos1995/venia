import React, { useState, useEffect, useRef } from 'react';
import './Experience.css';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [visibleItems, setVisibleItems] = useState([]);
  const timelineRefs = useRef([]);

  const experiences = [
    {
      id: 1,
      title: "Research Intern",
      company: "University of Liège",
      period: "03/2024 - 11/2024",
      description: "Configured and optimized EEG and BIOPAC systems for clinical and behavioral research. Conducted electrophysiological diagnostics (EMG, ECG) and performed advanced EEG preprocessing. Collected, analyzed, and interpreted complex neurophysiological datasets.",
      technologies: ["EEG", "BIOPAC", "EMG", "ECG", "Data Analysis"],
      bulletPoints: [
        "Configured EEG and BIOPAC systems",
        "Conducted electrophysiological diagnostics",
        "Performed advanced EEG preprocessing",
        "Analyzed neurophysiological datasets"
      ]
    },
    {
      id: 2,
      title: "Biologist – Microbiology Assistant",
      company: "Medical Laboratory I. Papageorgiou",
      period: "12/2022 - 01/2024",
      description: "Accurately prepared, calibrated, and standardized reagents. Performed 500+ blood samplings using aseptic techniques. Operated VITEK 2 System for microbial identification and antimicrobial susceptibility testing.",
      technologies: ["VITEK 2", "GMP Compliance", "Aseptic Techniques", "ISO 15189"],
      bulletPoints: [
        "Prepared and calibrated reagents",
        "Performed 500+ blood samplings",
        "Operated VITEK 2 System",
        "Conducted microbial identification"
      ]
    },
    {
      id: 3,
      title: "Biologist – Microbiology Assistant",
      company: "Medical Laboratory L.Garavela",
      period: "03/2021 - 07/2022",
      description: "Conducted detailed microscopic and biochemical analyses. Executed immunohistochemistry tests with precision. Performed and interpreted antibiograms using disk diffusion method.",
      technologies: ["Microscopic Analysis", "Immunohistochemistry", "Antibiograms", "GMP Standards"],
      bulletPoints: [
        "Conducted microscopic analyses",
        "Executed immunohistochemistry tests",
        "Performed antibiograms",
        "Interpreted test results"
      ]
    },
    {
      id: 4,
      title: "Research Assistant",
      company: "Neurosurgical Institute, University Hospital of Ioannina",
      period: "10/2019 - 11/2020",
      description: "Executed aseptic techniques in cleanroom environment. Prepared and handled 20+ cell culture samples. Conducted Trypan Blue and MTT assays achieving 95% reliability in cell viability data.",
      technologies: ["Cell Culture", "T98G", "U87G", "MTT Assay", "Cleanroom Operations"],
      bulletPoints: [
        "Executed aseptic techniques",
        "Handled 20+ cell culture samples",
        "Conducted Trypan Blue assays",
        "Achieved 95% reliability in data"
      ]
    }
  ];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.dataset.id);
            setVisibleItems(prev => [...new Set([...prev, id])]);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    timelineRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
      // Restore body scroll when component unmounts
      document.body.style.overflow = '';
    };
  }, []);

  const toggleTab = (jobId) => {
    const newActiveTab = activeTab === jobId ? null : jobId;
    setActiveTab(newActiveTab);
    
    // Prevent body scroll when popup is active on mobile
    if (window.innerWidth <= 768) {
      if (newActiveTab) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
  };

  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="section-header">
          <h2>Experience</h2>
          <p>My professional journey</p>
        </div>
        
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} ${visibleItems.includes(exp.id) ? 'visible' : ''}`}
              ref={el => timelineRefs.current[index] = el}
              data-id={exp.id}
            >
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{exp.title}</h3>
                  <h4>{exp.company}</h4>
                  <span className="period">{exp.period}</span>
                </div>
                
                {/* Show bullet points by default for all jobs */}
                <ul className="bullet-list">
                  {exp.bulletPoints.map((point, pointIndex) => (
                    <li key={pointIndex}>{point}</li>
                  ))}
                </ul>
                
                <div className="technologies">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Tab button - for all jobs */}
                <button 
                  className="tab-toggle"
                  onClick={() => toggleTab(exp.id)}
                >
                  {activeTab === exp.id ? 'Hide Details' : 'Show Details'}
                </button>
              </div>

              {/* Details panel - for all jobs */}
              <div className={`details-panel ${activeTab === exp.id ? 'active' : ''}`}>
                <div className="details-content">
                  <div className="timeline-header">
                    <h3>{exp.title} - Details</h3>
                    <h4>{exp.company}</h4>
                    <span className="period">{exp.period}</span>
                  </div>
                  
                  <p className="description">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience; 