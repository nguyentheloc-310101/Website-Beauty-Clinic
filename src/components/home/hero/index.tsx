/* eslint-disable @next/next/no-img-element */
'use-client';
import { useState } from 'react';
import CardServiceAdvisory from '../card-service-advisory/CardServiceAdvisory';
import VoucherButton from './VoucherButton';

const HeroSection = () => {
  // console.log(heroImg);
  const [isAdviseCard, setIsAdviceCard] = useState<boolean>(false);
  return (
    <div className="relative w-full">
      <div>
        <div className="w-full">
          <img
            src={
              'https://ucarecdn.com/0671beec-521d-4966-ada9-e564afcadfbb/-/quality/lightest/-/format/webp/'
            }
            alt="cover-img"
            className="w-full h-full"
            style={{ objectFit: 'cover', width: '100%' }}
          />
        </div>
        <div className="relative flex z-50 items-center top-[-60px] justify-center">
          <div className="relative">
            <img
              src="https://ucarecdn.com/70990fde-ce92-4480-81b8-b7b2c4134eb4/-/preview/1536x393/-/quality/lightest/-/format/webp/"
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
        <CardServiceAdvisory setIsAdviceCard={setIsAdviceCard} />
      )}
    </div>
  );
};

export default HeroSection;
