import PrimaryButton from '@/components/button/PrimaryButton';
import InputForm from '@/components/common/form/input/InputForm';
import { InputContact } from '@/components/common/form/input/contact-input/InputContact';
import { Form, Input } from 'antd';
import React from 'react';

const FormContact = () => {
  return (
    <div>
      <div className="form-contact">
        <InputContact
          label={'Họ và tên'}
          placeholder={'Nhập họ và tên'}
        />
        <InputContact
          label={'Số điện thoại'}
          placeholder={'Nhập số điện thoại'}
        />
        <InputContact
          label={'Nơi sinh sống'}
          placeholder={'Nhập địa chỉ'}
        />
        <InputContact
          label={'Dịch vụ muốn tư vấn'}
          placeholder={'Nhập tên dịch vụ'}
        />
        <div className="mt-[10px]">
          <PrimaryButton
            text={'Gửi thông tin'}
            size={'big'}
          />
        </div>
      </div>
    </div>
  );
};

export default FormContact;
