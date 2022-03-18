import React from 'react';
import { NavLink } from 'react-router-dom';
import './assets/Navbar.css';

const NavBar = () => (
  <nav className="nav-container">
    <div className="nav-logo">
      <div className="logo" />
      <h1>Space Travelers Hub</h1>
    </div>
    <ul className="nav-list">
      <li><NavLink to="/">Rockets</NavLink></li>
      <li><NavLink to="/missions">Missions</NavLink></li>
      <div className="vl" />
      <li><NavLink to="/profile">My Profile</NavLink></li>
    </ul>
  </nav>
);

export default NavBar;
