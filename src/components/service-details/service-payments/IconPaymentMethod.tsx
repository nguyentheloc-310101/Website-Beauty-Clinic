/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface IconPaymentMethodProps {
  icon: any;
  method: string;
}

const IconPaymentMethod = (props: IconPaymentMethodProps) => {
  const { icon, method } = props;
  return (
    <div className="flex flex-col">
      <div className="lg:p-[40px] w-fit rounded-[20px] p-[16px] bg-white">
        <div className="lg:w-[56px] lg:h-[56px] w-[24px] h-[24px]">
          <img
            src={icon}
            alt="icon-payment"
            className="w-full h-full  object-contain"
          />
        </div>
      </div>
      <div className="flex text-center w-[56px] text-[10px] leading-[14px] lg:w-fit items-center mt-[5px] justify-center lg:text-[16px] font-[600] lg:leading-[25px]">
        {method}
      </div>
    </div>
  );
};

export default IconPaymentMethod;
