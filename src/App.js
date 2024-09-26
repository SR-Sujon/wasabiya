// src/App.js
import React from 'react';
import './styles/style.css'; // Import your global CSS here
import Header from './components/Header.jsx'; // Import the Header component
import Hero from './components/Hero.jsx'; // Import the Hero component
import FeaturesAcm from './components/FeaturedAcm.jsx' // Import the FeaturedAcm component

const App = () => {
    return (
        <div>
            <Header />
            {/* Add other components here */}
            <Hero/>
            <FeaturesAcm/>
        </div>
    );
};

export default App;
