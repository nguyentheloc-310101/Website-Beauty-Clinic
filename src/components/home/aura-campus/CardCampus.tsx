'use client';
import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';

import CardCampusHover from './CardCampusHover';
import CardCampusDetails from './CardCampusDetails';
import { Modal } from 'antd';

interface CampusItem {
  key: number;
  name: string;
  address_hover: string;
  address: string;
  image: StaticImageData;
  time: string;
  map: StaticImageData;
}
interface CardCampusProps {
  item: CampusItem;
}

const CardCampus = (props: CardCampusProps) => {
  const { item } = props;
  const [hoveredCards, setHoveredCards] = useState<boolean>();
  const [isDetails, setIsDetails] = useState<boolean>();
  const onDetails = () => {
    setIsDetails(!isDetails);
  };

  const handleMouseEnter = () => {
    setHoveredCards(true);
  };

  const handleMouseLeave = () => {
    setHoveredCards(false);
  };
  return (
    <div>
      <div
        key={item.key}
        onClick={() => {
          onDetails();
        }}
        className="cursor-pointer"
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}>
        {hoveredCards ? (
          <>
            <CardCampusHover
              name={item.name}
              address={item.address_hover}
              image={item.image}
              time={item.time}
            />
          </>
        ) : (
          <>
            <div className="w-[380px] h-[542px] rounded-[40px]  shadow-lg text-[#bf264b] bg-white mb-2">
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
          </>
        )}
      </div>
      {isDetails && (
        <CardCampusDetails
          setIsDetails={setIsDetails}
          isDetails={isDetails}
          image={item.image}
          name={item.name}
          address={item.address_hover}
          time={item.time}
          map={item.map}
        />
      )}
    </div>
  );
};

export default CardCampus;
