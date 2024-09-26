// src/App.js
import React from 'react';
import './styles/style.css'; // Import your global CSS here
import Header from './components/Header.jsx'; // Import the Header component
import Hero from './components/Hero.jsx'; // Import the Hero component
import FeaturesAcm from './components/FeaturedAcm.jsx' // Import the FeaturedAcm component
import PreviewAcm from './components/PreviewAcm.jsx' // Import the FeaturedAcm component
import Footer from './components/Footer.jsx';
import BlogsAcm from './components/BlogsAcm.jsx';

const App = () => {
    return (
        <div>
            <Header />
            {/* Add other components here */}
            <Hero/>
            <FeaturesAcm/>
            <PreviewAcm/>
            <BlogsAcm/>
            <Footer/>
        </div>
    );
};

export default App;
