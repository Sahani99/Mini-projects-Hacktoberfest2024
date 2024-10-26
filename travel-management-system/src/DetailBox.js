// DetailBox.js
import React from 'react';
import './css/DetailBox.css'; 

function DetailBox({ onClose }) {
  return (
    <div className="popup-overlay">
      <div className="trip-detail-box popup">
        <h3>Plan Your Trip</h3>
        <form className="trip-form">
          <label>
            Destination:
            <select name="destination" className="destination-select">
              <option value="anuradhapura">Anuradhapura</option>
              <option value="kandy">Colombo</option>
              <option value="colombo">Galle</option>
              <option value="galle">Kandy</option>
              <option value="nuwara-eliya">Nuwara Eliya</option>
              <option value="anuradhapura">Sigiriya</option>
              <option value="sigiriya">Trincomalee</option>
            </select>
          </label>
          <label>
            Travel Start Date:
            <input type="date" name="date" />
          </label>
          <label>
            Travel End Date:
            <input type="date" name="date" />
          </label>
          <label>
            Number of Travelers:
            <input type="number" name="travelers" />
          </label>
          <label className="tour-guide-label">Do you want a tour guide?</label>
          <div className="tour-guide-options">
            <label>
              <input type="radio" name="tour_guide" value="yes" /> Yes
            </label>
            <label>
              <input type="radio" name="tour_guide" value="no" /> No
            </label>
          </div>
          <label>
            Special Requests:
            <textarea name="requests"></textarea>
          </label>
          <button type="submit" className="btn submit-btn">Submit</button>
        </form>
        <button className="btn close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default DetailBox;
