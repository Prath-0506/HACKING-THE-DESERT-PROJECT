import React from "react";
import "../App.css";
import video1 from "../assets/video1.mp4";
import { Link } from 'react-router-dom';



const Home = () => {
  return (
    <>
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">Ecozone</div>
        <nav>
          <ul>
         <li><Link to="/">Home</Link></li>
<li><Link to="/recycle">Recycle Plastic</Link></li>
<li><Link to="/foodshare">Share Food & Items</Link></li>
<li><Link to="/carpool">Carpool</Link></li>
<li><Link to="/redeem">Redeem Codes</Link></li>
<li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
      </header>

      {}
   <section className="hero">
  <video autoPlay muted loop playsInline className="hero-video">
    <source src={video1} type="video/mp4" />
    Your browser does not support HTML5 video.
  </video>
  <div className="hero-text">
    <h1>Together for a Greener Future</h1>
    <p>Recycle. Share. Plant. Sustain.</p>
  </div>
</section>



    <section id="about" className="about">
  <h2>About Ecozone</h2>
  <p>
    Ecozone is more than just a platform — it's a movement toward a cleaner, more sustainable future. 
    We empower individuals and communities to take direct action in reducing waste, sharing resources, 
    and promoting eco-conscious living. Whether you're recycling plastic, sharing surplus food, carpooling 
    to reduce emissions, or planting trees using earned points — every action counts.
  </p>

  <p>
    Our mission is to create a digital ecosystem where small steps lead to big impact. 
    By gamifying sustainability with a reward system, we make eco-friendly habits easy, 
    fun, and rewarding. Users can track their contributions, earn redeemable points, 
    and even access exclusive brand discounts or plant real trees — all while doing their part for the planet.
  </p>

  <p>
    Join Ecozone today and become part of a community that's not just talking about change — 
    we're building it, one action at a time.
  </p>
</section>


     <section id="how-it-works" className="how-it-works">
  <h2>How It Works</h2>
  <div className="steps">
    <div className="step">
      <h3>1. Create Your Account</h3>
      <p>Join Ecozone by signing up with your email. Start tracking your eco-friendly actions and earning rewards from day one.</p>
    </div>

    <div className="step">
      <h3>2. Recycle Plastic Waste</h3>
      <p>Submit images or videos as proof of plastic recycling. Once verified, you earn EcoPoints based on the weight or volume recycled.</p>
    </div>

    <div className="step">
      <h3>3. Share Food & Usable Items</h3>
      <p>List excess food, clothes, books, or other usable items to share with those nearby. This helps reduce waste and support communities in need.</p>
    </div>

    <div className="step">
      <h3>4. Use Carpool Feature</h3>
      <p>Choose whether you're a rider or a passenger. Connect with nearby users going in the same direction to reduce fuel usage and emissions.</p>
    </div>

    <div className="step">
      <h3>5. Sell Farm Produce</h3>
      <p>Farmers and producers can directly list their fresh produce through Ecozone. This helps reach more buyers without middlemen, ensuring fair prices.</p>
    </div>

    <div className="step">
      <h3>6. Earn and Redeem Points</h3>
      <p>Every eco-action earns you EcoPoints. Redeem them for discounts on sustainable brands, coupons, or entries to win eco-friendly rewards and vouchers.</p>
    </div>


    <div className="step">
      <h3>7. View Impact Dashboard</h3>
      <p>Track your contributions—total recycled plastic, shared items, trees planted, and emissions saved—all from your personalized dashboard.</p>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="footer" id="contact">
        <p>&copy; 2025 Ecozone. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Home;
