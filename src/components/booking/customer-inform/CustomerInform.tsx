import { gradientText } from '@/constants/gradentText';
import { ChangeEvent, useState } from 'react';

interface CustomerInformProps {
  setCustomerName: (value: string) => void;
  setCustomerEmail: (value: string) => void;
  setCustomerPhone: (value: number) => void;
}
const CustomerInform = (props: CustomerInformProps) => {
  const { setCustomerName, setCustomerEmail, setCustomerPhone } = props;
  const [phoneValue, setPhoneValue] = useState<any>();
  const onChangePhone = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const result = e.target.value.replace(/\D/g, '');
    setPhoneValue(result);
    const phoneNumber = Number(result);
    setCustomerPhone(phoneNumber);
  };
  return (
    <div className="lg:mt-[12px]">
      <div
        className={`${gradientText} text-[16px] leading-[24px] tracking-[0.25px] lg:text-[24px] font-[800] lg:leading-[36px]`}>
        Thông tin khách hàng
      </div>
      <div>
        <InputDefault
          label="Họ & tên khách hàng"
          placeholder="Họ & tên khách hàng"
          onChange={(e: any) => setCustomerName(e.target.value)}
        />
        <div className="lg:grid grid-cols-2 lg:gap-[16px]">
          <InputDefault
            onChange={onChangePhone}
            label="Số điện thoại"
            placeholder="Chỉ nhật số"
            value={phoneValue}
          />
          <InputDefault
            label="Email"
            placeholder="Khách có thể bỏ trống"
            onChange={(e: any) => setCustomerEmail(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerInform;
interface InputContactProps {
  label: string;
  placeholder?: string;
  onChange?: any;
  name?: string;
  value?: any;
}
export const InputDefault = (props: InputContactProps) => {
  const { name, label, value, placeholder, onChange } = props;
  return (
    <div className="py-[5px] z-50">
      <div className="block mb-[5px] text-[#36383A] lg:text-[16px] font-[300] lg:leading-[24px] lg:tracking-[-0.5px]">
        {label}
      </div>
      <input
        required={false}
        onChange={onChange}
        name={name}
        value={value}
        style={{ outline: '#333' }}
        className="w-full h-[46px] gap-[8px] border p-[12px] lg:text-[15px] text-[#36383A] lg:w-full font-[300] lg:leading-[20px] lg:tracking-[0.15px] lg:mb-[12px] lg:h-[42px] rounded-[8px] "
        placeholder={placeholder}
      />
    </div>
  );
};
