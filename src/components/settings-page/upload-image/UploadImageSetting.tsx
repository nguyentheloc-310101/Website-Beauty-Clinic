import { Button, Form, Input, Space } from 'antd';
import React from 'react';

interface UploadImageSettingProps {
  fontSize?: string;
  label?: string;
  placeholder?: string;
}
const UploadImageSetting = (props: UploadImageSettingProps) => {
  const { fontSize, label, placeholder } = props;
  return (
    <Form.Item>
      <label
        style={{
          fontWeight: '500',
          fontSize: `${fontSize}`,
        }}>
        {label}
      </label>
      <Space.Compact
        className="lg:mt-[12px]"
        style={{ width: '100%' }}>
        <Input
          className="rounded-[6px] h-[24px] lg:w-full lg:h-[40px]"
          readOnly
          placeholder={placeholder}
        />
        <Button
          className="text-white h-[40px] font-[500] bg-[#1677ff] w-fit"
          type="primary">
          Chọn ảnh
        </Button>
      </Space.Compact>
    </Form.Item>
  );
};

export default UploadImageSetting;
