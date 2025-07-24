import React, { useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [activeTab, setActiveTab] = useState(1);

  const skillCategories = [
    {
      id: 1,
      title: "Laboratory Techniques",
      icon: "🧪",
      skills: [
        "Aseptic Techniques",
        "Cell Culture",
        "Microscopic Analysis",
        "Blood Sampling",
        "Cleanroom Operations"
      ]
    },
    {
      id: 2,
      title: "Research & Analysis",
      icon: "📊",
      skills: [
        "EEG Analysis",
        "Data Analysis",
        "Statistical Analysis",
        "Literature Review",
        "Scientific Writing"
      ]
    },
    {
      id: 3,
      title: "Equipment & Systems",
      icon: "🔬",
      skills: [
        "VITEK 2 System",
        "BIOPAC Systems",
        "Flow Cytometry",
        "Western Blot",
        "MTT Assay"
      ]
    }
  ];

  const additionalSkills = [
    "GMP Compliance",
    "ISO 15189 Standards",
    "Immunohistochemistry",
    "Antibiograms",
    "Science Communication",
    "Grant Writing",
    "Peer Review",
    "Quality Control"
  ];

  const languages = [
    { name: "Greek", level: "Native", dots: 5 },
    { name: "English", level: "Fluent", dots: 5 },
    { name: "German", level: "B1", dots: 3 },
    { name: "Dutch", level: "A2", dots: 2 }
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="section-header">
          <h2>Expertise & Skills</h2>
          <p>My laboratory and research capabilities</p>
        </div>

        <div className="skills-content">
          {/* Tab Navigation */}
          <div className="skills-tabs">
            {skillCategories.map(category => (
              <button
                key={category.id}
                className={`tab-button ${activeTab === category.id ? 'active' : ''}`}
                onClick={() => setActiveTab(category.id)}
              >
                <span className="tab-icon">{category.icon}</span>
                <span className="tab-title">{category.title}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="tab-content">
            {skillCategories.map(category => (
              <div
                key={category.id}
                className={`tab-panel ${activeTab === category.id ? 'active' : ''}`}
              >
                <div className="skills-list">
                  {category.skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <span className="skill-name">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills & Languages */}
          <div className="additional-skills">
            <div className="additional-section">
              <h3>Additional Capabilities</h3>
              <div className="skills-tags">
                {additionalSkills.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="additional-section">
              <h3>Languages</h3>
              <div className="languages-matrix">
                {languages.map((language, index) => (
                  <div key={index} className="language-item">
                    <div className="language-info">
                      <span className="language-name">{language.name}</span>
                      <span className="language-level">{language.level}</span>
                    </div>
                    <div className="dots-container">
                      {[...Array(5)].map((_, dotIndex) => (
                        <span 
                          key={dotIndex} 
                          className={`dot ${dotIndex < language.dots ? 'filled' : 'empty'}`}
                        ></span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 