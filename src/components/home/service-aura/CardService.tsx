/* eslint-disable @next/next/no-img-element */

interface CardServiceProps {
  image: string;
  alt: string;
}

const CardService = (props: CardServiceProps) => {
  const { image, alt } = props;
  return (
    <img
      src={image}
      alt={alt}
      className="md:w-[300px] md:h-[410px] w-[150px] h-[206px]"
    />
  );
};

export default CardService;
