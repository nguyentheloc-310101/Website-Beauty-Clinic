/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import CardCategory, { CardCategoryProps } from './CardCategory';
import { gradientText } from '@/constants/gradentText';

const initCategory = {
  image:
    'https://ucarecdn.com/48afb975-ecf8-4017-a230-3eb5eb49ad1b/-/quality/smart/-/format/auto/',
  category: 'Phun xăm mày',
  price: 899900,
  activeDetail: false,
};
const repeatedObjects = Array.from({ length: 8 }, () => initCategory);

const ListCategory = () => {
  const [activeDetail, setActiveDetail] = useState<boolean>(false);
  const [indexSelected, setIndexSelected] = useState<number>();
  const handleCLick = (index: number) => {
    setIndexSelected(index);
    setActiveDetail((prev) => !prev);
  };
  return (
    <div className="lg:my-[40px] lg:flex lg:flex-wrap lg:gap-[40px]">
      {repeatedObjects.map((item, index) => {
        return (
          <div
            className="flex"
            key={index}
            onClick={() => {
              handleCLick(index);
            }}>
            <div
              className={`${
                activeDetail && indexSelected == index
                  ? 'bg-[#BC2449]'
                  : 'bg-[#fff] hover:border-[#BC2449]'
              } lg:w-[366px]  lg:p-[20px] rounded-[20px] border `}>
              <img
                src={item.image}
                alt=""
                className="w-full lg:h-[327px] object-cover rounded-[20px]"
              />
              <div className="lg:px-[20px] lg:pt-[20px]">
                <div
                  className={` ${
                    activeDetail && indexSelected == index
                      ? `text-white`
                      : `${gradientText}`
                  } lg:text-[24px] font-[800] lg:leading-[36px]`}>
                  {item.category}
                </div>
                <div
                  className={`flex flex-col lg:mt-[16px] ${
                    activeDetail && indexSelected == index
                      ? 'text-white'
                      : 'text-[#36383A]'
                  }`}>
                  <div className="lg:text-[16px] lg:leading-[24px] font-[300] lg:tracking-[0.5px]">
                    Giá chỉ từ
                  </div>
                  <div className="lg:text-[24px] lg:leading-[36px] font-[600]">
                    {item.price}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListCategory;
