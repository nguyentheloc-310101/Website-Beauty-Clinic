/* eslint-disable @next/next/no-img-element */
import { gradientText } from '@/constants/gradentText';
import React from 'react';

const ZaloQR = () => {
  return (
    <div className="lg:ml-[130px] grid grid-cols-2">
      <div>
        <div className="p-[40px] bg-white/100 rounded-[40px] border w-[547px] h-fit">
          <div
            className={`w-[470px] h-auto lg:text-[35px] font-[800] leading-[52px] tracking-[0.25px] ${gradientText}`}>
            Tìm hiểu thêm về <br /> Thẩm mỹ viện Aura?
          </div>
          <div className="flex justify-between mt-[40px]">
            <div className="lg:text-[24px] font-[400] leading-[36px] text-[#36383A]">
              Truy cập <span className="font-[800]">Aura ID</span> <br /> trên
              Zalo ngay hôm nay!
            </div>
            <div>
              <img
                src="https://ucarecdn.com/4ad33566-6235-47cd-b85a-5fdfe5cb9eb9/-/preview/220x220/-/quality/smart/-/format/auto/"
                alt=""
                className=" h-[72px] w-[72px]"
              />
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="mt-[40px] px-[40px]">
            <img
              src="https://ucarecdn.com/09555e4c-fd2b-4cc6-a011-4b4edf0ff08b/-/preview/586x270/-/quality/smart/-/format/auto/"
              alt="qr-image"
              className="w-[216px] h-[216px]"
            />
          </div>
          <div className="flex  items-end lg:text-[24px] font-[400] leading-[36px] text-[#36383A]">
            <div>
              Hoặc quét <br />
              <span className="font-[700]"> QR code</span>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-[10vw]">
        <img
          src="https://ucarecdn.com/0294df52-9e76-4465-9663-8e7128b6107e/-/quality/smart/-/format/auto/"
          alt="doctor-image"
          className="w-[649px] h-auto"
        />
      </div>
    </div>
  );
};

export default ZaloQR;
