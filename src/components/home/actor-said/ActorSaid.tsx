/* eslint-disable @next/next/no-img-element */

import { useGeneralHomeContext } from '@/app/home/page';
import { ICelebFeedback } from '@/interfaces/home/IHome';

const ActorSaid = () => {
  const { generalData } = useGeneralHomeContext();
  const celebFeedback: ICelebFeedback = generalData?.data.celebFeedback;
  return (
    <div className="grid grid-cols-2 lg:px-[107px] sm:mt-[80px] lg:mt-[100px] sm:h-fit">
      <div className="col-span-1 ">
        <img
          src={celebFeedback?.image + '/-/quality/smart/-/format/webp/'}
          alt="actor-img"
          className="md:w-[555px] md:h-[891px]"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="col-span-1 lg:mt-[66px]">
        {/* <img
          src={
            'https://ucarecdn.com/ca937c1c-edcb-4dda-8091-9909d65f62a8/-/preview/576x189/-/quality/lightest/-/format/webp/'
          }
          alt="cover-img"
          className="lg:w-[582px] lg:h-[191px] md:w-[370px] md:h-auto w-[150px] mr-[20px] h-auto"
          style={{ objectFit: 'cover' }}
        /> */}
        <div className="lg:w-[600px] text-right uppercase lg:text-[56px] lg:font-[900] lg:leading-[64px] text-[#BC2449]">
          Aura là
          <br />
          <p className="normal-case font-service-card lg:text-[140px] font-[400] lg:leading-[148px]">
            địa chỉ số 1
          </p>
          <br />
          vì khách hàng
        </div>
        <div className="lg:ml-[30px] text-right">
          <div className="text-[10px] font-[400] lg:ml-[40px] w-[150px] text-[#414141]  md:w-[350px] md:text-[18px] lg:w-[508px] lg:h-[264px] lg:text-[22px] lg:font-[300]">
            {celebFeedback?.content}
          </div>
          <div className="w-full text-center h-[40px]">
            <div className="text-[#4f4f4f] mt-[5px] italic sm:font-[300] text-[9px] uppercase ms:text-[12px] md:text-[18px] lg:font-[100] lg:text-[27px]">
              {celebFeedback?.job}
            </div>
            <div className="font-service-card lg:h-[120px] font-[600] italic sm:text-[21px] text-transparent bg-clip-text bg-gradient-to-r from-[#BF264B] to-[#DF4B6E] md:text-[30px] lg:font-[600] lg:text-[61px]">
              {celebFeedback?.name}
            </div>
            <div className=" sm:font-[500] text-transparent bg-clip-text bg-gradient-to-r from-[#BF264B] to-[#DF4B6E] mr-[20px] text-[8px] md:text-[18px] lg:text-[24px] lg:font-[500]">
              {celebFeedback?.tagline}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActorSaid;
