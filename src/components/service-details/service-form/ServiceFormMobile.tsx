import React from 'react';
import FormInputContent from './right-form/FormInputContent';
import LogoSvg from '../../../../public/images/svg/LogoSvg';

const ServiceFormMobile = () => {
  return (
    <div className="linear-bg my-[64px] h-[576px] flex flex-col items-center justify-center rounded-[20px] mx-[16px]">
      <div className="z-50">
        <div className="text-center lg:mt-[20px] text-white text-[16px] font-[600] tracking-[0.25px] leading-[24px]">
          Đăng ký nhận
        </div>
        <div className="text-center text-white text-[24px] font-[800] leading-[36px] uppercase">
          tư vấn miễn phí
        </div>
      </div>
      <FormInputContent />
      <div className="relative flex w-full items-center justify-center">
        <LogoSvg />
      </div>
    </div>
  );
};

export default ServiceFormMobile;
