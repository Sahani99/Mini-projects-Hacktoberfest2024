import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './Navbar';
import './css/App.css';
import coverImage from './images/c1.jpg'; 
import Footer from './Footer';
import DetailBox from './DetailBox';
import Location from './Location';
import About from './About';

function App() {
  const [isDetailBoxVisible, setIsDetailBoxVisible] = useState(false);

  const handlePlanTripClick = () => {
    setIsDetailBoxVisible(true);
  };

  const handleCloseDetailBox = () => {
    setIsDetailBoxVisible(false);
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="cover-image-container">
                  <img src={coverImage} alt="Cover" className="cover-image" />
                </div>
                <div className="button-container">
                  <button className="btn plan-trip-btn" onClick={handlePlanTripClick}>
                    Plan Your Trip
                  </button>
                  <Link to="/locations">
                    <button className="btn locations-btn">Locations</button>
                  </Link>
                </div>

                {isDetailBoxVisible && <DetailBox onClose={handleCloseDetailBox} />}

                <Footer />
              </>
            }
          />
          <Route path="/locations" element={<Location />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
