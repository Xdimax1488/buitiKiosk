import React, { useState } from 'react';

import { MdEast, MdWest } from 'react-icons/md';
import { NewBaner, SeleBaner } from '../';

import './Slider.scss';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 1 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 1 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="slider">
      <div className="container" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        <SeleBaner />

        <NewBaner />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <MdWest />
        </div>
        <div className="icon" onClick={nextSlide}>
          <MdEast />
        </div>
      </div>
    </div>
  );
};

export default Slider;
