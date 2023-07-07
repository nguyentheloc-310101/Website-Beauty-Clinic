'use client';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';

import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import CardCampusDetails from './CardCampusDetails';
import CardCampusHover from './CardCampusHover';
import CardCampus from './CardCampus';
import { dataCampus } from '@/data/sliders/campusSlider';

interface CampusItem {
  key: number;
  name: string;
  address_hover: string;
  address: string;
  image: StaticImageData;
  time: string;
  map: StaticImageData;
}

const AuraCampus = () => {
  const scrollLeft = () => {
    const content = document.getElementById('content') as HTMLElement;
    if (content) {
      content.scrollTo({
        left: content.scrollLeft - 300,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    const content = document.getElementById('content') as HTMLElement;
    if (content) {
      content.scrollTo({
        left: content.scrollLeft + 300,
        behavior: 'smooth',
      });
    }
  };
  return (
    <div>
      <div className="flex items-center justify-between px-[130px]">
        <div className="flex font-[800] text-[49px] leading-[140%] text-[#bc2449] ">
          Bạn có hẹn cùng Aura
        </div>
        <div className="flex items-center text-[#BF264B] text-[38px] font-[300] gap-[40px]">
          <button
            className="cursor-pointer"
            onClick={scrollLeft}>
            <AiFillCaretLeft />
          </button>
          Xem thêm
          <button
            className="cursor-pointer"
            onClick={scrollRight}>
            <AiFillCaretRight />
          </button>
        </div>
      </div>
      <div
        id="content"
        className="flex items-center overflow-x-auto hide-scrollbar px-[130px] gap-[50px] mt-[40px] mb-2">
        {dataCampus.map((item: CampusItem) => {
          return (
            <CardCampus
              key={item.key}
              item={item}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AuraCampus;
