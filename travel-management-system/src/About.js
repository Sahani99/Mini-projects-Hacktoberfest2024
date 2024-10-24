import React from 'react';
import './css/About.css';
import logo from './images/logo.png';  

function About() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to the KAMINO TRAVEL AGENCY! We are dedicated to providing the best travel experiences,
        making it easy for you to plan, organize, and book your dream vacation.
      </p>
      <p>
        Whether you are looking for an exciting adventure in a new country, a relaxing stay in a quiet destination,
        or a guided tour to explore local culture, we have everything you need to make your tour unforgettable.
      </p>
      <p>
        Our team of experienced travel experts and tour guides are here to assist you every step of the way,
        ensuring that you enjoy a seamless and personalized travel experience.
      </p>
      <h2>Why Choose Us?</h2>
      <ul>
        <li>Personalized trip planning based on your preferences</li>
        <li>Wide range of travel packages and destinations</li>
        <li>Experienced local tour guides</li>
        <li>24/7 customer support</li>
      </ul>
      <p>
        Let us help you discover new places, meet amazing people, and make memories that last a lifetime!
      </p>
      <div className="about-logo">
        <img src={logo} alt="Company Logo" className="company-logo" />
      </div>
    </div>
  );
}

export default About;
