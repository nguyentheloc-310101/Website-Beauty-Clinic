import { IHomeService } from '@/interfaces/home/IHome';

/* eslint-disable @next/next/no-img-element */

const CardService = (props: IHomeService) => {
  const { image, name, tagline } = props;
  return (
    <div className="lg:flex-shrink-0 lg relative lg:rounded-[40px] ">
      <div className="absolute linear-bg-service-card z-[100] w-full h-[50%] bottom-0 rounded-[40px]"></div>
      <img
        src={image}
        alt={'service-img'}
        className="relative md:w-[280px] md:h-[410px] w-[150px] h-[206px] object-cover rounded-[40px]  border-4 border-[#BF264B]"
      />
      <div className="flex flex-col bottom-0 lg:pr-[20px] justify-end pb-[30px] w-full lg:h-[500px] absolute z-[100]">
        <div className="font-service-card w-full pr-[30px] lg:h-[115px] linear-yellow-text text-right z-[100] -rotate-[10deg] lg:text-[62px]">
          {name}
        </div>
        <div className="linear-yellow-text -rotate-[10deg] pr-[10px] text-right lg:text-[20px] text-[12px] font-[700] lg:leading-[28px] lg:tracking-[-0.25px]">
          {tagline}
        </div>
      </div>
    </div>
  );
};

export default CardService;
