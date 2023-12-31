/* eslint-disable @next/next/no-img-element */
import { gradientText } from '@/constants/gradentText';
import React from 'react';

interface CardOtherServiceProps {
  service_name: string;
  image: any;
  desc: string;
}

const CardOtherServiceHover = (props: CardOtherServiceProps) => {
  const { image, desc, service_name } = props;
  return (
    <div
      className={` rounded-[40px] gap-[40px] lg:p-[36px] w-full h-auto border flex my-[20px] border-[#BC2449] bg-[#FFF6F8]`}>
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
        <div className="my-[18px] text-[16px]font-[400] leading-[24px] tracking-[0.5px]">
          {desc}
        </div>
        <div>
          <div className="text-[16px] text-[#BC2449] w-fit cursor-pointer font-[300] leading-[24px] ">
            Xem thêm
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardOtherServiceHover;
