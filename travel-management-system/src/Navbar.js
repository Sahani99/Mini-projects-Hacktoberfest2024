// Navbar.js
import React from 'react';
import './css/Navbar.css';
import logo from './images/logo.png';
import profilePic from './images/profile.png'; 

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src={logo} alt="Travel Management Logo" className="navbar-logo" />

        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#locations">Locations</a></li>
          <li><a href="#tourguides">Tour Guides</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
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
