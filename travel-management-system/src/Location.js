import React from 'react';
import './css/Location.css'; 

import kandyImage from './images/kandy.jpg';
import colomboImage from './images/colombo.jpg';
import galleImage from './images/galle.jpg';
import nuwaraEliyaImage from './images/nuwaraeliya.jpg';
import sigiriyaImage from './images/sigiriya.jpg';
import anuradapuraImage from './images/anuradapura.jpg';
import trincomaleeImage from './images/trincomalee.jpg';

function Location() {
  const locations = [
    { name: 'Kandy', image: kandyImage },
    { name: 'Colombo', image: colomboImage },
    { name: 'Galle', image: galleImage },
    { name: 'Nuwara Eliya', image: nuwaraEliyaImage },
    { name: 'Sigiriya', image: sigiriyaImage },
    { name: 'Anuradapura', image: anuradapuraImage },
    { name: 'Trincomalee', image: trincomaleeImage }
  ];

  return (
    <div className="location-gallery">
      <h1>Locations Gallery</h1>
      <div className="gallery-grid">
        {locations.map((location, index) => (
          <div key={index} className="gallery-item">
            <img src={location.image} alt={location.name} className="gallery-image" />
            <p className="location-name">{location.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Location;




