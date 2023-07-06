import React from 'react';
import Image from 'next/image';
import heroCover from '../../../statics/images/hero/hero-image.png';
import heroBox from '../../../statics/images/hero/bg-box.png';
import heroButton from '../../../statics/images/hero/buttonVoucher.png';
import VoucherButton from './VoucherButton';

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
        <div className="relative">
          <Image
            src={heroBox}
            alt={'hero-box'}
            className="md:w-auto md:h-[155px] w-auto h-[78px]"
          />
          <div className="absolute top-[18px] right-[18px] h-[78px] md:top-[37px] md:h-[155px] md:right-[30px] ">
            <VoucherButton />
          </div>
        </div>
      </div>

      {/* </div> */}
    </>
  );
};

export default HeroSection;
