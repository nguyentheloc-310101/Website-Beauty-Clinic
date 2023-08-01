import { gradientText } from '@/constants/gradentText';
import { Form, message } from 'antd';
import React, { useState } from 'react';
import { ItemInfo } from '../components/ItemInform';
import SelectFormMultiple from '@/components/common/form/select/SelectFormMultiple';
import SelectFormDefault from '@/components/common/form/select/SelectFormDefault';
import CustomerInform from '../customer-inform/CustomerInform';

const dataMock = [
  {
    label: 'Vi tảo đông y',
    value: 'a1',
  },
  {
    label: 'Thẩm mỹ viện Quốc tế Aura - Vĩnh Long',
    value: 'b1',
  },
];
interface SummaryBookingProps {
  timeBooking: string;
  dateBooking: string;
  setConfirmSending: (e: boolean) => void;
}
interface Booking {
  customer_name: string;
  phone: number;
  email: string;
  service: string[];
  clinic: string;
  time_booking: string;
  date_booking: string;
}

const SummaryBookingForm = (props: SummaryBookingProps) => {
  const { timeBooking, dateBooking, setConfirmSending } = props;
  const [service, setService] = useState<string[]>([]);
  const [clinic, setClinic] = useState<string>('');
  const [customerName, setCustomerName] = useState<string>('');
  const [customerEmail, setCustomerEmail] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<number>();

  const onFinish = () => {
    if (service == null) {
      message.warning('Vui lòng chọn dịch vụ');
      return;
    }
    if (dateBooking == 'dd-mm-yy') {
      message.warning('Vui lòng chọn ngày đặt hẹn');
      return;
    }
    if (timeBooking == '00:00') {
      message.warning('Vui lòng chọn thời gian đặt hẹn');
      return;
    }
    if (customerName == '') {
      message.warning('Vui lòng nhập tên khách hàng');
      return;
    }
    if (customerPhone == null) {
      message.warning('Vui lòng nhập số điện thoại khách hàng');
      return;
    }
    if (customerEmail == '') {
      message.warning('Vui lòng nhập email khách hàng');
      return;
    }

    setConfirmSending(true);
  };

  return (
    <div className="w-full">
      <div
        className={`${gradientText} text-[16px] lg:text-[24px] font-[800] lg:leading-[36px]`}>
        Tóm tắt đặt hẹn
      </div>
      <Form
        onFinish={onFinish}
        layout="vertical"
        style={{ width: '100%' }}>
        <div className="grid divide-y divide-[#E9EBED] w-full">
          <div className="">
            <ItemInfo
              label={'Ngày đặt hẹn:'}
              value={dateBooking}
            />
          </div>

          <div className="lg:my-[12px]">
            <ItemInfo
              label={'Thời gian đặt hẹn:'}
              value={timeBooking}
            />
          </div>
          <div></div>
        </div>
        <div className="mt-[8px] lg:mt-[24px]">
          <SelectFormMultiple
            placeholder={'Chọn 1 hoặc nhiều dịch vụ'}
            label={'Dịch vụ'}
            required={true}
            name={'service'}
            options={dataMock}
            maxTagPlaceholder={''}
          />
        </div>

        <div className="mt-[12px] lg:mt-[12px]">
          <SelectFormDefault
            placeholder={'Chọn cơ sở muốn làm'}
            size={'large'}
            label={'Cơ sở thực hiện'}
            name={'clinic'}
            subLabel={'(Không bắt buộc)'}
            options={dataMock}
          />
        </div>
        <div className="mt-[48px] lg:mt-[12px]">
          <CustomerInform
            setCustomerName={setCustomerName}
            setCustomerEmail={setCustomerEmail}
            setCustomerPhone={setCustomerPhone}
          />
        </div>
        <button className="w-full mt-[24px] h-[46px] leading-[22px] rounded-[8px] bg-[#BC2449] lg:py-[12px] lg:px-[24px] flex items-center justify-center text-[#fff] text-[16px] lg:font-[600] cursor-pointer lg:hover:bg-[#be3658]">
          Gửi đặt hẹn
        </button>
      </Form>
    </div>
  );
};

export default SummaryBookingForm;
export type { Booking };
