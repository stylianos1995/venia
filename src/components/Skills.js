import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      id: 1,
      title: "Laboratory Techniques",
      skills: [
        { name: "Aseptic Techniques", level: "Expert", experience: "4+ years" },
        { name: "Cell Culture", level: "Advanced", experience: "3+ years" },
        { name: "Microscopic Analysis", level: "Advanced", experience: "3+ years" },
        { name: "Blood Sampling", level: "Expert", experience: "2+ years" },
        { name: "Cleanroom Operations", level: "Advanced", experience: "3+ years" }
      ]
    },
    {
      id: 2,
      title: "Research & Analysis",
      skills: [
        { name: "EEG Analysis", level: "Advanced", experience: "1+ year" },
        { name: "Data Analysis", level: "Advanced", experience: "3+ years" },
        { name: "Statistical Analysis", level: "Intermediate", experience: "2+ years" },
        { name: "Literature Review", level: "Expert", experience: "4+ years" },
        { name: "Scientific Writing", level: "Advanced", experience: "3+ years" }
      ]
    },
    {
      id: 3,
      title: "Equipment & Systems",
      skills: [
        { name: "VITEK 2 System", level: "Expert", experience: "2+ years" },
        { name: "BIOPAC Systems", level: "Advanced", experience: "1+ year" },
        { name: "Flow Cytometry", level: "Intermediate", experience: "2+ years" },
        { name: "Western Blot", level: "Intermediate", experience: "2+ years" },
        { name: "MTT Assay", level: "Expert", experience: "3+ years" }
      ]
    }
  ];

  const otherSkills = [
    "GMP Compliance",
    "ISO 15189 Standards",
    "Immunohistochemistry",
    "Antibiograms",
    "Science Communication",
    "Grant Writing",
    "Peer Review",
    "Quality Control"
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="section-header">
          <h2>Expertise & Skills</h2>
          <p>My laboratory and research capabilities</p>
        </div>

        <div className="skills-content">
          <div className="skills-categories">
            {skillCategories.map(category => (
              <div key={category.id} className="skill-category">
                <h3>{category.title}</h3>
                <div className="skills-grid">
                  {category.skills.map((skill, index) => (
                    <div key={index} className="skill-card">
                      <div className="skill-name">{skill.name}</div>
                      <div className="skill-details">
                        <span className="skill-level">{skill.level}</span>
                        <span className="skill-experience">{skill.experience}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="additional-capabilities">
            <h3>Additional Capabilities</h3>
            <div className="capabilities-list">
              {otherSkills.map((skill, index) => (
                <div key={index} className="capability-tag">
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="skills-summary">
          <div className="summary-item">
            <h4>Continuous Learning</h4>
            <p>I stay current with the latest research methodologies, laboratory techniques, and scientific discoveries in neuroscience and microbiology.</p>
          </div>
          <div className="summary-item">
            <h4>Precision & Accuracy</h4>
            <p>I maintain the highest standards in laboratory procedures, ensuring reliable and reproducible results in all research and diagnostic work.</p>
          </div>
          <div className="summary-item">
            <h4>Science Communication</h4>
            <p>I effectively translate complex scientific concepts into accessible content, bridging the gap between research and public understanding.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 