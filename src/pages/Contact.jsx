import React, { useState } from 'react';
import '../App.css'; 
import contactVideo from '../assets/ContactVid.mp4'; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [msg, setMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ 
      ...formData,
      [e.target.id]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMsg(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">Ecozone</div>
        <nav>
          <ul>
            <li><a href="/">About</a></li>
            <li><a href="/recycle">Recycle Plastic</a></li>
            <li><a href="/foodshare">Share Food & Items</a></li>
            <li><a href="/carpool">Carpool</a></li>
            <li><a href="/redeem">Redeem Codes</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </nav>
      </header>

      {}
      <section className="hero">
        <video autoPlay muted loop playsInline className="hero-video">
          <source src={contactVideo} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <div className="hero-text">
          <h1>Contact Us</h1>
          <p>We’d love to hear from you! Reach out anytime.</p>
        </div>
      </section>

      {}
      <section className="contact">
        <h2>Get in Touch</h2>
        <form id="contactForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label><br />
            <input 
              type="text" 
              id="name" 
              placeholder="Your Name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label><br />
            <input 
              type="email" 
              id="email" 
              placeholder="Your Email" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label><br />
            <textarea 
              id="message" 
              placeholder="Your Message" 
              value={formData.message}
              onChange={handleChange}
              required 
            />
          </div>
          <button type="submit">Send Message</button>
        </form>
        <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>{msg}</p>
      </section>

      {}
      <footer className="footer">
        <p>&copy; 2025 Ecozone. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Contact;
