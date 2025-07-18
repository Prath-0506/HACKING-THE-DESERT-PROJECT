import React, { useState } from 'react';
import '../App.css'; // Import your global or custom CSS
import video2 from '../assets/video2.mp4'; // Adjust path to your video accordingly

const Recycle = () => {
  const [pointsMessage, setPointsMessage] = useState('');

  const handleUploadSubmit = (e) => {
    e.preventDefault();
    setPointsMessage('✅ Photo uploaded! You earned 20 EcoPoints!');
  };

  return (
    <div>
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">Ecozone</div>
        <nav>
          <ul>
            <li><a href="/#about">About</a></li>
            <li><a href="/recycle">Recycle Plastic</a></li>
            <li><a href="/#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section with Video */}
      <section className="hero">
        <video autoPlay muted loop playsInline className="hero-video">
          <source src={video2} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <div className="hero-text">
          <h1>Recycle Your Plastic</h1>
          <p>Choose your way to make an impact: upload proof or drop it off nearby!</p>
        </div>
      </section>

      {/* Recycle Options */}
      <section className="recycle-options">
        <div className="option">
          <h2>📸 Upload Your Recycling Proof</h2>
          <p>Submit a photo of the plastic you recycled and earn EcoPoints!</p>
          <form id="uploadForm" onSubmit={handleUploadSubmit}>
            <input type="file" accept="image/*" required />
            <br /><br />
            <button type="submit">Upload & Earn Points</button>
          </form>
          {pointsMessage && <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>{pointsMessage}</p>}
        </div>

        <div className="option">
          <h2>📍 Find Local Recycling Center</h2>
          <p>Prefer dropping it off? Use your location or search online to find the nearest trusted recycling center.</p>
          <a
            href="https://www.google.com/maps/search/recycling+center+near+me/"
            target="_blank"
            rel="noopener noreferrer"
            className="find-center-btn"
          >
            Find a Recycling Center
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Ecozone. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Recycle;
