import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface CardHoverProps {
  name: string;
  address: string;
  image: StaticImageData;
  time: string;
}

const CardCampusHover = ({ name, address, image, time }: CardHoverProps) => {
  return (
    <div>
      <div className="w-[380px] h-[542px] rounded-[40px] shadow-lg p-[6px] bg-gradient-to-r from-[#BF264B] to-[#DF4B6E] text-white">
        <Image
          src={image}
          alt="cover-img"
          className="scale-10 h-[288px] w-[380px] rounded-t-[40px]"
          style={{ objectFit: 'cover' }}
        />
        <div className="px-6 py-4 w-full">
          <div className="mb-2 font-[800] leading-[140%] text-[25px] ">
            {name}
          </div>
          <p className="text-neutral-ng-0 text-white font-[400] leading-[140%] text-[16px]">
            {address}
          </p>
          <p className="text-neutral-ng-0 text-white font-[400] leading-[140%] text-[16px] mt-[12px]">
            {time}
          </p>
        </div>
        <div className="flex w-full h-[50px] justify-between px-[30px]">
          <div className="w-[128px] h-[36px] hover:w-[129px] hover:h-[37px] bg-[#fff] rounded-[8px] cursor-pointer border-[#BC2449]">
            <p className="text-[#BF264B] h-full font-[600] text-center flex items-center justify-center">
              Đặt dịch vụ
            </p>
          </div>
          <div className="w-[128px] h-[36px] hover:w-[129px] hover:h-[37px] rounded-[8px] cursor-pointer bg-[#BC2449] ml-[30px]">
            <p className="text-[#fff]  h-full font-[600] text-center flex items-center justify-center">
              Gọi ngay
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCampusHover;
