import { IHomeService } from '@/interfaces/home/IHome';

/* eslint-disable @next/next/no-img-element */

const CardService = (props: IHomeService) => {
  const { image, name, tagline } = props;
  return (
    <div className="relative h-fit rounded-[40px] overflow-hidden border-4 border-[#BF264B]">
      <img
        src={image}
        alt={'service-img'}
        className="md:w-[280px] md:h-[410px] w-[150px] h-[206px] object-cover"
      />
      <div className="linear-yellow-text lg:text-[60px] absolute -rotate-[20deg] lg:bottom-[60px] lg:right-[22px]">
        Exosome
      </div>
      <div className="linear-yellow-text -rotate-[20deg] absolute lg:bottom-[40px] lg:right-[10px] z-50 lg:text-[20px] text-[12px] font-[700] lg:leading-[28px] lg:tracking-[-0.25px]">
        Sach nam sang da
      </div>
    </div>
  );
};

export default CardService;
