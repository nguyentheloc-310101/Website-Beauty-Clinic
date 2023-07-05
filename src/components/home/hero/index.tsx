import React from 'react';
import Image from 'next/image';
import heroCover from '../../../statics/images/hero/hero-image.png';
import heroBox from '../../../statics/images/hero/bg-box.png';
import heroButton from '../../../statics/images/hero/buttonVoucher.png';

const HeroSection = () => {
  return (
    <>
      <div>
        <Image
          src={heroCover}
          alt="cover-img"
          className="scale-10"
          style={{ objectFit: 'cover' }}
        />
      </div>
      {/* <div className="h-auto"> */}
      <div className="relative flex z-50 items-center top-[-60px] justify-center">
        <Image
          src={heroBox}
          alt={'hero-box'}
          className="sm:w-[688px] sm:h-[155px] w-[318px] h-[78px]"
        />
      </div>
      <div className="relative flex justify-center top-[-180px] sm:mr-[10px]">
        <div className="flex sm:w-[652px] z-50 justify-center gap-[60px] ">
          {/* <div className="text-[#BF264B] font-[400] sm:text-[26px] w-[416px] text-right text-[12px]">
            Hơn <span className="font-[700]">300.000</span> diện mạo đã được
            nâng tầm khi đến với <span className="font-[700]">Aura</span>
          </div> */}
          <div className="sm:mr-[10px] cursor-pointer">
            <button>
              <Image
                src={heroButton}
                alt={'hero-box'}
                className="sm:w-[150px] sm:h-[87px]  w-[76px] "
              />
            </button>
            <div className="relative text-[13px] w-[76px] h-[44px] cursor-pointer font-[900] sm:w-[140px] text-center sm:text-[20px] text-white flex sm:top-[-85px] sm:ml-[23px]">
              ƯU ĐÃI <br /> MỚI NHẤT
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default HeroSection;
