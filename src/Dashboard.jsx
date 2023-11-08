// src/components/Dashboard.js
import React from 'react';
import './Dashboard.css';
// import './MainContent.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <h2>Welcome to Your Dashboard</h2>
        <div className="dashboard-cards">
          <div className="dashboard-card">
            <h3>Courses</h3>
            <p>You are currently enrolled in 5 courses.</p>
          </div>
          <div className="dashboard-card">
            <h3>Grades</h3>
            <p>Your average GPA is 9.23.</p>
          </div>
          <div className="dashboard-card">
            <h3>Upcoming Events</h3>
            <p>You have two upcoming events this week.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
