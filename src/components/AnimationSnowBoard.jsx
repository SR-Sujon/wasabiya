import React from 'react';
import snowfallGif from '../assets/gif/para_snowboard.gif'; // Adjust the path as needed
import '../styles/snowboard.css';
const AnimationSnowBoard = () => {
  return (
    <div className='gif-container-sb'>
      <img src={snowfallGif} alt="SnowBoard GIF" />
    </div>
  );
};

export default AnimationSnowBoard;
