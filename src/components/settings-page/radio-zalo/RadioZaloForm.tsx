import { Form, Radio, Space } from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';

interface RadioItemFormProps {
  name: string;
  label?: string;
  required?: boolean;
  message?: string;
  size?: SizeType;
  labelColor?: string;
  labelSize?: string;
}
const RadioZaloForm = (props: RadioItemFormProps) => {
  const {
    name,
    label,
    required = false,
    message,
    size,
    labelColor,
    labelSize,
  } = props;
  return (
    <Form.Item
      name={name}
      label={
        <label
          style={{
            color: `${labelColor}`,
            fontWeight: '500',
            fontSize: `${labelSize}`,
          }}>
          {label}
        </label>
      }
      rules={[{ required: required, message: message }]}>
      <Radio.Group size={size}>
        <Space direction="vertical">
          <Radio
            value={1}
            className="font-[500]">
            {'Pixel liên kết Aura Website (thiết lập tự động)'}
            <span className="lg:ml-[10px] cursor-pointer italic text-[12px] text-[#0000ff] hover:text-[#5C5CFF] ">
              {'Tìm hiểu thêm '}
            </span>
          </Radio>
          <Radio
            value={2}
            className="font-[500]">
            {'Pixel cá nhân'}
            <span className="lg:ml-[10px] cursor-pointer italic text-[12px] text-[#0000ff] hover:text-[#5C5CFF] ">
              {'Tìm hiểu thêm '}
            </span>
          </Radio>
        </Space>
      </Radio.Group>
    </Form.Item>
  );
};

export default RadioZaloForm;
