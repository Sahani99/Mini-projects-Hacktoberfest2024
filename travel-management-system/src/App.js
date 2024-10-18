// App.js
import React from 'react';
import Navbar from './Navbar';
import './css/App.css';
import coverImage from './images/c1.jpg'; 
import Footer from './Footer';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="cover-image-container">
        <img src={coverImage} alt="Cover" className="cover-image" />
      </div>
      <div className="button-container">
        <button className="btn plan-trip-btn">Plan Your Trip</button>
        <button className="btn locations-btn">Locations</button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
