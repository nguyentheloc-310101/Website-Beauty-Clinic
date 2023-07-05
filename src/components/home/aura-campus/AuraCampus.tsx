'use client';
import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import dongThap from '../../../statics/images/campus/dongthap.png';
import caMau from '../../../statics/images/campus/camau.png';
import kienGiang from '../../../statics/images/campus/kiengiang.png';

import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import CardCampusHover from './CardCampusHover';
import dataCampus from '@/data/sliders/campusSlider';

interface CampusItem {
  key: number;
  name: string;
  address_hover: string;
  address: string;
  image: StaticImageData;
  time: string;
}

const AuraCampus: React.FC = () => {
  const [hoveredCards, setHoveredCards] = useState<boolean[]>([]);

  const handleMouseEnter = (index: number) => {
    setHoveredCards((prevHoveredCards) => {
      const updatedHoveredCards = [...prevHoveredCards];
      updatedHoveredCards[index] = true;
      return updatedHoveredCards;
    });
  };

  const handleMouseLeave = (index: number) => {
    setHoveredCards((prevHoveredCards) => {
      const updatedHoveredCards = [...prevHoveredCards];
      updatedHoveredCards[index] = false;
      return updatedHoveredCards;
    });
  };

  return (
    <div>
      {/* Rest of your code */}
      <div className="flex items-center justify-between px-[130px]">
        <div className="flex font-[800] text-[49px] leading-[140%] text-[#bc2449] ">
          Bạn có hẹn cùng Aura
        </div>
        <div className="flex items-center text-[#BF264B] text-[38px] font-[300] gap-[40px]">
          {' '}
          <AiFillCaretLeft />
          Xem thêm
          <AiFillCaretRight />
        </div>
      </div>
      <div className="flex items-center px-[130px] gap-[40px] mt-[40px]">
        {dataCampus.map((item: CampusItem, index: number) => {
          return (
            <div
              key={item.key}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}>
              {hoveredCards[index] ? (
                <CardCampusHover
                  name={item.name}
                  address={item.address_hover}
                  image={item.image}
                  time={item.time}
                />
              ) : (
                <div className="w-[380px] h-[542px] rounded-[40px] overflow-hidden shadow-lg text-[#bf264b] bg-white ">
                  <Image
                    src={item.image}
                    alt="cover-img"
                    className="scale-10  h-[380px] rounded-t-[40px]"
                    style={{ objectFit: 'cover' }}
                    width={380}
                    height={380}
                  />
                  <div className="px-6 py-4">
                    <div className="mb-2 font-[800] leading-[140%] text-[25px] ">
                      {item.name}
                    </div>
                    <p className="text-base text-[#36383A]">{item.address}</p>
                    <span className="w-[] h-[]"></span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AuraCampus;
