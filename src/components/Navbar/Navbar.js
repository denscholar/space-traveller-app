import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const NavBar = () => (
  <nav className="nav-container">
    <ul className="nav-list">
      <li><NavLink to="/">Rockets</NavLink></li>
      <li><NavLink to="/missions">Missions</NavLink></li>
      <li><NavLink to="/profile">My Profile</NavLink></li>
    </ul>
  </nav>
);

export default NavBar;
