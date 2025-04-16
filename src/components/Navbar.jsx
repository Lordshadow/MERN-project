// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="PC Store Logo" className="logo-img" />
        </Link>
        <div className="search-bar">
          <input type="text" placeholder="Search for products..." />
          <button className="search-button">
            <i className="fas fa-search"></i>
          </button>
        </div>
        <ul className="navbar-links">
          <li><Link to="/account">Account</Link></li>
          <li><Link to="/order">Orders</Link></li>
        </ul>
      </div>

      <div className="navbar-bottom">
        <ul className="main-nav-links">
          <li><Link to="/categories">BROWSE CATEGORIES</Link></li>
          <li><Link to="/laptop">Laptop</Link></li>
          <li><Link to="/prebuiltpc">Prebuilt PC</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;