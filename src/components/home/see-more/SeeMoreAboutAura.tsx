import { IAuraInfos } from '@/interfaces/home/IHome';
import Item from 'antd/es/list/Item';

/* eslint-disable @next/next/no-img-element */

const ribbon =
  'https://ucarecdn.com/205392a3-8131-4e98-857c-c42de0638347/-/quality/lightest/-/format/webp/';

interface AuraScopeProps {
  auraInfos: IAuraInfos[];
}
const SeeMoreAboutAura = (props: AuraScopeProps) => {
  const { auraInfos } = props;
  return (
    <div className="relative flex flex-col items-center justify-center md:mt-[100px]">
      <div className="lg:mt-[50px] lg:mb-[100px] z-50">
        <div className="hidden text-[56px] text-[#BC2449] font-[900] uppercase leading-[64px]">
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
          {/* {auraInfos &&
            auraInfos.map((info, index) => {
              return (
                <div
                  key={index}
                  className="flex-shrink-0  rounded-[160px] w-[265px] h-[398px] overflow-hidden relative lg:w-[319px] lg:h-[450px] border-[6px] border-[#BC2449] bg-[white]">
                  <img
                    src={info.image}
                    alt=""
                    className="w-full h-full object-fit z-10"
                  />
                  <div className="w-full linear-white h-[25vh] absolute bottom-0"></div>
                  <div className="absolute-bottom-center text-[#BC2449] lg:text-[36px] lg:leading-[42px] uppercase text-center">
                    <div className="font-[800]">{info.mainText}</div>
                    <div className="font-[600]">{info.subText}</div>
                  </div>
                </div>
              );
            })} */}
          <div className="flex-shrink-0  rounded-[160px] w-[265px] h-[398px] overflow-hidden relative lg:w-[319px] lg:h-[450px] border-[6px] border-[#BC2449] bg-[white]">
            <img
              src={
                'https://ucarecdn.com/b3e71052-7c5b-4725-8913-bfa817b3f3e8/-/quality/smart/-/format/auto/'
              }
              alt=""
              className="w-full h-full object-fit z-10"
            />
            <div className="w-full linear-white h-[25vh] absolute bottom-0"></div>
            <div className="absolute-bottom-center text-[#BC2449] lg:text-[36px] lg:leading-[42px] uppercase text-center">
              <div className="font-[800]">quy mô</div>
              <div className="font-[600]">lớn</div>
            </div>
          </div>
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
