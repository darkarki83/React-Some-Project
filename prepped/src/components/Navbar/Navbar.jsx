import React from "react";
import ReactDOM from "react-dom";
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          MySite {/* Your site name or logo here */}
        </a>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="/" className="navbar-links">
              Home
            </a>
          </li>
          <li className="navbar-item">
            <a href="/about" className="navbar-links">
              About
            </a>
          </li>
          <li className="navbar-item">
            <a href="/services" className="navbar-links">
              Services
            </a>
          </li>
          <li className="navbar-item">
            <a href="/contact" className="navbar-links">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
