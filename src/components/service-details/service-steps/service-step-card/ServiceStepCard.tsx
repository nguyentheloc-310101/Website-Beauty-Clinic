/* eslint-disable @next/next/no-img-element */
import React from 'react';
interface ServiceStepCardProps {
  step: number;
  image: any;
  desc: string;
}

const ServiceStepCard = (props: ServiceStepCardProps) => {
  const { step, image, desc } = props;
  return (
    <div className="p-[16px] rounded-[16px] w-[235px] h-[268px] lg:p-[20px] lg:w-[280px] lg:h-auto bg-white/100 border border-solid lg:rounded-[20px] z-50">
      <div>
        <img
          src={image}
          alt="step-img"
          className="lg:w-[240px] lg:h-[218px] w-[203px] h-[134px] object-cover"
        />
      </div>
      <div className="mt-[16px] lg:mt-[17px]">
        <div className="text-[10px] leading-[14px] lg:text-[16px] text-[#36383A] font-[300] lg:leading-[24px] lg:tracking-[0.08px]">
          <span className="font-[600]">Bước {step}: </span>
          {desc}
        </div>
      </div>
    </div>
  );
};

export default ServiceStepCard;
