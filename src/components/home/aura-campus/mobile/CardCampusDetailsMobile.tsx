import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface CampusDetailsMobile {
  image: StaticImageData;
  name: string;
  address: string;
  time: string;
}
const CardCampusDetailsMobile = (props: CampusDetailsMobile) => {
  const { image, name, time, address } = props;
  return (
    <div className="flex justify-center">
      <div className="rounded-[20px] text-white">
        <Image
          src={image}
          alt="cover-img"
          className="h-[288px] w-[361px] rounded-t-[20px]"
          style={{ objectFit: 'cover' }}
        />
        <div className="px-[16px] mt-2 w-full">
          <div className="mb-2 font-[800] leading-[140%] text-[16px] ">
            {name}
          </div>
          <p className="text-neutral-ng-0 text-white font-[400] leading-[140%] text-[13px]">
            {address}
          </p>
          <p className="text-neutral-ng-0 text-white font-[400] leading-[140%] text-[13px] mt-[12px]">
            {time}
          </p>
        </div>
        <div className="flex w-full h-[55px] justify-between px-[16px] mt-[12px]">
          <div className="w-[128px] h-[34px] px-[16px] py-[8px] bg-[#fff] hover:bg-[#F9F9F1] rounded-[8px] border-[#BC2449]">
            <p className="text-[#BF264B] h-full font-[600] text-center flex items-center justify-center text-[12px]">
              Đặt dịch vụ
            </p>
          </div>
          <div className="w-[128px] h-[36px] hover:w-[129px] hover:h-[37px] rounded-[8px] cursor-pointer bg-[#BC2449] hover:bg-[#fff] text-[#fff]  hover:text-[#BC2449] ml-[30px]">
            <p className="h-full font-[600] text-center flex items-center justify-center text-[12px]">
              Gọi ngay
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCampusDetailsMobile;
