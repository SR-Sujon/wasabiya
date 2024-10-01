// src/components/Header.jsx
import React from 'react';
import "../styles/style.css"; // Adjust the path if necessary

const Header = ({ onLoginClick, onNavClick }) => { // Receive the prop

  const handleProfileClick = (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    onLoginClick(); // Trigger the login click function
  };

  const handleNavLinkClick = () => {
    onNavClick(); // Trigger the nav click function
  };

  return (
    <header className="header" data-header>
      <div className="container">
        <div className="overlay" data-overlay></div>

        <a href="https://wasabiya.co.jp/" className="logo">
          <img
            src="/assets/images/icons/logo.png" // Adjusted path for React
            className="logo-icon"
            alt="Wasabiya logo"
          />
        </a>

        <nav className="navbar" data-navbar>
          <ul className="navbar-list">
            <li>
              <a href="#home" className="navbar-link" data-nav-link onClick={handleNavLinkClick}>
                Home
              </a>
            </li>
            <li>
              <a href="https://wasabiya.co.jp/" className="navbar-link" data-nav-link onClick={handleNavLinkClick}>
                Our Facilities
              </a>
            </li>
            <li>
              <a
                href="#featured-accommodation"
                className="navbar-link"
                data-nav-link onClick={handleNavLinkClick}
              >
                Accommodation
              </a>
            </li>
            <li>
              <a href="#featured-ski" className="navbar-link" data-nav-link onClick={handleNavLinkClick}>
                Ski Rentals
              </a>
            </li>
            <li>
              <a href="#blog" className="navbar-link" data-nav-link onClick={handleNavLinkClick}>
                Blog
              </a>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <div className="header-contact">
            <a href="tel:88002345678" className="contact-link">
              0267-46-8132
            </a>
            <span className="contact-time">
              10:00-18:00 * Excluding weekends and holidays
            </span>
          </div>

          <a href="#home" className="btn" aria-labelledby="aria-label-txt">
            <ion-icon name="car-outline"></ion-icon>
            <span id="aria-label-txt">Book Now!</span>
          </a>

          <a href="#home" className="btn user-btn" aria-label="Profile" onClick={handleProfileClick}>
            <i className="fa-solid fa-user"></i>
          </a> {/* Update the Profile button */}
        </div>
      </div>
    </header>
  );
};

export default Header;
