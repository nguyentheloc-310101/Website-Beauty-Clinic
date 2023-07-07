import React from 'react';
import Image from 'next/image';
import text5stars from '../../../statics/images/campus-scope/text-5star.png';
import ribbon from '../../../statics/images/campus-scope/ribbon.png';
import leftIcon from '../../../statics/images/campus-scope/left-icon.png';

import big from '../../../statics/images/campus-scope/big.png';
import modern from '../../../statics/images/campus-scope/mordern.png';
import profession from '../../../statics/images/campus-scope/profession.jpg';
import heartMap from '../../../statics/images/campus-scope/heart_map.png';

import CardCampusResponsive from '../aura-campus/CardCampusResponsive';
import { CardCustomer } from '../customer-said/CardCustomer';
import { dataCampus, dataCampusNearBy } from '@/data/sliders/campusSlider';

const SeeMoreAboutAura = () => {
  return (
    <div className="relative flex flex-col items-center justify-center md:mt-[100px]">
      <div className="lg:mt-[120px] lg:mb-[33px] z-50">
        <Image
          src={text5stars}
          alt={'text-customer'}
          className="hidden lg:flex lg:w-[845px] lg:h-auto "
        />
      </div>
      <div className="lg:hidden w-[233px] h-[64px] my-[50px]">
        <div className="text-center text-[26px] text-[#bf264b] uppercase leading-[115%] font-[800]">
          Thẩm mỹ viện quốc tế 5 sao
        </div>
      </div>
      <div className="flex flex-col items-center z-10">
        <div className="flex overflow-x-scroll gap-[37px] mb-[10px]">
          <Image
            src={big}
            alt={'text-customer'}
            className="lg:w-auto lg:h-[450px] w-[265px] h-[398px]"
          />

          <Image
            src={modern}
            alt={'text-customer'}
            className="md:w-auto md:h-[450px] w-[265px] h-[398px]"
          />

          <Image
            src={profession}
            alt={'text-customer'}
            className="md:w-auto md:h-[450px] w-[265px] h-[398px]"
          />
        </div>
        <div className="hidden text-[#BF264B] text-[30px] font-[300] md:flex items-center">
          Tìm hiểu thêm về Aura
          <Image
            src={leftIcon}
            alt={'text-customer'}
            className="w-auto h-[18px] ml-[24px] cursor-pointer"
          />
        </div>
      </div>
      <div className="lg:hidden flex flex-col mt-[10px]">
        <div className="flex items-center justify-center gap-[9px]">
          <div>
            <Image
              src={heartMap}
              alt={'text-customer'}
              className="w-auto h-[30px] ml-[24px] cursor-pointer"
            />
          </div>
          <div className="text-transparent text-[26px] font-[800] uppercase bg-clip-text bg-gradient-to-r from-[#BF264B] to-[#DF4B6E]">
            Aura Gần bạn
          </div>
          <div>
            <Image
              src={heartMap}
              alt={'text-customer'}
              className="w-auto h-[30px] ml-[24px] cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="md:hidden px-6 flex mt-[40px] w-full items-end gap-[25px] lg:gap-[60px] z-100 overflow-x-auto hide-scrollbar">
        {dataCampusNearBy.map((item: any) => {
          return (
            <CardCampusResponsive
              key={item.key}
              place={item.name_short}
              address={item.address_hover}
              time={item.time}
            />
          );
        })}
      </div>

      <div className="ribbon-scope">
        <Image
          src={ribbon}
          alt={'text-customer'}
          className="hidden lg:w-full lg:h-[541px] ms:object-contain"
        />
      </div>
    </div>
  );
};

export default SeeMoreAboutAura;
