import React, { useState } from 'react';
import './Contact.css';
import linkedinIcon from '../assets/icons/linkedin.svg';
import researchgateIcon from '../assets/icons/researchgate.svg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "gialama.vaia@gmail.com",
      link: "mailto:gialama.vaia@gmail.com"
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+306979356813 / +31625225060",
      link: "tel:+306979356813"
    },
    {
      icon: "📍",
      title: "Location",
      value: "Maastricht, Netherlands",
      link: null
    }
  ];

  const socialLinks = [
    {
      name: "The NeuroProject VP",
      url: "https://theneuroprojectvp.wordpress.com/",
      icon: "🧠",
      type: "emoji"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/vaia-gialama",
      icon: linkedinIcon,
      type: "svg"
    },
    {
      name: "ResearchGate",
      url: "https://researchgate.net/profile/vaia-gialama",
      icon: researchgateIcon,
      type: "svg"
    }
  ];

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-header">
          <h2>Contact Me</h2>
          <p>Let's connect for research opportunities</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <p>
              I'm always interested in research collaborations, academic opportunities, and scientific discussions. 
              Whether you have a research question or want to explore potential collaborations, feel free to reach out!
            </p>

            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-item">
                  <span className="contact-icon">{info.icon}</span>
                  <div className="contact-text">
                    <h4>{info.title}</h4>
                    {info.link ? (
                      <a href={info.link} target="_blank" rel="noopener noreferrer">
                        {info.value}
                      </a>
                    ) : (
                      <span>{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="social-links">
              <h4>Connect With Me</h4>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                  >
                    {social.type === "svg" ? (
                      <img src={social.icon} alt={social.name} className="social-svg-icon" />
                    ) : (
                      <span>{social.icon}</span>
                    )}
                    <span className="social-name">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h3>Send Inquiry</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="5"
                  required
                ></textarea>
              </div>

                              <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 