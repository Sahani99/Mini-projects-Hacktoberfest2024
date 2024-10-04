import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1>Welcome to the Travel Management System</h1>
        <p>This is the main project, and it is designed to be a comprehensive Travel Management System.</p>
      </header>

      <section className="description">
        <h2>About the Project</h2>
        <p>
          This project is built using the <strong>MERN stack</strong>, which consists of <strong>MongoDB, Express, React, and Node.js</strong>.
          It's a full-featured travel management platform that helps manage travelers, bookings, accommodations, and more.
        </p>
        <p>Feel free to edit this project and explore the flexibility of the MERN stack.</p>
      </section>

      <section className="get-started">
        <h2>Get Started</h2>
        <p>To contribute or make changes, follow these steps:</p>
        <ol>
          <li>Clone the project from the repository.</li>
          <li>Install dependencies using <code>npm install</code>.</li>
          <li>Make changes and see updates live with <code>npm start</code>.</li>
        </ol>
        <p>
          Whether you're improving the backend with Node.js and MongoDB or polishing the frontend with React, this project is yours to explore.
        </p>
      </section>

      <footer className="footer">
        <p>Happy coding! 🌍 ✈️</p>
      </footer>
    </div>
  );
}

export default App;
