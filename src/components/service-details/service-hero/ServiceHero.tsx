/* eslint-disable @next/next/no-img-element */
import PrimaryButton from '@/components/button/PrimaryButton';
import { gradientText } from '@/constants/gradentText';
import Link from 'next/link';
import React from 'react';

const ServiceHero = () => {
  return (
    <div className="relative w-full h-[336px] lg:w-full lg:h-auto overflow-hidden">
      <img
        src={
          'https://ucarecdn.com/cc9ba019-2700-42dd-ac6a-e6a2e9deb043/-/preview/1584x682/-/quality/lightest/-/format/webp/'
        }
        alt="cover-img"
        className="object-cover w-full h-[336px] lg:h-auto lg:w-full lg:block lg:object-cover"
      />
      <div className="absolute top-[16px] left-[16px] w-[216px] rounded-[16px] p-[16px] lg:top-[120px] lg:left-[132px] z-50 lg:w-[578px] lg:h-[380px] lg:p-[36px] bg-white/70 lg:rounded-[40px] ">
        <div
          className={`${gradientText} text-[16px] leading-[24px] tracking-[0.25px] lg:tracking-[0.25px] lg:leading-[52px] lg:text-[35px] font-[800]`}>
          Điều trị nám
        </div>
        <div className="lg:text-[16px] font-[300] text-[10px] leading-[14px] mt-[10px] lg:leading-[24px] text-[#36383A] lg:tracking-[0.5px] lg:mt-[12px]">
          Nám là tình trạng xuất hiện những mảng hoặc đốm màu nâu đến đen trên
          mặt. Mặc dù không ảnh hưởng đến sức khỏe, tuy nhiên lại làm mất thẩm
          mỹ khiến chị em cảm thấy tự ti. Aura với kinh nghiệm từng điều trị nám
          thành công cho hàng nghìn khách hàng sẽ chia sẻ cho các bạn hiểu hơn
          về nám, cũng như cách điều trị tận gốc.
        </div>
        <div className="lg:mt-[40px] w-full lg:h-[60px] flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="uppercase text-[10px] leading-[14px] mt-[16px] text-[#36383A] font-[400] lg:text-[16px] lg:leading-[24px] lg:tracking-[0.5px]">
              giá chỉ từ
            </div>
            <div
              className={`text-[16px] my-[8px] leading-[14px] tracking-[0.25] lg:text-[24px] font-[800] lg:leading-[36px] ${gradientText}`}>
              899.000 đ
            </div>
          </div>
          <div className="hidden lg:block">
            <Link href="/booking">
              <PrimaryButton
                text={'Đặt hẹn ngay'}
                size={'big'}
              />{' '}
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
