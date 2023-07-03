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
      <div className=" relative flex z-50 items-center top-[-60px] justify-center">
        <Image
          src={heroBox}
          alt={'hero-box'}
          className=" w-[688px] h-[155px] scale-10"
        />
      </div>
      <div className="relative flex justify-center top-[-180px] mr-[10px]">
        <div className="flex w-[652px]  z-50 justify-center gap-[60px]">
          <div className="text-[#BF264B] font-[400] text-[26px] w-[416px] text-right">
            Hơn <span className="font-[700]">300.000</span> diện mạo đã được
            nâng tầm khi đến với <span className="font-[700]">Aura</span>
          </div>
          <div className="mr-[10px]">
            <button>
              <Image
                src={heroButton}
                alt={'hero-box'}
                className=" w-[150px] h-[87px] scale-10"
              />
            </button>
            <div className="relative font-[900] w-[140px] text-center text-[20px] text-white flex top-[-85px] ml-[23px]">
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
