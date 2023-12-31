'use client';
import serviceSlideData from '@/data/sliders/serviceSlider';
import React, { useRef, useState } from 'react';
import CardService from './CardService';
import { IHomeService } from '@/interfaces/home/IHome';
import { useGeneralHomeContext } from '@/app/home/page';
const SliderService = () => {
  const { generalData, setGeneralData } = useGeneralHomeContext();
  const serviceList: IHomeService[] = generalData?.data?.services;
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
      className="flex lg:h-full lg:py-[37px] md:px-[24px] md:flex-row md:items-center md:w-full items-center md:gap-[60px] overflow-x-auto md:scrollbar-hide"
      ref={sliderRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}>
      {serviceList &&
        serviceList?.map((item, key) => {
          return (
            <CardService
              key={key}
              image={item.image}
              name={item.name}
              tagline={item.tagline}
            />
          );
        })}
    </div>
  );
};

export default SliderService;
