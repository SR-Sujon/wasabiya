import React, { useState, useEffect } from "react";
import "../styles/style.css";

const FeaturedAcm = () => {
  // Mapping of amenities to specific font-awesome icon classes
  const amenityIcons = {
    "Air Conditioning": "fa-solid fa-wind",
    "Free Wifi": "fa-solid fa-wifi",
    "Flat-screen TV": "fa-solid fa-tv",
    "Free Parking": "fa-solid fa-parking",
    "Breakfast Included": "fa-solid fa-utensils",
  };

  const accommodations = [
    {
      imgSrc: "./assets/images/accommodation/hotels/minshuku_kojima.jpeg",
      title: "Minshuku Kojima",
      location: "Nozawa Onsen",
      guests: "2 Guests",
      amenities: ["Air Conditioning", "Free Wifi", "Flat-screen TV"],
      price: 130,
      reviews: 123,
    },
    {
      imgSrc:
        "./assets/images/accommodation/hotels/nozawa_guesthouse_miyaza.jpg",
      title: "Nozawaonsen Wafu",
      location: "Nozawa Onsen",
      guests: "2-3 Guests",
      amenities: ["Air Conditioning", "Free Parking", "Flat-screen TV"],
      price: 140,
      reviews: 105,
    },
  ];

  return (
    <section className="section featured-car" id="featured-car">
      <div className="container">
        <div className="title-wrapper">
          <h2 className="h2 section-title">Featured Accommodation</h2>
          <a href="#" className="featured-car-link">
            <span>View more</span>
          </a>
        </div>

        <ul className="featured-acc-list">
          {accommodations.map((acc, index) => (
            <li key={index}>
              <div className="featured-acc-card">
                <figure className="card-banner">
                  <img
                    src={acc.imgSrc}
                    alt={acc.title}
                    loading="lazy"
                    width="440"
                    height="300"
                    className="w-100"
                  />
                </figure>

                <div className="card-content">
                  <div className="card-title-wrapper">
                    <h3 className="h3 card-title">
                      <a href="#">{acc.title}</a>
                    </h3>
                    <data className="acc-title">{acc.location}</data>
                  </div>

                  <ul className="card-list">
                    <li className="card-list-item">
                      <i className="fa-solid fa-user-group card-icon-color"></i>
                      <span className="card-item-text">{acc.guests}</span>
                    </li>
                    {acc.amenities.map((amenity, idx) => (
                      <li className="card-list-item" key={idx}>
                        <i className={`${amenityIcons[amenity] || 'fa-solid fa-bolt'} card-icon-color`}></i>
                        <span className="card-item-text">{amenity}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="card-price-wrapper">
                    <p>Starting from</p>
                    <p className="card-price">
                      <strong>${acc.price}</strong> / night
                    </p>
                    <button className="btn">Book now</button>
                    <br />
                  </div>
                  <div className="card-review-wrapper">
                    <div className="card-review">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star-half-stroke"></i>
                      <i className="fa-regular fa-star"></i>
                      <span className="card-review-count">
                        ({acc.reviews} reviews)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FeaturedAcm;
