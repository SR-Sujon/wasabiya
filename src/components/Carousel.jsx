import React, { useState, useEffect } from 'react';
import '../styles/Carousel.css'; 

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeAutoNext = 7000;

  const items = [
    {
      img: './assets/images/carousel/nozawa_ski_zipline.png',
      author: 'NOZAWA',
      title: 'DISCOVER',
      topic: 'SNOWY PARADISE',
      description:
        '',
    },
    {
      img: './assets/images/carousel/nozawa_ski_optimized.png',
      author: 'NOZAWA',
      title: 'SKI INTO BLISS',
      topic: 'SNOWY ADVENTURE AWAITS',
      description:
        '',
    },
    {
      img: './assets/images/carousel/nozawa_onsen_1_optimized.png',
      author: 'NOZAWA',
      title: 'REST IN THE',
      topic: 'HOT ONSEN',
      description:
        '',
    },
    {
      img: './assets/images/carousel/nozawa-onsen-ski-2.jpg',
      author: 'NOZAWA',
      title: 'NEED GEARS FOR SKIING?',
      topic: 'JUST VISIT OUR SKI RENTAL SHOPS',
      description:
        '',
    },
  ];

  const showNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const showPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  useEffect(() => {
    const autoSlide = setTimeout(showNext, timeAutoNext);
    return () => clearTimeout(autoSlide);
  }, [currentIndex]);


  return (
    <div className="carousel">
      <div className="list">
        {items.map((item, index) => (
          <div
            key={index}
            className={`item ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={item.img} alt={`Slide ${index}`} />
            <div className="content">
              <div className="author">{item.author}</div>
              <div className="title">{item.title}</div>
              <div className="topic">{item.topic}</div>
              <div className="des">{item.description}</div>
              <div className="buttons">
                <button>EXPLORE</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Thumbnails */}
      <div className="thumbnail">
        {items.map((item, index) => (
          <div
            key={index}
            className={`item ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          >
            <img src={item.img} alt={`Thumbnail ${index}`} />
            <div className="content">
              <div className="title"></div>
              <div className="description"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="arrows">
        <button id="prev" onClick={showPrev}>
          &lt;
        </button>
        <button id="next" onClick={showNext}>
          &gt;
        </button>
      </div>

      {/* Time Running Indicator */}
      <div className="time"></div>
    </div>
  );
};

export default Carousel;
