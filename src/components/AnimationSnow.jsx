import React from 'react';
import snowfallGif from '../assets/gif/Snowfalling.gif'; // Adjust the path as needed
import '../styles/snow.css';
const AnimationSnow = () => {
  return (
    <div className='gif-container'>
      <img src={snowfallGif} alt="Snowfall GIF" />
    </div>
  );
};

export default AnimationSnow;
