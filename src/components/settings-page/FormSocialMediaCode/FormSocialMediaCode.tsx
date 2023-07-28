import { Form } from 'antd';
import React from 'react';
import InputForm from '../../common/form/input/InputForm';
import RadioZaloForm from '../radio-zalo/RadioZaloForm';

const FormSocialMediaCode = () => {
  return (
    <div className="h-[450px]">
      <Form layout={'vertical'}>
        <InputForm
          label="Facebook Pixel ID"
          labelSize="16px"
          placeholder="Nhập Facebook Pixel ID (Ví dụ: 15206565xxxxxxxx)"
        />
        <InputForm
          label="Google Analytics ID"
          labelSize="16px"
          placeholder="Nhập Google Analytics ID (Ví dụ: G-15245xxx)"
        />
        <InputForm
          label="Google Ads ID"
          labelSize="16px"
          placeholder="Nhập Google Ads ID (Ví dụ: AW-175245xxx)"
        />
        <InputForm
          label="TikTok Pixel ID"
          labelSize="16px"
          placeholder="Nhập TikTok Pixel ID (Ví dụ: 15206565xxxxxxxx)"
        />
        <RadioZaloForm
          labelSize="16px"
          name={'zaloPixelId'}
          label={'Zalo Ads Pixel ID'}
        />
        <InputForm
          label="Google Tag Manager ID"
          labelSize="16px"
          placeholder="Nhập Google Tag Manager ID (Ví dụ: GTM-175245xxx)"
        />
      </Form>
    </div>
  );
};

export default FormSocialMediaCode;
