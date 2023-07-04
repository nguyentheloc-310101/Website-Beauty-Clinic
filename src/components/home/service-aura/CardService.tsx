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
      width={300}
      height={410}
    />
  );
};

export default CardService;
