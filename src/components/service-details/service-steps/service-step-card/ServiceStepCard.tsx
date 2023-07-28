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
    <div className="p-[20px] w-[280px] lg:h-auto bg-white/100 border border-solid rounded-[20px] z-50">
      <div>
        <img
          src={image}
          alt="step-img"
          className="w-[240px] h-[218px] object-contain"
        />
      </div>
      <div className="mt-[16px]">
        <div>
          <span className="font-[600]">Bước {step}: </span>
          {desc}
        </div>
      </div>
    </div>
  );
};

export default ServiceStepCard;
