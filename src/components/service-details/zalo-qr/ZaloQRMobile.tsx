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
      <div className="absolute bottom-0 z-50 mb-[20px] flex gap-[20px]">
        <div className="bg-white rounded-[16px] w-[172px] h-[156px] flex flex-col items-center justify-center">
          <img
            src="https://ucarecdn.com/6a874539-7817-48b6-833d-76664308b445/-/preview/469x216/-/quality/smart/-/format/auto/"
            alt="doctor"
            className="w-[80px] h-[80px]"
          />
          <div className="text-[10px] mt-[16px] text-center font-[400] leading-[14px] text-[#36383A]">
            Truy cập <span className="font-[600]">Aura ID</span> <br /> trên
            Zalo ngay hôm nay!
          </div>
        </div>
        <div className="bg-white rounded-[16px] w-[172px] h-[156px] flex flex-col items-center justify-center">
          <img
            src="https://ucarecdn.com/19186b1e-2285-401b-89b0-491cedf542fe/-/preview/469x216/-/quality/smart/-/format/auto/"
            alt="doctor"
            className="w-[80px] h-[80px]"
          />
          <div className="text-[10px] mt-[16px] text-center font-[400] leading-[14px] text-[#36383A]">
            Hoặc quét <br /> <span className="font-[600]">QR code</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZaloQRMobile;
