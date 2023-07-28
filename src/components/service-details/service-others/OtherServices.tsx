'use client';
import { gradientText } from '@/constants/gradentText';
import React, { useState } from 'react';
import CardOtherService from './cards-services-horizontal/CardOtherService';
import { otherServiceData } from '@/data/other-services/OtherServiceData';

//TODO: use map() -> optimize
const OtherServices = () => {
  return (
    <div>
      <div
        className={`lg:text-[35px] font-[800] leading-[52px] tracking-[0.25px] mb-[20px] ${gradientText}`}>
        Dịch vụ khác tại Thẩm mỹ Aura
      </div>
      <div className="cursor-pointer">
        {otherServiceData.map((item) => {
          return (
            <>
              <div key={item.key}>
                <CardOtherService
                  image={item.image}
                  desc={item.desc}
                  service_name={item.name}
                />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default OtherServices;
