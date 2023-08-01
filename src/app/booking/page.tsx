'use client';
import CalendarBooking from '@/components/booking/calendar-booking/CalendarBooking';
import SummaryBookingForm from '@/components/booking/summary-form/SummaryBookingForm';
import TimeTableBooking from '@/components/booking/timetable-booking/TimeTableBooking';
import PopUpConfirm from '@/components/common/modal/modal-popconfirm/ModalPopconfirm';
import { useState } from 'react';
import lottie_booking from '../../../public/lottie/animation_lks6x6yc.json';

const desc_popConfirm_sending =
  'Khi bấm “Xác nhận”, đặt hẹn của bạn sẽ được lên lịch. Sẽ có tư vấn viên liên hệ với bạn thời gian sớm nhất. ';
const BookingPage = () => {
  const [dateBooking, setDateBooking] = useState<string>('dd-mm-yy');
  const [timeBooking, setTimeBooking] = useState<string>('00:00');
  const [confirmSending, setConfirmSending] = useState<boolean>(false);

  return (
    <div className="mt-[12px] lg:mt-[2px] flex flex-col px-[16px] lg:grid lg:grid-cols-2 lg:px-[130px] lg:py-[30px] lg:gap-[24px]">
      <div className="flex flex-col lg:flex-col lg:gap-[24px]">
        <div className="date-picker-antd">
          <CalendarBooking setDateBooking={setDateBooking} />
        </div>
        <div className="">
          <TimeTableBooking setTimeBooking={setTimeBooking} />
        </div>
      </div>
      <div className="p-[24px] lg:flex lg:w-[580px] rounded-[20px] bg-[#fff] lg:p-[24px]">
        <div className="w-full">
          <SummaryBookingForm
            setConfirmSending={setConfirmSending}
            timeBooking={timeBooking}
            dateBooking={dateBooking}
          />
        </div>
      </div>
      {confirmSending && (
        <PopUpConfirm
          loading={false}
          title={'Gửi đặt hẹn'}
          description={desc_popConfirm_sending}
          color={'#BC2449'}
          lottie={lottie_booking}
          onCancel={() => setConfirmSending(false)}
          onOk={undefined}
        />
      )}
    </div>
  );
};

export default BookingPage;
