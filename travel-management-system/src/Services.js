import React from 'react';
import './css/Services.css';  
import { Link } from 'react-router-dom';

function Services() {
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="service-list">
        <div className="service-item">
          <h2>Trip Planning</h2>
          <p>We offer personalized trip planning services to help you design the perfect vacation based on your preferences and budget.</p>
          <Link to="/" className="service-link">Learn More</Link>
        </div>
        <div className="service-item">
          <h2>Accommodation Booking</h2>
          <p>Book a wide range of accommodation options, from budget-friendly hotels to luxury resorts, with our easy-to-use system.</p>
        </div>
        <div className="service-item">
          <h2>Tour Guides</h2>
          <p>Hire experienced local tour guides to make your trips more immersive, informative, and enjoyable.</p>
          <Link to="/tourguides" className="service-link">Learn More</Link>
        </div>
        <div className="service-item">
          <h2>Transport Services</h2>
          <p>We provide convenient and comfortable transport options for your trips, including car rentals and shuttle services.</p>
        </div>
        <div className="service-item">
          <h2>Travel Insurance</h2>
          <p>Protect your trips with comprehensive travel insurance coverage for medical emergencies, cancellations, and more.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
