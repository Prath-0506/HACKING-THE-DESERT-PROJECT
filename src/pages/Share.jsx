import React from 'react';
import './Share.css'; // CSS file you'll create next
import Navbar from '../components/Navbar'; // Adjust path based on your folder structure

const Share = () => {
  return (
    <>
      <Navbar />
      <section className="hero">
        <video autoPlay muted loop playsInline className="hero-video">
          <source src="/videos/share-video.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <div className="hero-text">
          <h1>Share Food & Items</h1>
          <p>Give extra to someone in need near you.</p>
        </div>
      </section>

      <section className="page-content">
        <h2>How to Share</h2>
        <p>List your surplus food or unused items and help your local community.</p>
        {/* Add your form or listing component here */}
      </section>

      <footer className="footer">
        <p>&copy; 2025 Ecozone. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Share;
