import React from 'react';
import { Link } from 'react-router-dom';
import './css/Navbar.css';
import logo from './images/logo.png';
import profilePic from './images/profile.png'; 

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src={logo} alt="Travel Management Logo" className="navbar-logo" />

        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/locations">Locations</Link></li>
          <li><Link to="/tourguides">Tour Guides</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <div className="auth-profile">
          <button className="btn login-btn">Login</button>
          <button className="btn signup-btn">Sign Up</button>
          <div className="profile">
            <img src={profilePic} alt="Profile" className="profile-pic" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
