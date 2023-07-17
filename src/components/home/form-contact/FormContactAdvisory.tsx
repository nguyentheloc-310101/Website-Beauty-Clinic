import PrimaryButton from '@/components/button/PrimaryButton';
import { Form, Spin, message } from 'antd';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useState } from 'react';

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
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Contact>(initState);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    if (data.name == '' || data.phone == '' || data.service == '') {
      return message.warning('Vui lòng điền đầy đủ thông tin!');
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
    message.success('Gửi thông tin thành công');
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
    <Spin
      className="rounded-[24px]"
      spinning={loading}
      tip="Loading"
      size="large">
      <div className="relative w-[242px] h-[245px] pt-[5px] lg:w-[310px] lg:h-[360px] flex flex-cols item-center justify-center gap-[8px] mb-[10px] border bg-gradient-to-r from-[#fff2de] to-[#fff] rounded-[23px] lg:pt-[16px] lg:pl-[12px]">
        <Form
          onFinish={handleSubmit}
          layout={'vertical'}
          style={{ maxWidth: 600 }}>
          <InputContactSmall
            name={'name'}
            value={data.name}
            onChange={handleChange}
            label={'Họ và tên'}
            placeholder={'Nhập họ và tên'}
          />

          <InputContactSmall
            name={'phone'}
            onChange={handleChangePhone}
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
              typeBtn="submit"
              loading={loading}
              text={'Gửi thông tin'}
              size={'small'}
            />
          </div>
        </Form>
      </div>
    </Spin>
  );
};

export default FormContactSmall;

interface InputContactProps {
  label: string;
  placeholder?: string;
  onChange?: any;
  name?: string;
  value?: any;
  required?: boolean;
}
const InputContactSmall = (props: InputContactProps) => {
  const { label, value, name, placeholder, onChange, required } = props;
  return (
    <div>
      <label className="block lg:mb-1 text-[#BF264B] lg:text-[14px] font-[500]">
        {label}
      </label>
      <input
        onChange={onChange}
        name={name}
        required={required}
        value={value}
        className="w-[180px] h-[30px] p-[12px] lg:w-[240px] lg:h-[34px] lg:p-[20px] rounded-[7px] border border-[#bf264b] "
        placeholder={placeholder}
      />
    </div>
  );
};
export type { Contact };
