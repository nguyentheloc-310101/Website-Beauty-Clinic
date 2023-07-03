import React from 'react';
import HeroSection from './hero';
import SliderImage from './slider-image';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <HeroSection />
      <SliderImage />
      <div>Actor-quote section </div>
      <div>Customer + newspaper section </div>
      <div>Aura Campus</div>
      <div>Booking form</div>
    </div>
  );
};

export default HomePage;
