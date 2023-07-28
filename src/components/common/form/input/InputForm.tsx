import { Form, Input } from 'antd';

interface Props {
  name?: string;
  label?: string;
  placeholder?: string;
  value?: any;
  required?: boolean;
  className?: string;
  message?: string;
  size?: string;
  type?: string;
  onChange?: (value: any) => void;
  labelColor?: string;
  labelSize?: string;
}

const InputForm = (props: Props) => {
  let {
    label,
    name,
    required = true,
    message = '',
    placeholder,
    className,
    type,
    value,
    labelColor,
    labelSize,
    onChange,
  } = props;

  return (
    <Form.Item
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
      name={name}
      rules={[{ required: required, message: message }]}>
      <Input
        onChange={onChange}
        value={value}
        type={type}
        placeholder={placeholder}
        className={`rounded-[6px]  h-[24px] lg:w-full lg:h-[40px]  ${className}`}
      />
    </Form.Item>
  );
};

export default InputForm;
