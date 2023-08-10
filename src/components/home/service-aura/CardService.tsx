import { IHomeService } from '@/interfaces/home/IHome';

/* eslint-disable @next/next/no-img-element */

const CardService = (props: IHomeService) => {
  const { image, name, tagline } = props;
  return (
    <div className="lg:flex-shrink-0 lg relative lg:rounded-[40px] ">
      <div className="linear-bg-service-card absolute z-[100] w-full h-full top-0 opacity-50 rounded-[40px]"></div>
      <img
        src={image}
        alt={'service-img'}
        className="relative md:w-[280px] md:h-[410px] w-[150px] h-[206px] object-cover rounded-[40px]  border-4 border-[#BF264B]"
      />
      <div className="flex flex-col lg:pr-[20px] justify-end pb-[30px] w-full lg:h-[500px] absolute z-[100] lg:bottom-0 ">
        <div className="font-service-card w-full h-[115px] linear-yellow-text text-right z-[100] -rotate-[10deg] lg:text-[62px]">
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
