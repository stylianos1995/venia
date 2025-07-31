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
  const [showPopup, setShowPopup] = useState(false);

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

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('gialama.vaia@gmail.com');
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 2000);
    }
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "gialama.vaia@gmail.com",
      link: "mailto:gialama.vaia@gmail.com"
    }
  ];

  const socialLinks = [
    {
      name: "Email",
      url: "#",
      icon: "📧",
      type: "emoji",
      action: copyEmail
    },
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
      {/* Custom Popup */}
      {showPopup && (
        <div className="copy-popup">
          <span>Email copied to clipboard!</span>
        </div>
      )}
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



            <div className="social-links">
              <h4>Connect With Me</h4>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  social.action ? (
                    <button
                      key={index}
                      onClick={social.action}
                      className="social-icon"
                      title={social.name}
                    >
                      {social.type === "svg" ? (
                        <img src={social.icon} alt={social.name} className="social-svg-icon" />
                      ) : (
                        <span>{social.icon}</span>
                      )}
                    </button>
                  ) : (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                      title={social.name}
                    >
                      {social.type === "svg" ? (
                        <img src={social.icon} alt={social.name} className="social-svg-icon" />
                      ) : (
                        <span>{social.icon}</span>
                      )}
                    </a>
                  )
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