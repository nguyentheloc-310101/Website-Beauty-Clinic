'use client';
import { Form } from 'antd';
import React from 'react';

const FormInputContent = () => {
  return (
    <div className="px-[16px] lg:px-[60px] w-full flex items-center justify-center z-50">
      <Form className="w-full gap-[20px]">
        <InputContact
          name={'name'}
          //   value={data.name}
          //   onChange={handleChange}
          label={'Họ và tên'}
          placeholder={'Nhập họ và tên'}
        />
        <InputContact
          name={'phone'}
          //   onChange={handleChangePhone}
          label={'Số điện thoại'}
          //   value={data.phone}
          placeholder={'Nhập số điện thoại'}
        />
        <InputContact
          //   onChange={handleChange}
          name={'address'}
          label={'Địa chỉ'}
          placeholder={'Nhập địa chỉ'}
        />
        <InputContact
          //   onChange={handleChange}
          name={'service'}
          //   value={data.service}
          label={'Dịch vụ quan tâm'}
          placeholder={'Nhập tên dịch vụ'}
        />
        <div className="flex my-[16px] w-full items-center justify-center">
          <button className="bg-gradient-to-r py-[12px] px-[24px] w-full h-[42px] rounded-[8px] from-[#FFF2DE] to-[#FFF] text-[#BC2449] text-[16px] font-[600] leading-[20px] tracking-[0.25px] flex items-center justify-center">
            Gửi thông tin
          </button>
        </div>
      </Form>
    </div>
  );
};

export default FormInputContent;

interface InputContactProps {
  label: string;
  placeholder?: string;
  onChange?: any;
  name?: string;
  value?: any;
}
export const InputContact = (props: InputContactProps) => {
  const { name, label, value, placeholder, onChange } = props;
  return (
    <div className="my-[10px] z-50">
      <div className="block mb-[5px] text-[#fff] lg:text-[16px] font-[600] leading-[140%] tracking-[-0.32px]">
        {label}
      </div>
      <input
        onChange={onChange}
        name={name}
        value={value}
        className="w-full h-[42px] p-[10px] lg:p-[12px] lg:text-[18px] lg:w-full lg:mb-[12px] lg:h-[44px] rounded-[6px] "
        placeholder={placeholder}
      />
    </div>
  );
};
