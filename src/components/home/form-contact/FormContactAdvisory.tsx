import PrimaryButton from '@/components/button/PrimaryButton';
import React from 'react';

const FormContactSmall = () => {
  return (
    <div className="form-contact-small">
      <InputContactSmall
        label={'Họ và tên'}
        placeholder={'Nhập họ và tên'}
      />
      <InputContactSmall
        label={'Số điện thoại'}
        placeholder={'Nhập số điện thoại'}
      />
      <InputContactSmall
        label={'Nơi sinh sống'}
        placeholder={'Nhập địa chỉ'}
      />
      <InputContactSmall
        label={'Dịch vụ muốn tư vấn'}
        placeholder={'Nhập địa chỉ'}
      />
      <div className="">
        <PrimaryButton
          text={'Gửi thông tin'}
          size={'small'}
        />
      </div>
    </div>
  );
};

export default FormContactSmall;

interface InputContactProps {
  label: string;
  placeholder?: string;
}
const InputContactSmall = (props: InputContactProps) => {
  const { label, placeholder } = props;
  return (
    <div>
      <label className="block mb-1 text-[#BF264B] lg:text-[14px] font-[500]">
        {label}
      </label>
      <input
        className="w-[240px] h-[34px] p-[20px] rounded-[7px] border border-[#bf264b] "
        placeholder={placeholder}
      />
    </div>
  );
};
