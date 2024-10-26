import React from 'react';
import './css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} KAMINO TRAVEL AGENCY. All Rights Reserved.</p>
        <div className="social-links">
          <a href="facebook.com/kamino" aria-label="Facebook">Facebook</a>
          <a href="twitter.com/kamino" aria-label="Twitter">Twitter</a>
          <a href="instagram/kamino" aria-label="Instagram">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
