import React, { ChangeEvent, FormEvent, useState } from 'react';

import { useRouter } from 'next/navigation';
import PrimaryButton from '@/components/button/PrimaryButton';

interface Contact {
  name: string;
  phone: string;
  address: string;
  service: string;
}

const initState = {
  name: '',
  phone: '',
  address: '',
  service: '',
};
const FormContactSmall = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Contact>(initState);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(JSON.stringify(data));
    const { name, phone, address, service } = data;
    console.log(data);
    //api send
    setLoading(true);
    await fetch('http://staging.thammyaura.vn/api/contact', {
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
    });
    await fetch('http://staging.thammyaura.vn/api/send-message', {
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
    });
    setLoading(false);

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
    <div className="form-contact-small">
      <form onSubmit={handleSubmit}>
        <InputContactSmall
          name={'name'}
          value={data.name}
          onChange={handleChange}
          label={'Họ và tên'}
          placeholder={'Nhập họ và tên'}
        />
        <InputContactSmall
          name={'phone'}
          onChange={handleChange}
          label={'Số điện thoại'}
          value={data.phone}
          placeholder={'Nhập số điện thoại'}
        />
        <InputContactSmall
          onChange={handleChange}
          name={'address'}
          label={'Nơi sinh sống'}
          value={data.address}
          placeholder={'Nhập địa chỉ'}
        />
        <InputContactSmall
          onChange={handleChange}
          name={'service'}
          value={data.service}
          label={'Dịch vụ muốn tư vấn'}
          placeholder={'Nhập tên dịch vụ'}
        />

        <div className="w-full flex items-center justify-center mt-[10px]">
          <PrimaryButton
            text={'Gửi thông tin'}
            size={'small'}
          />
        </div>
      </form>
    </div>
  );
};

export default FormContactSmall;

interface InputContactProps {
  label: string;
  placeholder?: string;
  onChange?: any;
  name?: string;
  value?: any;
}
const InputContactSmall = (props: InputContactProps) => {
  const { label, value, name, placeholder, onChange } = props;
  return (
    <div>
      <label className="block mb-1 text-[#BF264B] lg:text-[14px] font-[500]">
        {label}
      </label>
      <input
        onChange={onChange}
        name={name}
        value={value}
        className="w-[240px] h-[34px] p-[20px] rounded-[7px] border border-[#bf264b] "
        placeholder={placeholder}
      />
    </div>
  );
};
