import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface CardServiceProps {
  image: StaticImageData;
  alt: string;
}

const CardService = (props: CardServiceProps) => {
  const { image, alt } = props;
  return (
    <Image
      src={image}
      alt={alt}
      className="sm:w-[300px] sm:h-[410px] w-[150px] h-[206px]"
    />
  );
};

export default CardService;
