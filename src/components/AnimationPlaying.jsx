import React from 'react';
import kidsplayGif from '../assets/gif/Kids_playing_with_snow.gif'; // Adjust the path as needed
import '../styles/kidsplay.css';
const AnimationSnowBoard = () => {
  return (
    <div className='gif-container-kp'>
      <img src={kidsplayGif} alt="Kidsplay GIF" />
    </div>
  );
};

export default AnimationSnowBoard;
