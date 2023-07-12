'use client';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';

import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';

import CardCampus from './CardCampus';
import { ListImageDetails, dataCampus } from '@/data/sliders/campusSlider';

interface CampusItem {
  key: number;
  name: string;
  address_hover: string;
  address: string;
  image: StaticImageData;
  time: string;
  map: StaticImageData;
  image_list: ListImageDetails[];
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
      <div className="flex items-center justify-center uppercase lg:justify-between lg:px-[130px]">
        <div className="flex items-center text-[26px] font-[800] lg:text-[49px] lg:leading-[140%] text-[#bc2449] ">
          Bạn có hẹn cùng Aura
        </div>
        <div className="hidden lg:flex  text-[#BF264B] text-[38px] font-[300] gap-[40px]">
          <button
            className="cursor-pointer z-50"
            onClick={scrollLeft}>
            <AiFillCaretLeft />
          </button>
          Xem thêm
          <button
            className="cursor-pointer z-50"
            onClick={scrollRight}>
            <AiFillCaretRight />
          </button>
        </div>
      </div>
      <div
        id="content"
        className="flex items-center overflow-x-auto hide-scrollbar gap-[16px] px-[16px] mt-[32px] lg:px-[130px] lg:gap-[50px] lg:mt-[40px]">
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
export type { CampusItem };
