import React from 'react';
import './css/TourGuides.css';  
import guide1 from './images/guide1.png';  
import guide2 from './images/guide2.png';
import guide3 from './images/guide3.png';

function TourGuides() {
    return (
        <div className="tour-guides-container">
          <h1>Meet Our Expert Tour Guides</h1>
          <p>Our experienced tour guides ensure a memorable, informative trip. Explore their skills and backgrounds below.</p>
    
          <div className="guides-list">
            <div className="guide-item">
              <img src={guide1} alt="John Doe" className="guide-image" />
              <h2>John Doe</h2>
              <p>Expert in historical tours and cultural experiences, with over 10 years of experience.</p>
              <div className="guide-details">
                <p><strong>Age:</strong> 35</p>
                <p><strong>Languages:</strong> English, French, Spanish</p>
                <p><strong>Specializations:</strong> History, Cultural Tours, Architecture</p>
              </div>
            </div>
    
            <div className="guide-item">
              <img src={guide2} alt="Jane Smith" className="guide-image" />
              <h2>Jane Smith</h2>
              <p>Passionate about wildlife and eco-tourism, offering unique outdoor experiences.</p>
              <div className="guide-details">
                <p><strong>Age:</strong> 29</p>
                <p><strong>Languages:</strong> English, German</p>
                <p><strong>Specializations:</strong> Wildlife, Nature Trails, Eco-Tourism</p>
              </div>
            </div>
    
            <div className="guide-item">
              <img src={guide3} alt="Michael Lee" className="guide-image" />
              <h2>Michael Lee</h2>
              <p>Fluent in multiple languages, Michael excels in city tours and urban exploration.</p>
              <div className="guide-details">
                <p><strong>Age:</strong> 33</p>
                <p><strong>Languages:</strong> English, Chinese, Japanese</p>
                <p><strong>Specializations:</strong> City Tours, Urban Landmarks, Multilingual Support</p>
              </div>
            </div>
          </div>
        </div>
      );
    }

export default TourGuides;
