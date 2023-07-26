'use client';
import { Form } from 'antd';
import React from 'react';

const RightFormContent = () => {
  return (
    <div className="lg:px-[60px] flex items-center justify-center z-50">
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
      </Form>
    </div>
  );
};

export default RightFormContent;

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
        className=" lg:p-[12px] lg:text-[18px] lg:w-full lg:mb-[12px] lg:h-[44px] rounded-[6px] "
        placeholder={placeholder}
      />
    </div>
  );
};
