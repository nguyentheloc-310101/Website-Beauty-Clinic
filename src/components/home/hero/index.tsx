'use-client';
import React, { useState } from 'react';
import Image from 'next/image';
import heroCover from '../../../statics/images/hero/hero-image.png';
import heroBox from '../../../statics/images/hero/bg-box.png';
import heroButton from '../../../statics/images/hero/buttonVoucher.png';
import VoucherButton from './VoucherButton';
import CardServiceAdvisory from '../card-service-advisory/CardServiceAdvisory';

const HeroSection = () => {
  const [isAdviseCard, setIsAdviceCard] = useState<boolean>(false);
  return (
    <div className="relative">
      <div>
        <div>
          <Image
            src={heroCover}
            alt="cover-img"
            className="scale-10"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="relative flex z-50 items-center top-[-60px] justify-center">
          <div className="relative">
            <Image
              src={heroBox}
              alt={'hero-box'}
              className="md:w-auto md:h-[155px] w-auto h-[78px]"
            />
            <div className="absolute top-[18px] right-[18px] h-[78px] md:top-[37px] md:h-[155px] md:right-[30px] ">
              <VoucherButton
                isAdviseCard={isAdviseCard}
                setIsAdviceCard={setIsAdviceCard}
              />
            </div>
          </div>
        </div>
        <button>CLick</button>
      </div>
      {isAdviseCard && (
        <CardServiceAdvisory
          isAdviseCard={isAdviseCard}
          setIsAdviceCard={setIsAdviceCard}
        />
      )}
    </div>
  );
};

export default HeroSection;
