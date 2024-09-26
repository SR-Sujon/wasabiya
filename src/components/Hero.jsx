import React, { useState, useEffect } from "react";
import "../styles/style.css";

const Hero = () => {
  const [formData, setFormData] = useState({
    accommodationType: "",
    location: "",
    pricePerNight: "",
    guests: "",
    checkInDate: "",
    checkOutDate: "",
  });

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Image data
  const images = [
    {
      src: "./assets/images/views/Nozawa-Onsen-Village-Spring.jpeg",
      alt: "Nozawa 1",
    },
    {
      src: "./assets/images/views/nozawa_ice2.jpeg",
      alt: "Nozawa 2",
    },
    {
      src: "./assets/images/views/nozawa_town_ice.jpg",
      alt: "Nozawa 3",
    },
    {
      src: "./assets/images/views/nozawa_ice_birds_view.jpeg",
      alt: "Nozawa 4",
    },
    {
      src: "./assets/images/views/nozawa_onsen.jpeg",
      alt: "Nozawa 5",
    },
    {
      src: "./assets/images/views/nozawa_onsen1.png",
      alt: "Nozawa 6",
    },
    {
      src: "./assets/images/views/nozawa_onsen_2.jpeg",
      alt: "Nozawa 7",
    },
    {
      src: "./assets/images/views/NOZ.jpg",
      alt: "Nozawa 8",
    },
    {
      src: "./assets/images/views/nozawa_gondola.jpeg",
      alt: "Nozawa 9",
    },
    // Add more images here
  ];

  // Function to go to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Auto-play the slideshow
  useEffect(() => {
    // eslint-disable-next-line
    const intervalId = setInterval(nextImage, 3000); // Change image every 3 seconds
    return () => clearInterval(intervalId); // Clear the interval on component unmount
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <main>
      <article>
        <section className="section hero" id="home">
          <div className="container">
            <div className="hero-content">
              <h2 className="h1 hero-title">
                Discover Nature's Heartbeat in Nagano
              </h2>
              <h3 className="hero-text">
                Stay in the heart of Nozawa Onsen and Hakuba Village!
              </h3>
            </div>

            <div className="hero-banner">
              <div className="slider-container">
                <div
                  className="slider"
                  style={{
                    transform: `translateX(${currentImageIndex * -100}%)`,
                  }}
                >
                  {images.map((image, index) => (
                    <img key={index} src={image.src} alt={image.alt} />
                  ))}
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="hero-form">
              {/* Accommodation Type */}
              <div className="input-wrapper">
                <label htmlFor="accommodation-type" className="input-label">
                  Accommodation Type
                </label>
                <select
                  name="accommodationType"
                  id="accommodation-type"
                  className="input-field"
                  value={formData.accommodationType}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select accommodation type
                  </option>
                  <option value="hotel">Hotel</option>
                  <option value="hostel">Hostel</option>
                  <option value="guesthouse">Guest House</option>
                  <option value="ryokan">Ryokan (Traditional Inn)</option>
                </select>
              </div>

              {/* Location Dropdown */}
              <div className="input-wrapper">
                <label htmlFor="location" className="input-label">
                  Location
                </label>
                <select
                  name="location"
                  id="location"
                  className="input-field"
                  value={formData.location}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select location
                  </option>
                  <option value="hakuba">Hakuba</option>
                  <option value="nozawa-onsen">Nozawa Onsen</option>
                </select>
              </div>

              {/* Price Range */}
              <div className="input-wrapper">
                <label htmlFor="price-per-night" className="input-label">
                  Max. Price Per Night ($)
                </label>
                <input
                  type="number"
                  name="pricePerNight"
                  id="price-per-night"
                  className="input-field"
                  placeholder="Add a maximum price"
                  value={formData.pricePerNight}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Number of Guests */}
              <div className="input-wrapper">
                <label htmlFor="guests" className="input-label">
                  Number of Guests
                </label>
                <select
                  name="guests"
                  id="guests"
                  className="input-field"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select number of guests
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5+">5+</option>
                </select>
              </div>

              {/* Check-in Date */}
              <div className="input-wrapper">
                <label htmlFor="check-in-date" className="input-label">
                  Check-in Date
                </label>
                <input
                  type="date"
                  name="checkInDate"
                  id="check-in-date"
                  className="input-field"
                  value={formData.checkInDate}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Check-out Date */}
              <div className="input-wrapper">
                <label htmlFor="check-out-date" className="input-label">
                  Check-out Date
                </label>
                <input
                  type="date"
                  name="checkOutDate"
                  id="check-out-date"
                  className="input-field"
                  value={formData.checkOutDate}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Search Button */}
              <button type="submit" className="btn">
                Search
              </button>
            </form>
          </div>
        </section>
      </article>
    </main>
  );
};

export default Hero;
