import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">Ecozone</div>
      <nav>
        <ul>
          <li><Link to="/recycle">Recycle Plastic</Link></li>
          <li><Link to="/foodshare">Share Food & Items</Link></li>
          <li><Link to="/carpool">Carpool</Link></li>
          <li><Link to="/redeem">Redeem Codes</Link></li>
          <li><Link to="/sell">Sell Products</Link></li> {/* ✅ Keep this here */}
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;



