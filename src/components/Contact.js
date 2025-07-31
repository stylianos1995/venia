import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import linkedinIcon from '../assets/icons/linkedin.svg';
import researchgateIcon from '../assets/icons/researchgate.svg';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    let fieldName = name;
    
    // Map EmailJS field names to our state names
    if (name === 'user_name') fieldName = 'name';
    if (name === 'user_email') fieldName = 'email';
    
    setFormData({
      ...formData,
      [fieldName]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    emailjs.sendForm(
      'service_bj9u0v4',
      'template_qqg54oi',
      form.current,
      'o4qm3LVXE7X_4PIsd'
    )
      .then((result) => {
        console.log('SUCCESS!', result.text);
        setPopupMessage('Email sent successfully! I will get back to you soon.');
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setIsSubmitting(false);
      }, (error) => {
        console.log('FAILED...', error.text);
        setPopupMessage('Failed to send email. Please try again or contact me directly.');
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000);
        setIsSubmitting(false);
      });
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('gialama.vaia@gmail.com');
      setPopupMessage('Email copied to clipboard!');
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
      setPopupMessage('Failed to copy email. Please copy manually: gialama.vaia@gmail.com');
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
      url: "https://www.linkedin.com/in/gialamavaia-biologist-in-neuroscience",
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
          <span>{popupMessage}</span>
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
            <form ref={form} onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="user_name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="user_email"
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