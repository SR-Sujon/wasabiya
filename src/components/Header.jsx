// src/components/Header.js
import React from "react";
import "../styles/style.css"; // Adjust the path if necessary

const Header = () => {
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
              <a href="#home" className="navbar-link" data-nav-link>
                Home
              </a>
            </li>
            <li>
              <a href="#featured-car" className="navbar-link" data-nav-link>
                Ski Rentals
              </a>
            </li>
            <li>
              <a href="#accommodation" className="navbar-link" data-nav-link>
                Accommodation
              </a>
            </li>
            <li>
              <a
                href="https://wasabiya.co.jp/"
                className="navbar-link"
                data-nav-link
              >
                About Us
              </a>
            </li>
            <li>
              <a href="#blog" className="navbar-link" data-nav-link>
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

          <a
            href="#featured-car"
            className="btn"
            aria-labelledby="aria-label-txt"
          >
            <ion-icon name="car-outline"></ion-icon>
            <span id="aria-label-txt">Book Now!</span>
          </a>

          <a href="#" className="btn user-btn" aria-label="Profile">
            <i class="fa-solid fa-user"></i>
          </a>

          <button
            className="nav-toggle-btn"
            data-nav-toggle-btn
            aria-label="Toggle Menu"
          >
            <span className="one"></span>
            <span className="two"></span>
            <span className="three"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
