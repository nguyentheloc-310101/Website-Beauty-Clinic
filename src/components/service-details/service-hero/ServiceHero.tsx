/* eslint-disable @next/next/no-img-element */
import PrimaryButton from '@/components/button/PrimaryButton';
import { gradientText } from '@/constants/gradentText';
import { IService, IServiceDetails } from '@/interfaces/service/service';
import Link from 'next/link';
import React from 'react';

interface HeroServiceProps {
  serviceSelectedDetails?: IServiceDetails;
}
const ServiceHero = (props: HeroServiceProps) => {
  const { serviceSelectedDetails } = props;
  return (
    <div className="relative w-full h-[336px] lg:w-full lg:h-auto overflow-hidden">
      <img
        src={serviceSelectedDetails?.image}
        alt="cover-img"
        className="object-cover w-full h-[336px] lg:h-[722px] lg:w-full lg:block lg:object-cover"
      />
      <div className="absolute top-[16px] left-[16px] w-[216px] rounded-[16px] p-[16px] lg:top-[120px] lg:left-[132px] z-50 lg:w-[578px] lg:h-[380px] lg:p-[36px] bg-white/70 lg:rounded-[40px] ">
        <div
          className={`${gradientText} text-[16px] leading-[24px] tracking-[0.25px] lg:tracking-[0.25px] lg:leading-[52px] lg:text-[35px] font-[800]`}>
          {serviceSelectedDetails?.name}
        </div>
        <div className="lg:text-[16px] font-[300] text-[10px] leading-[14px] mt-[10px] lg:leading-[24px] text-[#36383A] lg:tracking-[0.5px] lg:mt-[12px]">
          {serviceSelectedDetails?.description}
        </div>
        <div className="lg:mt-[40px] w-full lg:h-[60px] flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="uppercase text-[10px] leading-[14px] mt-[16px] text-[#36383A] font-[400] lg:text-[16px] lg:leading-[24px] lg:tracking-[0.5px]">
              giá chỉ từ
            </div>
            <div
              className={`text-[16px] my-[8px] leading-[14px] tracking-[0.25] lg:text-[24px] font-[800] lg:leading-[36px] ${gradientText}`}>
              {serviceSelectedDetails?.price}
            </div>
          </div>
          <div className="hidden lg:block">
            <Link href="/booking">
              <PrimaryButton
                text={'Đặt hẹn ngay'}
                size={'big'}
              />
            </Link>
          </div>
          <div className="lg:hidden">
            <Link href="/booking">
              <PrimaryButton
                text={'Đặt hẹn ngay'}
                size={'small'}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHero;
