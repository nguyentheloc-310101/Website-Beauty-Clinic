import React, { useState, useEffect } from 'react';
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
  const [hoveredCards, setHoveredCards] = useState(false);
  const [isDetails, setIsDetails] = useState(false);
  const [isDetailsMobile, setIsDetailsMobile] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize: any = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize(); // Call it initially

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const onDetails = () => {
    setIsDetails(!isDetails);
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      setHoveredCards(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setHoveredCards(false);
    }
  };

  return (
    <div>
      <div
        key={item.key}
        onClick={onDetails}
        className="cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        {hoveredCards ? (
          <CardCampusHover
            name={item.name}
            address={item.address_hover}
            image={item.image}
            time={item.time}
          />
        ) : (
          <div className="w-[237px] rounded-[20px] lg:w-[380px] lg:h-[542px] lg:rounded-[40px] shadow-lg text-[#bf264b] bg-white mb-2">
            <Image
              src={item.image}
              alt="cover-img"
              className="w-[237px] h-[237px] rounded-t-[20px] lg:h-[380px] lg:w-[380px] lg:rounded-t-[40px]"
              style={{ objectFit: 'cover' }}
            />
            <div className="px-[16px] py-[24px] lg:px-6 lg:py-4">
              <div className="mb-2 font-[800] leading-[140%] text-[16px] lg:text-[25px] ">
                {item.name}
              </div>
              <p className="text-base text-[#36383A]">{item.address}</p>
              <span className="w-[] h-[]"></span>
            </div>
          </div>
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
          isMobile={isMobile}
        />
      )}
    </div>
  );
};

export default CardCampus;
