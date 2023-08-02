import { Form, Select } from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';

interface OptionsType {
  value: string | number;
  label: string;
  disabled?: boolean;
}
interface SelectItemFormProps {
  name: string;
  label?: string;
  required?: boolean;
  message?: string;
  subLabel?: string;
  options: OptionsType[];
  placeholder?: string;
  disabled?: boolean;
  size?: SizeType;
  onChange?: any;
  allowClear?: boolean;
  readOnly?: boolean;
  onClear?: any;
}
const { Option } = Select;
const SelectFormDefault = (props: SelectItemFormProps) => {
  const {
    name,
    label,
    required = false,
    message,
    options,
    placeholder,
    disabled,
    size,

    //new
    onChange,
    readOnly,
    allowClear,
    onClear,
    subLabel,
  } = props;
  const style = {
    alignLabel: 'flex items-end mb-[-8px]',
    label:
      'w-[100%] mb-1 not-italic font-normal text-sm leading-5 text-gray-900 relative ',
    subLabel: 'text-xs text-[#B9BDC1] ml-1',
    inputBox: `w-[100%] mt-[-8px] not-italic font-normal text-base tracking-[0.5px] text-[#36383A] rounded-lg border-solid border-1px border-[#B9BDC1]`,
    icon: { color: '#36383A', fontSize: 20 },
  };
  return (
    <Form.Item
      className="w-[100%] mb-0 not-italic font-normal text-sm leading-5 text-[] relative"
      name={name}
      label={
        label && (
          <div className="flex items-end mb-[8px]">
            <span className="d-block text-[#36383A] lg:text-[16px] font-[300]">
              {label}
            </span>
            <span className="text-[16px] text-[#767A7F] ml-1">{subLabel}</span>
          </div>
        )
      }
      rules={[{ required: required, message: message }]}
      style={readOnly ? { pointerEvents: 'none' } : {}}>
      <Select
        placeholder={placeholder}
        disabled={disabled}
        size={size}
        onChange={onChange}
        style={{ width: '100%' }}
        allowClear={allowClear}
        className='"w-[100%] mt-[-8px] not-italic font-normal text-base tracking-[0.5px] text-[#36383A] rounded-lg border-solid border-1px focus:border-white'
        onClear={onClear}>
        {options &&
          options.map((option) => (
            <Option
              key={option.value}
              value={option.value}
              disabled={option.disabled}>
              {option.label}
            </Option>
          ))}
      </Select>
    </Form.Item>
  );
};

export default SelectFormDefault;
