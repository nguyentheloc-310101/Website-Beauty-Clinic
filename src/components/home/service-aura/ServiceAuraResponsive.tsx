'use client';
import React, { useRef, useState } from 'react';
import CardService from './CardService';
import serviceSlideData from '@/data/sliders/serviceSlider';
const SliderServiceResponsive = () => {
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
    const walk = (x - startX) * 2;
    sliderRef.current!.scrollLeft = scrollLeft - walk;
  };
  return (
    <div className="flex flex-wrap items-center justify-center gap-[15px]">
      {serviceSlideData.slice(0, 4).map((item) => {
        return (
          <CardService
            key={item.key}
            image={item.image}
            alt={item.alt}
          />
        );
      })}
    </div>
  );
};

export default SliderServiceResponsive;
