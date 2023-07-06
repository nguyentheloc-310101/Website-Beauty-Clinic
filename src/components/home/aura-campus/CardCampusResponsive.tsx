import React from 'react';
import Image from 'next/image';
import leftMap from '../../../statics/images/campus-scope/left_map.png';

interface CardCampusResponsiveProps {
  place: string;
  address: string;
  time: string;
}

const CardCampusResponsive = (props: CardCampusResponsiveProps) => {
  const { place, address, time } = props;
  return (
    <div className="w-[535px] h-[160px] border-2 rounded-[10px] p-[10px] border-solid bg-white shadow-md ">
      <div className="flex flex-col items-start justify-start">
        <div className="text-[#5C5257] text-[20px] font-[500] leading-[35px]">
          {place}
        </div>
        <div className="text-[#5C5257] text-[16px] font-[300] w-[248px]">
          {address}
        </div>
      </div>
      <div className="flex w-[238px] justify-between ">
        <div className="text-[#D03635] text-[16px] font-[500]">{time}</div>
        <div className="flex items-center justify-center">
          <div className="text-[#4B87A6] text-[16px] font-[500]">Chỉ đường</div>
          <Image
            src={leftMap}
            alt={'text-customer'}
            className="w-[13px] h-[15px] ml-[4px] mb-[3px] cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default CardCampusResponsive;
