import { gradientText } from '@/constants/gradentText';
import { Calendar, Col, Radio, Row, Select, Typography, theme } from 'antd';
import CalendarCustomHeader from './CalendarCustomHeader';

interface CalendarBookingProps {
  setDateBooking: (e: string) => void;
}
const CalendarBooking = (props: CalendarBookingProps) => {
  const { setDateBooking } = props;
  const onSelectChange = (value: any) => {
    setDateBooking(value.format('DD/MM/YYYY') as string);
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
            headerRender={({ value, type, onChange, onTypeChange }) => {
              const start = 0;
              const end = 12;
              const monthOptions = [];

              let current = value.clone();
              const localeData = value.localeData();
              const months = [];
              for (let i = 0; i < 12; i++) {
                current = current.month(i);
                months.push(localeData.monthsShort(current));
              }

              for (let i = start; i < end; i++) {
                monthOptions.push(
                  <Select.Option
                    key={i}
                    value={i}
                    className="month-item">
                    {months[i]}
                  </Select.Option>
                );
              }

              const year = value.year();
              const month = value.month();
              const options = [];
              for (let i = year; i < year + 10; i += 1) {
                options.push(
                  <Select.Option
                    key={i}
                    value={i}
                    className="year-item">
                    {i}
                  </Select.Option>
                );
              }
              return (
                <div
                  className="flex justify-end"
                  style={{ padding: 8 }}>
                  <Row gutter={8}>
                    <Col>
                      <Radio.Group
                        size="small"
                        onChange={(e) => onTypeChange(e.target.value)}
                        value={type}></Radio.Group>
                    </Col>
                    <Col>
                      <Select
                        size="small"
                        className="my-year-select hover:border-none"
                        value={year}
                        onChange={(newYear) => {
                          const now = value.clone().year(newYear);
                          onChange(now);
                        }}>
                        {options}
                      </Select>
                    </Col>
                    <Col>
                      <Select
                        size="small"
                        value={month}
                        onChange={(newMonth) => {
                          const now = value.clone().month(newMonth);
                          onChange(now);
                        }}>
                        {monthOptions}
                      </Select>
                    </Col>
                  </Row>
                </div>
              );
            }}
            fullscreen={false}
            onSelect={onSelectChange}
          />
        </div>
      </div>
    </div>
  );
};

export default CalendarBooking;
