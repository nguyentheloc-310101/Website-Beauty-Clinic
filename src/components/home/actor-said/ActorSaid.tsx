/* eslint-disable @next/next/no-img-element */

import { useGeneralHomeContext } from '@/app/home/page';
import { ICelebFeedback } from '@/interfaces/home/IHome';

const ActorSaid = () => {
  const { generalData } = useGeneralHomeContext();
  const celebFeedback: ICelebFeedback = generalData?.data.celebFeedback;
  return (
    <div className="grid grid-cols-2 lg:gap-[24px] lg:px-[130px] sm:mt-[80px] lg:my-[100px] sm:h-fit">
      <div className="col-span-1 h-fit relative lg:flex justify-center items-center">
        <img
          src={celebFeedback?.image + '/-/quality/smart/-/format/webp/'}
          alt="actor-img"
          className="md:w-[555px] md:h-[891px]"
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute flex flex-col items-center justify-end bottom-5 lg:bottom-0 w-full text-left h-fit">
          <div className="text-[#4f4f4f] mt-[5px] italic sm:font-[300] text-[9px] uppercase ms:text-[12px] md:text-[18px] lg:font-[100] lg:text-[27px]">
            {celebFeedback?.job}
          </div>
          <div className="font-service-card lg:h-[260px] font-[600] italic sm:text-[21px] text-transparent bg-clip-text bg-gradient-to-r from-[#BF264B] to-[#DF4B6E] md:text-[30px] lg:font-[600] lg:text-[61px]">
            {celebFeedback?.name}
          </div>
        </div>
      </div>
      <div className="col-span-1 lg:ml-[2%] flex flex-col items-center">
        <div className="hidden lg:block lg:w-[600px] text-right uppercase lg:text-[56px] lg:font-[900] lg:leading-[64px] text-[#BC2449]">
          <div className="lg:mr-[60px]"> Aura là</div>
          <br />
          <div className="normal-case font-service-card lg:text-[140px] font-[400] lg:leading-[45px]">
            địa chỉ số 1
          </div>
          <br />
          <div className="lg:mr-[20px]">vì khách hàng</div>
        </div>
        <div className="lg:hidden text-right uppercase lg:text-[56px] lg:font-[900] lg:leading-[64px] text-[#BC2449]">
          <div className="lg:mr-[60px]"> Aura là</div>
          {'\n'}
          <div className="normal-case font-service-card lg:text-[140px] font-[400] lg:leading-[45px]">
            địa chỉ số 1
          </div>
          {'\n'}
          <div className="lg:mr-[20px]">vì khách hàng</div>
        </div>
        <div className="lg:ml-[30px] lg:h-auto text-left lg:mt-[80px]">
          <div className="text-[10px] font-[400] w-[150px] text-[#414141] md:w-[350px] md:text-[18px] lg:w-[508px] lg:h-auto lg:text-[22px] lg:font-[300]">
            {celebFeedback?.content}
          </div>
          <div className=" sm:font-[500] lg:py-[20px] text-transparent bg-clip-text bg-gradient-to-r from-[#BF264B] to-[#DF4B6E] mr-[20px] text-[8px] md:text-[18px] lg:text-[26px] font-[400] lg:leading-[34px] lg:tracking-[1px]">
            {celebFeedback?.tagline}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActorSaid;
