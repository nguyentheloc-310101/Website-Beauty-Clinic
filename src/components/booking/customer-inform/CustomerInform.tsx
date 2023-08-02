import { gradientText } from '@/constants/gradentText';
import { Input } from 'antd';
import { ChangeEvent, useState } from 'react';

interface CustomerInformProps {
  customerName: any;
  setCustomerEmail: (value: string) => void;
  setCustomerPhone: (value: string) => void;
}
const CustomerInform = ({
  customerName,
  setCustomerEmail,
  setCustomerPhone,
}: CustomerInformProps) => {
  const [statusPhone, setStatusPhone] = useState<any>('');
  const [statusName, setStatusName] = useState<any>('');
  const [phoneValue, setPhoneValue] = useState<any>();

  const onChangePhone = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const result = e.target.value.replace(/\D/g, '');
    if (result === '') {
      setStatusPhone('error');
    } else {
      setStatusPhone('');
    }
    setPhoneValue(result.trim());

    setCustomerPhone(result.trim());
  };

  const onChangeName = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const result = e.target.value;
    if (result == '') {
      setStatusName('error');
    } else {
      setStatusName('');
    }
    console.log(result.trim());
    customerName.current = result.trim();
  };

  return (
    <div className="lg:mt-[12px]">
      <div
        className={`${gradientText} text-[16px] leading-[24px] tracking-[0.25px] lg:text-[24px] font-[800] lg:leading-[36px]`}>
        Thông tin khách hàng
      </div>
      <div>
        <InputDefault
          required={true}
          status={statusName}
          label="Họ & tên khách hàng"
          placeholder="Họ & tên khách hàng"
          onChange={onChangeName}
        />
        <div className="lg:grid grid-cols-2 lg:gap-[16px]">
          <InputDefault
            required={true}
            status={statusPhone}
            onChange={onChangePhone}
            pattern="^(\+84|0)(1\d{9}|3\d{8}|5\d{8}|7\d{8}|8\d{8}|9\d{8})$"
            label="Số điện thoại"
            placeholder="Chỉ nhập số"
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
  pattern?: string;
  placeholder?: string;
  onChange?: any;
  errorMessage?: string;
  required?: boolean;
  name?: string;
  value?: any;
  status?: 'error' | 'warning';
}
export const InputDefault = (props: InputContactProps) => {
  const {
    name,
    label,
    value,
    required,
    pattern,
    status,
    placeholder,
    onChange,
    errorMessage,
  } = props;
  return (
    <div className="py-[5px] z-50">
      <div className="block mb-[5px] text-[#36383A] lg:text-[16px] font-[300] lg:leading-[24px] lg:tracking-[-0.5px]">
        {label}
        {required && <span className="text-[red]"> *</span>}
      </div>
      <Input
        required={required}
        onChange={onChange}
        pattern={pattern}
        status={status}
        name={name}
        value={value}
        style={{ outline: '#333' }}
        className="w-full h-[46px] gap-[8px] border p-[12px] lg:text-[15px] text-[#36383A] lg:w-full font-[300] lg:leading-[20px] lg:tracking-[0.15px] lg:mb-[12px] lg:h-[42px] rounded-[8px] "
        placeholder={placeholder}
      />
    </div>
  );
};
