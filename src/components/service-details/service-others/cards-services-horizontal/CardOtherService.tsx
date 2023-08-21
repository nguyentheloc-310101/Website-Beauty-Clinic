/* eslint-disable @next/next/no-img-element */
import { gradientText } from '@/constants/gradentText';
import React, { useState } from 'react';
import CardOtherServiceHover from '../cards-services-hover/CardOtherServiceHover';

interface CardOtherServiceProps {
  service_name: string;
  image: any;
  desc: string;
}

const CardOtherService = (props: CardOtherServiceProps) => {
  const { image, desc, service_name } = props;
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      {isHovered ? (
        <CardOtherServiceHover
          service_name={service_name}
          image={image}
          desc={desc}
        />
      ) : (
        <div
          className={` rounded-[40px] gap-[40px] lg:p-[36px] w-full h-auto border flex my-[20px] bg-white/100 `}>
          <div className="w-[240px] ">
            <img
              src={image}
              alt="service-img"
              className="w-[240px] h-[218px] object-cover"
            />
          </div>
          <div className="w-full h-auto">
            <div
              className={`${gradientText} text-[24px] font-[800] leading-[36px] mb-[18px]`}>
              {service_name}
            </div>
            <div className="my-[18px] text-[16px] text-[#36383A] font-[400] leading-[24px] tracking-[0.5px]">
              {desc}
            </div>
            <div>
              <div className="text-[16px] w-fit cursor-pointer font-[300] leading-[24px] text-[#BC2449] hover:text-[#bc244ac1]">
                Xem thêm
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardOtherService;
