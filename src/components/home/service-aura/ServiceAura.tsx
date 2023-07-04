'use client';
import React, { useRef, useState } from 'react';
import CardService from './CardService';

import service1 from '../../../statics/images/aura-service/img-service/img1.png';
import service2 from '../../../statics/images/aura-service/img-service/img2.png';
import service3 from '../../../statics/images/aura-service/img-service/img3.png';
import service4 from '../../../statics/images/aura-service/img-service/img4.png';
import service5 from '../../../statics/images/aura-service/img-service/img5.png';
import service6 from '../../../statics/images/aura-service/img-service/img6.png';
import service7 from '../../../statics/images/aura-service/img-service/img7.png';
const SliderService = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsMouseDown(true);
    setStartX(e.pageX - sliderRef.current!.offsetLeft);
    setScrollLeft(sliderRef.current!.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current!.offsetLeft;
    const walk = (x - startX) * 2; // Adjust the sliding speed here
    sliderRef.current!.scrollLeft = scrollLeft - walk;
  };
  return (
    <div
      className="flex w-full gap-[60px] overflow-x-auto hide-scrollbar"
      ref={sliderRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}>
      <CardService
        image={service1}
        alt={'no'}
      />
      <CardService
        image={service2}
        alt={'no'}
      />
      <CardService
        image={service3}
        alt={'no'}
      />
      <CardService
        image={service4}
        alt={'no'}
      />
      <CardService
        image={service5}
        alt={'no'}
      />
      <CardService
        image={service6}
        alt={'no'}
      />
      <CardService
        image={service7}
        alt={'no'}
      />
    </div>
  );
};

export default SliderService;
