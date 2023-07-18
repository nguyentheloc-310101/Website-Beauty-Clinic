'use-client';
import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import heroCover from '../../../statics/images/hero/hero-image.png';
import heroBox from '../../../statics/images/hero/bg-box.png';
import heroButton from '../../../statics/images/hero/buttonVoucher.png';
import VoucherButton from './VoucherButton';
import CardServiceAdvisory from '../card-service-advisory/CardServiceAdvisory';
import axios from 'axios';
type Repo = {
  heroImg: StaticImageData;
};
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
              'https://ucarecdn.com/2e8759c5-78dd-41f2-acc0-1b8e2ea32cdf/-/preview/-/format/webp/-/quality/smart/-/progressive/yes/'
            }
            alt="cover-img"
            className="w-full h-full"
            style={{ objectFit: 'cover', width: '100%' }}
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

export async function getStaticProps() {
  const image = await axios.get(
    'https://ucarecdn.com/2e8759c5-78dd-41f2-acc0-1b8e2ea32cdf/-/preview/-/format/webp/-/quality/smart/-/progressive/yes/'
  );
  const imageBuffer = await image?.buffer();
  console.log(imageBuffer);
  console.log(imageBuffer.toString('base64'));
  return {
    props: {
      image: {
        src: imageBuffer.toString('base64'),
      },
    },
  };
}
