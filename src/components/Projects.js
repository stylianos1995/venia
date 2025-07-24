import React, { useState } from 'react';
import './Projects.css';

const Research = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const publications = [
    {
      id: 1,
      title: "Alzheimer's Disease and Effects of ABCA7 Polymorphisms: A Review",
      authors: "Vaia Gialama, Vasileios Siokas, Ioannis Liampas, Zisis Tsouris, Polyxeni Stamati, Paraskevi Aslanidou, Antonios Provatas, Vana Tsimourtou, Georgia Xiromerisiou, Dimitrios P Bogdanos, Efthimios Dardiotis",
      journal: "Journal of Integrative Neuroscience",
      date: "September 6, 2024",
      doi: "10.31083/j.jin2301001",
      abstract: "A comprehensive review examining the role of ABCA7 polymorphisms in Alzheimer's disease pathogenesis and their potential implications for therapeutic interventions.",
      keywords: ["Alzheimer's Disease", "ABCA7", "Genetics", "Neurodegeneration", "Review"]
    }
  ];

  const researchProjects = [
    {
      id: 1,
      title: "The NeuroProject VP",
      description: "Founder of a science communication initiative that makes neuroscience accessible by translating complex research into engaging, digestible content through articles, web design, and social media.",
      technologies: ["Science Communication", "Content Creation", "Web Design", "Social Media"],
      category: "communication",
      liveUrl: "https://theneuroprojectvp.wordpress.com/",
      period: "2021 - Present"
    },
    {
      id: 2,
      title: "Cognitive Impairments in Schizophrenia Research",
      description: "MSc thesis research on brain reorganization and neurorehabilitation in schizophrenia, contributing to understanding cognitive impairments and potential treatment approaches.",
      technologies: ["Neuroscience", "Research", "Data Analysis", "Academic Writing"],
      category: "research",
      period: "2021 - 2023"
    },
    {
      id: 3,
      title: "Risperidone for Glioblastoma Treatment",
      description: "Undergraduate research on repurposing risperidone for glioblastoma treatment, involving cell culture work with T98G and U87G cell lines.",
      technologies: ["Cell Culture", "Glioblastoma Research", "Drug Repurposing", "MTT Assay"],
      category: "research",
      period: "2019 - 2021"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Research' },
    { id: 'research', label: 'Research Projects' },
    { id: 'communication', label: 'Science Communication' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? researchProjects 
    : researchProjects.filter(project => project.category === activeFilter);

  return (
    <section className="research" id="research">
      <div className="container">
        <div className="section-header">
          <h2>Research & Publications</h2>
          <p>My scientific contributions and research projects</p>
        </div>

        {/* Publications Section */}
        <div className="publications-section">
          <h3 className="section-subtitle">Publications</h3>
          <div className="publications-list">
            {publications.map(publication => (
              <div key={publication.id} className="publication-card">
                <div className="publication-header">
                  <h4 className="publication-title">{publication.title}</h4>
                  <span className="publication-date">{publication.date}</span>
                </div>
                <p className="publication-authors">{publication.authors}</p>
                <p className="publication-journal">{publication.journal}</p>
                <p className="publication-abstract">{publication.abstract}</p>
                <div className="publication-details">
                  <span className="doi-link">DOI: {publication.doi}</span>
                  <div className="publication-keywords">
                    {publication.keywords.map((keyword, index) => (
                      <span key={index} className="keyword-tag">{keyword}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research Projects Section */}
        <div className="research-projects-section">
          <h3 className="section-subtitle">Research Projects</h3>
          
          <div className="research-filters">
            {filters.map(filter => (
              <button
                key={filter.id}
                className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="research-grid">
            {filteredProjects.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-content">
                  <div className="project-header">
                    <h4 className="project-title">{project.title}</h4>
                    <span className="project-period">{project.period}</span>
                  </div>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {project.liveUrl && (
                    <div className="project-links">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                        View Project
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research; 