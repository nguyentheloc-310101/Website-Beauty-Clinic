/* eslint-disable @next/next/no-img-element */
'use-client';
import { useState } from 'react';
import CardServiceAdvisory from '../card-service-advisory/CardServiceAdvisory';
import VoucherButton from './VoucherButton';

const HeroSection = (props: any) => {
  const { heroImg } = props;
  // console.log(heroImg);
  const [isAdviseCard, setIsAdviceCard] = useState<boolean>(false);
  return (
    <div className="relative">
      <div>
        <div>
          <img
            src={
              'https://ucarecdn.com/2e8759c5-78dd-41f2-acc0-1b8e2ea32cdf/-/preview/-/format/webp/-/quality/normal/-/progressive/yes/'
            }
            alt="cover-img"
            className="w-full h-full"
            style={{ objectFit: 'cover', width: '100%' }}
          />
        </div>
        <div className="relative flex z-50 items-center top-[-60px] justify-center">
          <div className="relative">
            <img
              src="https://ucarecdn.com/70990fde-ce92-4480-81b8-b7b2c4134eb4/-/preview/-/quality/lightest/-/format/webp/"
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
