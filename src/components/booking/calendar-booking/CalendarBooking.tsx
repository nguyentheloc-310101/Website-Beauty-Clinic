import { gradientText } from '@/constants/gradentText';
import { Calendar } from 'antd';

interface CalendarBookingProps {
  setDateBooking: (e: string) => void;
}
const CalendarBooking = (props: CalendarBookingProps) => {
  const { setDateBooking } = props;
  const onSelectChange = (value: any) => {
    setDateBooking(value.format('DD/MM/YYYY') as string);
  };

  return (
    <div className="p-[16px] gap-[16px] rounded-[20px] bg-[#fff] lg:p-[24px] lg:w-full lg:h-[426px]">
      <div
        className={`${gradientText}  lg:w-fit lg:text-[24px] font-[800] lg:leading-[36px] `}>
        Chọn ngày đặt hẹn
      </div>
      <div className="flex flex-col items-end justify-end">
        <div className="w-full">
          <Calendar
            fullscreen={false}
            onSelect={onSelectChange}
          />
        </div>
      </div>
    </div>
  );
};

export default CalendarBooking;
