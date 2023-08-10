/* eslint-disable @next/next/no-img-element */
const big =
  'https://ucarecdn.com/5a13183f-7f66-4d9e-b08b-c75ebcb55198/-/preview/500x700/-/quality/lightest/-/format/webp/';
const ribbon =
  'https://ucarecdn.com/205392a3-8131-4e98-857c-c42de0638347/-/quality/lightest/-/format/webp/';
const modern =
  'https://ucarecdn.com/7f029865-8b70-4cf8-89f9-98772420bda9/-/preview/500x700/-/quality/lightest/-/format/webp/';
const leftIcon =
  'https://ucarecdn.com/862e2b7b-bebd-44fb-8ff9-0034d1b3a88b/-/preview/500x700/-/quality/lightest/-/format/webp/';
const text5stars =
  'https://ucarecdn.com/d96567d8-ff54-408d-9f57-c393c661bb09/-/preview/850x1000/-/quality/lightest/-/format/webp/';
const profession =
  'https://ucarecdn.com/3e624024-4900-4527-9049-f907f1fe246f/-/preview/500x700/-/quality/lightest/-/format/webp/';

const SeeMoreAboutAura = () => {
  return (
    <div className="relative flex flex-col items-center justify-center md:mt-[100px]">
      <div className="lg:mt-[50px] lg:mb-[100px] z-50">
        <div className="text-[56px] text-[#BC2449] font-[900] uppercase leading-[64px]">
          <span className="ml-[350px]"> Aura - Thẩm mỹ viện</span>

          <br />
          <span className="text-[130px] normal-case font-service-card font-[400] leading-[148px]">
            Quốc tế 5 sao
          </span>
        </div>
      </div>
      <div className="lg:hidden w-[233px] h-[64px] my-[50px]">
        <div className="text-center  text-[26px] text-[#BC2449] uppercase leading-[115%] font-[800]">
          Thẩm mỹ viện quốc tế 5 sao
        </div>
      </div>
      <div className="flex flex-col items-center z-10">
        <div className="flex overflow-x-scroll gap-[37px] mb-[20px] scrollbar-hide">
          <img
            src={big}
            alt={'text-customer'}
            className="lg:w-auto lg:h-[450px] w-[265px] h-[398px] z-50"
          />

          <img
            src={modern}
            alt={'text-customer'}
            className="md:w-auto md:h-[450px] w-[265px] h-[398px]"
          />

          <img
            src={profession}
            alt={'text-customer'}
            className="md:w-auto md:h-[450px] w-[265px] h-[398px]"
          />
        </div>
      </div>
      <div className="lg:flex lg:absolute lg:z-0 lg:h-[541px] lg:w-[100%] lg:bottom-[40px] hidden">
        <img
          src={ribbon}
          alt={'text-customer'}
          className="lg:flex lg:w-full lg:h-[541px] ms:object-contain"
        />
      </div>
    </div>
  );
};

export default SeeMoreAboutAura;
