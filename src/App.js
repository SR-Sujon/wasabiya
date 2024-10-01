// src/App.js
import React, { useState } from 'react';
import './styles/style.css'; // Import your global CSS here
import Header from './components/Header.jsx'; // Import the Header component
import Hero from './components/Hero.jsx'; // Import the Hero component
import FeaturesAcm from './components/FeaturedAcm.jsx'; // Import the FeaturedAcm component
import PreviewAcm from './components/PreviewAcm.jsx'; // Import the PreviewAcm component
import Footer from './components/Footer.jsx';
import BlogsAcm from './components/BlogsAcm.jsx';
import Login from './components/Login.jsx';
import Carousel from './components/Carousel.jsx';
import FeaturedSkiRental from './components/FeatureSkiRental.jsx';
import PreviewSki from './components/PreviewSki.jsx';

const App = () => {
    const [showLogin, setShowLogin] = useState(false); // State to track login button click

    const handleLoginClick = () => {
        setShowLogin(true);
    };

    const handleNavClick = () => {
        setShowLogin(false); // Hide Login component when a nav link is clicked
    };

    return (
        <div>
            <Header onLoginClick={handleLoginClick} onNavClick={handleNavClick} /> {/* Pass the function as a prop */}
            {showLogin ? (
                <>
                    <Login /> {/* Show Login component only when login button is clicked */}
                    <Footer />
                </>
            ) : (
                <>
                    <Carousel/>
                    <Hero />
                    <FeaturesAcm />
                    <PreviewAcm />
                    <FeaturedSkiRental/>
                    <PreviewSki/>
                    <BlogsAcm />
                    <Footer />
                </>
            )}
        </div>
    );
};

export default App;
