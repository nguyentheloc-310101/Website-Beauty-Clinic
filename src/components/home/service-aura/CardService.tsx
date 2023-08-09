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

      <div className="linear-bg-service-card flex flex-col lg:pr-[20px] justify-end pb-[30px] w-full lg:h-[500px] absolute z-50 lg:bottom-0 ">
        <div className="font-service-card w-full h-fit linear-yellow-text text-right z-10 -rotate-[10deg] lg:text-[62px]">
          {name}
        </div>
        <div className="linear-yellow-text -rotate-[10deg] text-right lg:text-[20px] text-[12px] font-[700] lg:leading-[28px] lg:tracking-[-0.25px]">
          {tagline}
        </div>
      </div>
    </div>
  );
};

export default CardService;
