import { gradientText } from '@/constants/gradentText';
import { Form, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { ItemInfo } from '../components/ItemInform';
import SelectFormMultiple from '@/components/common/form/select/SelectFormMultiple';
import SelectFormDefault from '@/components/common/form/select/SelectFormDefault';
import CustomerInform from '../customer-inform/CustomerInform';
import { IClinic } from '@/interfaces/clinic/clinic';
import { IService } from '@/interfaces/service/service';

interface SummaryBookingProps {
  timeBooking: string;
  dateBooking: string;
  allClinics: IClinic[];
  allServices: IService[];
  setService: (service: string[]) => void;
  setClinic: (clinic: string) => void;
  setConfirmSending: (e: boolean) => void;
  customerName: any;
  setCustomerEmail: (e: string) => void;
  setCustomerPhone: (e: string) => void;
}
interface Booking {
  customer_name: any;
  phone: number;
  email: string;
  service: string[];
  clinic: string;
  time_booking: string;
  date_booking: string;
}
interface SelectParams {
  label: string;
  value: string;
}
const SummaryBookingForm = (props: SummaryBookingProps) => {
  const {
    timeBooking,
    dateBooking,
    allClinics,
    allServices,
    setClinic,
    setService,
    setCustomerEmail,
    setCustomerPhone,
    customerName,
    setConfirmSending,
  } = props;

  const [clinicsFormat, setClinicsFormat] = useState<SelectParams[]>([]);
  const [servicesFormat, setServicesFormat] = useState<SelectParams[]>([]);

  useEffect(() => {
    if (allClinics) {
      formatClinicData(allClinics);
    }
    if (allServices) {
      formatServiceData(allServices);
    }
    return;
  }, [allClinics, allServices]);

  const formatClinicData = (clinics: IClinic[]) => {
    const result: SelectParams[] = clinics.map((clinic) => {
      return {
        value: clinic.id,
        label: clinic.name,
      };
    });
    setClinicsFormat(result);
  };
  const formatServiceData = (clinics: IService[]) => {
    const result: SelectParams[] = clinics.map((clinic) => {
      return {
        value: clinic.id,
        label: clinic.name,
      };
    });
    setServicesFormat(result);
  };

  const onFinish = (e: any) => {
    if (dateBooking == 'dd-mm-yy') {
      message.warning('Vui lòng chọn ngày đặt hẹn');
      return;
    }
    if (timeBooking == '00:00') {
      message.warning('Vui lòng chọn thời gian đặt hẹn');
      return;
    }
    setService(e?.service);
    setClinic(e?.clinic);
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
            options={servicesFormat}
            maxTagPlaceholder={''}
          />
        </div>

        <div className="mt-[12px] lg:mt-[24px]">
          <SelectFormDefault
            placeholder={'Chọn cơ sở muốn làm'}
            size={'large'}
            label={'Cơ sở thực hiện'}
            name={'clinic'}
            subLabel={'(Không bắt buộc)'}
            options={clinicsFormat}
          />
        </div>
        <div className="mt-[48px] lg:mt-[48px]">
          <CustomerInform
            customerName={customerName}
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
