import { Form, Input } from 'antd';

interface Props {
  name?: string;
  label?: string;
  placeholder?: string;
  value?: any;
  required?: boolean;
  classNameInput?: string;
  message?: string;
  size?: string;
  type?: string;
  onChange?: (value: any) => void;
  labelColor?: string;
}

const InputForm = (props: Props) => {
  let {
    label,
    name,
    required = true,
    message = '',
    placeholder,
    classNameInput,
    type,
    value,
    labelColor,
    onChange,
  } = props;

  return (
    <Form.Item
      label={
        <label
          style={{
            color: `${labelColor}`,
            fontWeight: '500',
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
        className={`rounded-[10px] hover:border-[#bf264b] h-[24px] lg:w-full lg:h-[40px] border-[#bf264b] border focus:border-[#bf264b] ${classNameInput}`}
      />
    </Form.Item>
  );
};

export default InputForm;
