import React, { useState } from 'react';
import '../App.css'; 
import carpoolVideo from '../assets/carppolvid.mp4'; 
const Carpool = () => {
  const [role, setRole] = useState('Passenger');
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(`Looking for ${role.toLowerCase()}s from ${origin} to ${destination}...`);
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

      {/* */}
      <section className="hero">
        <video autoPlay muted loop playsInline className="hero-video">
          <source src={carpoolVideo} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <div className="hero-text">
          <h1>Carpool</h1>
          <p>Save fuel. Meet people. Reduce your carbon footprint.</p>
        </div>
      </section>

      {}
      <section className="carpool">
        <h2>Find or Offer a Ride</h2>

        <div className="role-selection">
          <label>
            <input
              type="radio"
              name="role"
              value="Passenger"
              checked={role === 'Passenger'}
              onChange={() => setRole('Passenger')}
            />
            Passenger
          </label>
          <label>
            <input
              type="radio"
              name="role"
              value="Rider"
              checked={role === 'Rider'}
              onChange={() => setRole('Rider')}
            />
            Rider
          </label>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="origin">Origin:</label>
            <input
              type="text"
              id="origin"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              placeholder="Enter your starting point"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="destination">Destination:</label>
            <input
              type="text"
              id="destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Enter your destination"
              required
            />
          </div>
          <button type="submit">Check for Matches</button>
        </form>

        <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>{message}</p>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Ecozone. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Carpool;

