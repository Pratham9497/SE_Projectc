// src/components/Navbar.js
import React from 'react';
import './Navbar.css';
import nitp_logo from './assets/nitp_logo.png'

function Navbar({page, setPage}) {
  return (
    <div className="navbar">
      <div className="logo" style={{marginTop: "0px", marginBottom: "0px"}}><img src={nitp_logo} alt="" /></div>
      <ul className="nav-links">
        <li onClick={()=>setPage('home')}>Home</li>
        <li onClick={()=>setPage('dashboard')}>Dashboard</li>
        <li onClick={()=>setPage('course')}>Course Material</li>
        <li onClick={()=>setPage('acrecords')}>Academic Records</li>
        <li onClick={()=>setPage('profile')}>Profile</li>
        <li onClick={()=>setPage('feedback')}>Feedback</li>
        <li onClick={()=>setPage('logout')}>Logout</li>
      </ul>
    </div>
  );
}

export default Navbar;
