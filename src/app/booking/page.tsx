'use client';
import React from 'react';
import { gradientText } from '@/constants/gradentText';
import { Divider } from 'antd';
import { Metadata } from 'next';
import SummaryBookingForm from '@/components/booking/summary-form/SummaryBookingForm';
// export const metadata: Metadata = {
//   title: 'Thẩm mỹ quốc tế Aura - Đặt lịch',
//   description: 'Aura Beauty Clinic',
// };

const BookingPage = () => {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:px-[130px] lg:py-[30px]">
      <div className="flex">
        <div>calendar</div>
        <div>time</div>
      </div>
      <div className="lg:flex lg:w-[580px] lg:rounded-[20px] bg-[#fff] lg:p-[24px]">
        <SummaryBookingForm />
      </div>
    </div>
  );
};

export default BookingPage;

export const SelectInput = () => {};
