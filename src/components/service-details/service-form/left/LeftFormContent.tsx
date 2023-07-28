import React from 'react';
import LogoSvg from '../../../../../public/images/svg/LogoSvg';

const LeftFormContent = () => {
  return (
    <div className="flex justify-center z-50">
      <div className="grid grid-rows-3">
        <div className="relative flex w-full items-center justify-center">
          <LogoSvg />
        </div>
        <div>
          <div className="text-center lg:mt-[20px] text-white text-[24px] font-[600] leading-[36px]">
            Đăng ký nhận
          </div>
          <div className="text-center text-white text-[35px] font-[700] leading-[51px] uppercase">
            tư vấn miễn phí
          </div>
        </div>

        <div className="flex w-full items-center justify-center">
          <button className="bg-gradient-to-r lg:py-[12px] lg:px-[24px] lg:w-[244px] lg:h-[44px] rounded-[8px] from-[#FFF2DE] to-[#FFF] text-[#BC2449] text-[16px] font-[600] leading-[20px] tracking-[0.25px] flex items-center justify-center">
            Gửi thông tin
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftFormContent;
