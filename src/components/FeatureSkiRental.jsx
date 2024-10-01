import React, { useState, useEffect } from "react";
import "../styles/style.css";

const FeaturedSkiRental = () => {
  // Mapping of ski equipment to specific font-awesome icon classes
  const equipmentIcons = {
    "Ski Rental": "fa-solid fa-skiing",
    "Snowboard Rental": "fa-solid fa-snowboarding",
    "Boot Rental": "fa-solid fa-shoe-prints",
    "Helmet Rental": "fa-solid fa-hard-hat",
    "Ski Poles": "fa-solid fa-hiking",
    "Goggles": "fa-solid fa-glasses",
    "Expresso": "fa-solid fa-mug-saucer",
  };

  const skiShops = [
    {
      imgSrc: "./assets/images/ski_shops/nozawa-ski-rental-and-expresso-house-san-anton-0.jpg",
      title: "San Anton Ski Rental",
      location: "Nozawa Onsen",
      equipment: ["Ski Rental", "Boot Rental", "Goggles", "Expresso"],
      price: 18,
      reviews: 150,
    },
    {
      imgSrc: "./assets/images/ski_shops/nozawa-ski-rental-7-kanamori-sports.jpg",
      title: "Kanamori Sports",
      location: "Nozawa Onsen",
      equipment: ["Snowboard Rental", "Helmet Rental", "Ski Poles", "Googles"],
      price: 15,
      reviews: 120,
    },
    {
      imgSrc: "./assets/images/ski_shops/nozawa-ski-rental-5-olive-rentals.jpg",
      title: "Olive Rentals",
      location: "Nozawa Onsen",
      equipment: ["Ski Rental", "Helmet Rental", "Boot Rental","Ski Poles"],
      price: 20,
      reviews: 135,
    },
    {
      imgSrc: "./assets/images/ski_shops/nozawa-ski-rental-3-shirakaba-rentals.png",
      title: "Shirakaba Rentals",
      location: "Nozawa Onsen",
      equipment: ["Ski Rental", "Snowboard Rental", "Goggles", "Ski Poles"],
      price: 25,
      reviews: 110,
    },
    {
      imgSrc: "./assets/images/ski_shops/nozawa-ski-rental-2-sports-thanks.jpg",
      title: "Sports Thanks",
      location: "Nozawa Onsen",
      equipment: ["Ski Rental", "Boot Rental", "Ski Poles", "Googles"],
      price: 30,
      reviews: 140,
    },
    {
      imgSrc: "./assets/images/ski_shops/nozawa-ski-rental-8-mt-dock.jpg",
      title: "Mt'Dock",
      location: "Nozawa Onsen",
      equipment: ["Snowboard Rental", "Helmet Rental", "Goggles", "Ski Poles"],
      price: 35,
      reviews: 125,
    },
  ];

  return (
    <section className="section featured-card" id="featured-ski">
      <div className="container">
        <div className="title-wrapper">
          <h2 className="h2 section-title">Featured Ski Rental Shops</h2>
          {/**eslint-disable-next-line */}
          <a href="#" className="featured-card-link">
            <span>View more</span>
          </a>
        </div>

        <ul className="featured-acc-list">
          {skiShops.map((shop, index) => (
            <li key={index}>
              <div className="featured-acc-card">
                <figure className="card-banner">
                  <img
                    src={shop.imgSrc}
                    alt={shop.title}
                    loading="lazy"
                    width="440"
                    height="300"
                    className="w-100"
                  />
                </figure>

                <div className="card-content">
                  <div className="card-title-wrapper">
                    <h3 className="h3 card-title">
                      <a href="#">{shop.title}</a>
                    </h3>
                    <data className="acc-title">{shop.location}</data>
                  </div>

                  <ul className="card-list">
                    {shop.equipment.map((equipment, idx) => (
                      <li className="card-list-item" key={idx}>
                        <i
                          className={`${
                            equipmentIcons[equipment] || "fa-solid fa-snowflake"
                          } card-icon-color`}
                        ></i>
                        <span className="card-item-text">{equipment}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="card-price-wrapper">
                    <p>Starting from</p>
                    <p className="card-price">
                      <strong>${shop.price}</strong> / day
                    </p>
                    <button className="btn">Show Prices</button>
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
                        ({shop.reviews} reviews)
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

export default FeaturedSkiRental;
