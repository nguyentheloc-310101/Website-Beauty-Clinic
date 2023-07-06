import React from 'react';
import Image from 'next/image';
import text5stars from '../../../statics/images/campus-scope/text-5star.png';
import ribbon from '../../../statics/images/campus-scope/ribbon.png';
import leftIcon from '../../../statics/images/campus-scope/left-icon.png';

import big from '../../../statics/images/campus-scope/big.png';
import modern from '../../../statics/images/campus-scope/mordern.png';
import profession from '../../../statics/images/campus-scope/profession.png';
import heartMap from '../../../statics/images/campus-scope/heart_map.png';

const SeeMoreAboutAura = () => {
  return (
    <div className="see-more-container ">
      <div className="hidden mt-[120px] mb-[33px] z-50">
        <Image
          src={text5stars}
          alt={'text-customer'}
          className="w-[845px] h-auto"
        />
      </div>
      <div className="w-[233px] h-[64px] mr-[65px] my-[50px]">
        <div className="text-center text-[26px] text-[#bf264b] uppercase leading-[115%] font-[800]">
          Thẩm mỹ viện quốc tế 5 sao
        </div>
      </div>
      <div className="card-scope">
        <div className="flex overflow-x-auto gap-[37px] mb-[10px]">
          <Image
            src={big}
            alt={'text-customer'}
            className="md:w-auto md:h-[450px] w-[265px] h-[398px]"
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
        <div className="flex">
          <div>
            <Image
              src={heartMap}
              alt={'text-customer'}
              className="w-auto h-[35px] cursor-pointer"
            />
          </div>
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF264B] to-[#DF4B6E] text-[26px] font-[800] uppercase">
            Aura gần bạn
          </div>

          <div>
            {' '}
            <Image
              src={heartMap}
              alt={'text-customer'}
              className="w-auto h-[35px] cursor-pointer"
            />
          </div>
        </div>
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
