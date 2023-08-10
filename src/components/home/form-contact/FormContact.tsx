import PrimaryButton from '@/components/button/PrimaryButton';
import { Form, message } from 'antd';

import { useRouter } from 'next/navigation';

import { ChangeEvent, useState } from 'react';
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
    message.success('Gửi thông tin tư vấn thành công');
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
    <div>
      <div className="form-contact">
        <Form onFinish={handleSubmit}>
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
        </Form>
      </div>
    </div>
  );
};

export default FormContact;
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
    <div className="">
      <div className="block mb-2 text-[#36383A] lg:text-[16px] font-[600] lg:leading-[22px] lg:tracking-[-0.32px]">
        {label}
      </div>
      <input
        onChange={onChange}
        name={name}
        value={value}
        className="w-[240px] h-[37px] p-[12px] lg:text-[16px] lg:w-[380px] lg:mb-[12px] lg:h-[42px] rounded-[6px] border-none lg:p-[20px]"
        placeholder={placeholder}
      />
    </div>
  );
};
