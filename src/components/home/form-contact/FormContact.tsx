import PrimaryButton from '@/components/button/PrimaryButton';
import InputForm from '@/components/common/form/input/InputForm';
import { InputContact } from '@/components/common/form/input/contact-input/InputContact';
import { Form, Input } from 'antd';

import { useRouter } from 'next/navigation';

import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Contact } from './FormContactAdvisory';
const initState = {
  name: '',
  phone: '',
  address: '',
  service: '',
};

const FormContact = () => {
  const router = useRouter();

  const [data, setData] = useState<Contact>(initState);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // console.log(JSON.stringify(data));
    const { name, phone, address, service } = data;
    console.log(data);
    //api send

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
    );
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
    );
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
    );

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
  return (
    <div>
      <div className="form-contact">
        <form onSubmit={handleSubmit}>
          <InputContact
            name={'name'}
            value={data.name}
            onChange={handleChange}
            label={'Họ và tên'}
            placeholder={'Nhập họ và tên'}
          />
          <InputContact
            name={'phone'}
            onChange={handleChange}
            label={'Số điện thoại'}
            value={data.phone}
            placeholder={'Nhập số điện thoại'}
          />
          <InputContact
            onChange={handleChange}
            name={'address'}
            label={'Nơi sinh sống'}
            placeholder={'Nhập địa chỉ'}
          />
          <InputContact
            onChange={handleChange}
            name={'service'}
            value={data.service}
            label={'Dịch vụ muốn tư vấn'}
            placeholder={'Nhập tên dịch vụ'}
          />
          <div className="ml-[30px] mt-[10px] lg:w-[full] lg:flex lg:ml-[50px]">
            <PrimaryButton
              text={'Gửi thông tin'}
              size={'big'}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormContact;
