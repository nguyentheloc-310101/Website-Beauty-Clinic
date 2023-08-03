import { gradientText } from '@/constants/gradentText';
import { Calendar } from 'antd';

interface CalendarBookingProps {
  setDateBooking: (e: string) => void;
}
const CalendarBooking = (props: CalendarBookingProps) => {
  const { setDateBooking } = props;
  const onSelectChange = (value: any) => {
    setDateBooking(value.format('YYYY/MM/DD') as string);
  };

  return (
    <div className="p-[16px] gap-[16px] rounded-[20px] bg-[#fff] lg:p-[24px] lg:w-full lg:h-full">
      <div
        className={`${gradientText}  lg:w-fit lg:text-[24px] font-[800] lg:leading-[36px] `}>
        Chọn ngày đặt hẹn
      </div>
      <div className="flex flex-col items-end justify-end">
        <div
          id="datePicker-antd_id"
          className="w-full">
          <Calendar
            mode={'month'}
            fullscreen={false}
            onSelect={onSelectChange}
          />
        </div>
      </div>
    </div>
  );
};

export default CalendarBooking;
