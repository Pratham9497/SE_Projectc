// src/components/MainContent.js
import React from 'react';
import './MainContent.css';
import img1 from './assets/imgac.jpeg';

function MainContent() {
  return (
    <div className="main-content">
      <div className="header">
        <h1>Welcome to NITP College MIS</h1>
        <p>Your Gateway to Academic Excellence</p>
      </div>
      <div className="features">
        <div className="feature">
          <h2>Academic Programs</h2>
          <img src={img1} alt="" />
          <p>Explore our diverse academic programs.</p>
        </div>
        <div className="feature">
          <h2>Student Portal</h2>
          <img src={img1} alt="" />
          <p>Access your student information and resources.</p>
        </div>
        <div className="feature">
          <h2>Faculty Directory</h2>
          <img src={img1} alt="" />
          <p>Connect with our experienced faculty members.</p>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
