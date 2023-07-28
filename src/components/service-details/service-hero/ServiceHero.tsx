/* eslint-disable @next/next/no-img-element */
import PrimaryButton from '@/components/button/PrimaryButton';
import { gradientText } from '@/constants/gradentText';
import React from 'react';

const ServiceHero = () => {
  return (
    <div className="relative lg:w-full lg:h-[722px] overflow-hidden">
      <img
        src={
          'https://ucarecdn.com/cc9ba019-2700-42dd-ac6a-e6a2e9deb043/-/preview/1584x682/-/quality/lightest/-/format/webp/'
        }
        alt="cover-img"
        style={{ objectFit: 'cover', width: '100%' }}
      />
      <div className="absolute lg:top-[120px] lg:left-[132px] z-50 lg:w-[578px] lg:h-[380px] lg:p-[36px] bg-white/70 lg:rounded-[40px] ">
        <div className={`${gradientText} lg:text-[35px] lg:font-[800]`}>
          Điều trị nám
        </div>
        <div className="lg:text-[16px] font-[400] leading-[24px] text-[#36383A] lg:tracking-[0.5px] lg:mt-[12px]">
          Nám là tình trạng xuất hiện những mảng hoặc đốm màu nâu đến đen trên
          mặt. Mặc dù không ảnh hưởng đến sức khỏe, tuy nhiên lại làm mất thẩm
          mỹ khiến chị em cảm thấy tự ti. Aura với kinh nghiệm từng điều trị nám
          thành công cho hàng nghìn khách hàng sẽ chia sẻ cho các bạn hiểu hơn
          về nám, cũng như cách điều trị tận gốc.
        </div>
        <div className="lg:mt-[40px] w-full lg:h-[60px] flex items-center justify-between">
          <div>
            <div className="uppercase text-[#36383A] font-[400] lg:text-[16px] leading-[24px] lg:tracking-[0.5px]">
              giá chỉ từ
            </div>
            <div
              className={`lg:text-[24px] font-[800] leading-[36px] ${gradientText}`}>
              899.000 đ
            </div>
          </div>
          <div>
            <PrimaryButton
              text={'Đặt hẹn ngay'}
              size={'big'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHero;
