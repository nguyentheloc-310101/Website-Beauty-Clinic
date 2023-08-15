'use client';
import { Contact } from '@/components/home/form-contact/FormContactAdvisory';
import { Form, message } from 'antd';
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, useState } from 'react';

const initState: Contact = {
  name: '',
  phone: '',
  address: '',
  service: '',
};
type FormInputContent = {
  setLoading: (e: boolean) => void;
};
const FormInputContent = (props: FormInputContent) => {
  const { setLoading } = props;
  const router = useRouter();
  const [data, setData] = useState<Contact>(initState);
  const handleSubmit = async () => {
    if (data.name == '' || data.phone == '' || data.service == '') {
      return message.warning('Vui lòng điền đầy đủ thông tin!');
    }

    const tmp = data.phone.substring(0, 2);
    if (tmp == '84') {
      if (data.phone.length !== 11) {
        return message.error('Hãy nhập đúng số điện thoại (nếu bắt đầu là 84)');
      }
    } else {
      if (data.phone.length !== 10) {
        return message.error('Hãy nhập đúng số điện thoại');
      }
    }

    const { name, phone, address, service } = data;
    console.log(data);
    //api send
    setLoading(true);
    await fetch(
      `${process.env.NEXT_PUBLIC_DOMAIN}/${process.env.NEXT_PUBLIC_LARK_CREATE_RECORD_API}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          phone,
          address,
          service,
        }),
      }
    ),
      await fetch(
        `${process.env.NEXT_PUBLIC_DOMAIN}/${process.env.NEXT_PUBLIC_LARK_MESSAGE_INTERNAL_API}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            phone,
            address,
            service,
          }),
        }
      ),
      await fetch(
        `${process.env.NEXT_PUBLIC_DOMAIN}/${process.env.NEXT_PUBLIC_LARK_MESSAGE_EXTERNAL_API}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            phone,
            address,
            service,
          }),
        }
      ),
      setLoading(false);
    message.success('Gửi thông tin thành công');

    router.push(`/verify-advisory`);
  };
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = e.target.name;

    setData((prevData) => ({
      ...prevData,
      [name]: e.target.value,
    }));
  };
  const handleChangePhone = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const result = e.target.value.replace(/\D/g, '');

    setData((prevState) => ({
      ...prevState,
      phone: result,
    }));
  };
  return (
    <div className="px-[16px] lg:px-[60px] w-full flex items-center justify-center z-50">
      <Form
        className="w-full gap-[20px]"
        onFinish={handleSubmit}>
        <InputContact
          name={'name'}
          value={data.name}
          onChange={handleChange}
          label={'Họ và tên'}
          placeholder={'Nhập họ và tên'}
        />
        <InputContact
          name={'phone'}
          onChange={handleChangePhone}
          label={'Số điện thoại'}
          value={data.phone}
          placeholder={'Nhập số điện thoại'}
        />
        <InputContact
          onChange={handleChange}
          name={'address'}
          label={'Địa chỉ'}
          placeholder={'Nhập địa chỉ'}
        />
        <InputContact
          onChange={handleChange}
          name={'service'}
          value={data.service}
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
