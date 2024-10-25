import React from 'react';
import './css/ContactUs.css';

function ContactUs() {
  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <p>If you have any questions or need assistance, feel free to reach out to us!</p>

      <form className="contact-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Your name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Your email" required />

        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" name="subject" placeholder="Subject" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" placeholder="Write your message here..." required></textarea>

        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </div>
  );
}

export default ContactUs;
