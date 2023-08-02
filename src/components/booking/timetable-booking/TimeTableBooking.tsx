import { gradientText } from '@/constants/gradentText';
import React, { useState } from 'react';

interface TimeTableBookingProps {
  setTimeBooking: (e: string) => void;
}
const time = [
  '08:00',
  '08:30',
  '09:00',
  '09:30',
  '10:00',
  '10:30',
  '11:00',
  '11:30',
  '12:00',
  '12:30',
  '13:00',
  '13:30',
  '14:00',
  '14:30',
  '15:00',
  '15:30',
  '16:00',
  '16:30',
  '17:00',
  '17:30',
  '18:00',
  '18:30',
  '19:00',
  '19:30',
  '20:00',
];

const TimeTableBooking = (props: TimeTableBookingProps) => {
  const { setTimeBooking } = props;
  const [indexTime, setIndexTime] = useState<number>();

  const handleOnClick = (item: any, key: number) => {
    setTimeBooking(item);
    setIndexTime(key);
  };
  return (
    <div className="mb-[16px] gap-[8px] p-[16px] rounded-[20px] bg-[#fff] lg:p-[24px] lg:w-full lg:h-full lg:flex lg:flex-col justify-center lg:gap-[24px]">
      <div
        className={`${gradientText} mb-[16px] lg:text-[24px] font-[800] lg:leading-[36px] `}>
        Chọn giờ làm dịch vụ
      </div>
      <div className="flex items-center justify-around lg:justify-start gap-[8px] flex-wrap lg:gap-[12px]">
        {time.map((item, index) => {
          return (
            <div
              onClick={() => handleOnClick(item, index)}
              key={index}
              className={`w-[55px] lg:w-[97px] cursor-pointer flex items-center justify-center border hover:border-[#BC2449] border-[#8F9499] rounded-[8px] h-[34px] px-[16px] py-[8px] text-[13px] text-[#8F9499] font-[600] leading-[18px] tracking-[-0.26px] ${
                index == indexTime && 'bg-[#BC2449] border-[#BC2449] text-white'
              }`}>
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TimeTableBooking;
