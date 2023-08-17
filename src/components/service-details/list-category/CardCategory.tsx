/* eslint-disable @next/next/no-img-element */
'use client';
import { gradientText } from '@/constants/gradentText';
import { IServiceDetails } from '@/interfaces/service/service';
import React, { useState } from 'react';
type CardCategoryProps = {
  image: string;
  name: string;
  price: number;
  onDetail: boolean;
};

const CardCategory = (props: CardCategoryProps) => {
  const { image, name, price, onDetail } = props;

  return (
    <div
      className={`${
        onDetail ? 'bg-[#BC2449]' : 'bg-[#fff] hover:border-[#BC2449]'
      } lg:w-[366px]  lg:p-[20px] rounded-[20px] border `}>
      <img
        src={image}
        alt=""
        className="w-full lg:h-[327px] object-cover rounded-[20px]"
      />
      <div className="lg:px-[20px] lg:pt-[20px]">
        <div
          className={` ${
            onDetail ? `text-white` : `${gradientText}`
          } lg:text-[24px] font-[800] lg:leading-[36px]`}>
          {name}
        </div>
        <div
          className={`flex flex-col lg:mt-[16px] ${
            onDetail ? 'text-white' : 'text-[#36383A]'
          }`}>
          <div className="lg:text-[16px] lg:leading-[24px] font-[300] lg:tracking-[0.5px]">
            Giá chỉ từ
          </div>
          <div className={`lg:text-[24px] lg:leading-[36px] font-[600]`}>
            {price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCategory;
export type { CardCategoryProps };
