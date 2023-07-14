import Image from 'next/image';
import big from '../../../statics/images/campus-scope/big.png';
import ribbon from '../../../statics/images/campus-scope/ribbon.png';
import modern from '../../../statics/images/campus-scope/mordern.png';
import leftIcon from '../../../statics/images/campus-scope/left-icon.png';
import text5stars from '../../../statics/images/campus-scope/text-5star.png';
import profession from '../../../statics/images/campus-scope/profession.png';

const SeeMoreAboutAura = () => {
  return (
    <div className="relative flex flex-col items-center justify-center md:mt-[100px]">
      <div className="lg:mt-[50px] lg:mb-[33px] z-50">
        <Image
          src={text5stars}
          alt={'text-customer'}
          className="hidden lg:flex lg:w-[845px] lg:h-auto "
        />
      </div>
      <div className="lg:hidden w-[233px] h-[64px] my-[50px]">
        <div className="text-center text-[26px] text-[#bf264b] uppercase leading-[115%] font-[800]">
          Thẩm mỹ viện quốc tế 5 sao
        </div>
      </div>
      <div className="flex flex-col items-center z-10">
        <div className="flex overflow-x-scroll gap-[37px] mb-[20px] scrollbar-hide">
          <Image
            src={big}
            alt={'text-customer'}
            className="lg:w-auto lg:h-[450px] w-[265px] h-[398px] z-50"
          />

          <Image
            src={modern}
            alt={'text-customer'}
            className="md:w-auto md:h-[450px] w-[265px] h-[398px]"
          />

          <Image
            src={profession}
            alt={'text-customer'}
            className="md:w-auto md:h-[450px] w-[265px] h-[398px]"
          />
        </div>
        <div className="hidden text-[#BF264B] text-[30px] font-[300] md:flex items-center">
          Tìm hiểu thêm về Aura
          <Image
            src={leftIcon}
            alt={'text-customer'}
            className="w-auto h-[18px] ml-[24px] cursor-pointer z-50"
          />
        </div>
      </div>

      <div className="lg:flex lg:absolute lg:z-0 lg:h-[541px] lg:w-[100%] lg:bottom-[40px] hidden">
        <Image
          src={ribbon}
          alt={'text-customer'}
          className="lg:flex lg:w-full lg:h-[541px] ms:object-contain"
        />
      </div>
    </div>
  );
};

export default SeeMoreAboutAura;
