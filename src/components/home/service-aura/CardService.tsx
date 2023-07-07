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
      className="md:w-[300px] md:h-[410px] w-[150px] h-[206px]"
    />
  );
};

export default CardService;
