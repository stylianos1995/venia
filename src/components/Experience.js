import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Research Intern",
      company: "University of Liège",
      period: "03/2024 - 11/2024",
      description: "Configured and optimized EEG and BIOPAC systems for clinical and behavioral research. Conducted electrophysiological diagnostics (EMG, ECG) and performed advanced EEG preprocessing. Collected, analyzed, and interpreted complex neurophysiological datasets.",
      technologies: ["EEG", "BIOPAC", "EMG", "ECG", "Data Analysis"]
    },
    {
      id: 2,
      title: "Biologist – Microbiology Assistant",
      company: "Medical Laboratory I. Papageorgiou",
      period: "12/2022 - 01/2024",
      description: "Accurately prepared, calibrated, and standardized reagents. Performed 500+ blood samplings using aseptic techniques. Operated VITEK 2 System for microbial identification and antimicrobial susceptibility testing.",
      technologies: ["VITEK 2", "GMP Compliance", "Aseptic Techniques", "ISO 15189"]
    },
    {
      id: 3,
      title: "Biologist – Microbiology Assistant",
      company: "Medical Laboratory L.Garavela",
      period: "03/2021 - 07/2022",
      description: "Conducted detailed microscopic and biochemical analyses. Executed immunohistochemistry tests with precision. Performed and interpreted antibiograms using disk diffusion method.",
      technologies: ["Microscopic Analysis", "Immunohistochemistry", "Antibiograms", "GMP Standards"]
    },
    {
      id: 4,
      title: "Research Assistant",
      company: "Neurosurgical Institute, University Hospital of Ioannina",
      period: "10/2019 - 11/2020",
      description: "Executed aseptic techniques in cleanroom environment. Prepared and handled 20+ cell culture samples. Conducted Trypan Blue and MTT assays achieving 95% reliability in cell viability data.",
      technologies: ["Cell Culture", "T98G", "U87G", "MTT Assay", "Cleanroom Operations"]
    }
  ];

  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="section-header">
          <h2>Experience</h2>
          <p>My professional journey</p>
        </div>
        
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{exp.title}</h3>
                  <h4>{exp.company}</h4>
                  <span className="period">{exp.period}</span>
                </div>
                
                <p className="description">{exp.description}</p>
                
                <div className="technologies">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
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