/* eslint-disable @next/next/no-img-element */
import { gradientText } from '@/constants/gradentText';
import React from 'react';

const ZaloQRMobile = () => {
  return (
    <div className="relative px-[16px] pt-[16px] h-[543px] w-full overflow-hidden">
      <div className="relative">
        <div
          className={`w-[178px] h-[48px] ${gradientText} text-[16px] font-[800] leading-[24px] tracking-[0.25px] absolute top-0`}>
          Tìm hiểu thêm về Thẩm mỹ viện Aura?
        </div>
        <img
          src="https://ucarecdn.com/0294df52-9e76-4465-9663-8e7128b6107e/-/quality/smart/-/format/auto/"
          alt="doctor"
          className="ml-[30px]"
        />
      </div>
      <div className="absolute z-50 mb-[20px] flex justify-between">
        <div className="bg-white rounded-[16px] w-[172px] h-[156px]">zalo</div>
        <div className="bg-white rounded-[16px] w-[172px] h-[156px] mr-[16px]">
          QR
        </div>
      </div>
    </div>
  );
};

export default ZaloQRMobile;
