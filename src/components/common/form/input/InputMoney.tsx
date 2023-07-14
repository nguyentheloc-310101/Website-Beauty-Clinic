import { Input } from 'antd';
import React, { useEffect, useState } from 'react';

interface Props {
  placeholder?: string;
  setNumber: any;
  number?: number;
  className?: string;
  maxNumber?: number;
  label?: string;
  subLabel?: string;
  //new 19/06/2023
  defaultValue?: number;
  required?: boolean;
  error?: boolean;
  readOnly?: boolean;
}

const InputFormatMoney = (props: Props) => {
  const {
    placeholder = 'Nhập số',
    setNumber,
    number,
    className,
    maxNumber,
    label,
    subLabel,
    //new 19/06/2023
    defaultValue,
    required,
    error,
    readOnly,
  } = props;
  const [value, setValue] = useState('');

  useEffect(() => {
    if (number && !Number.isNaN(number)) {
      const formattedValue = formatCurrency(number.toString());
      setValue(formattedValue);
      setNumber(number);
    }
  }, [number]);

  const checkMaxNumber = (max?: number, current?: number) => {
    if (!max) return true;
    if (!current) return true;
    if (current <= max) return true;
    return false;
  };

  const formatCurrency = (inputValue: string) => {
    // delete keywords are not number
    const sanitizedValue = inputValue.replace(/[^0-9]/g, '');

    //VN current
    const formattedValue = sanitizedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return formattedValue;
  };

  const handleInputChange = (event: any) => {
    const inputValue = event.target.value;
    const formattedValue = formatCurrency(inputValue);
    const numberValue = parseInt(formattedValue.replace(/,/g, ''), 10);
    if (!checkMaxNumber(maxNumber, numberValue)) return;
    setValue(formattedValue);
    if (Number.isNaN(numberValue)) {
      setNumber(null);
      return;
    }
    setNumber(numberValue);
  };

  return (
    <div>
      {label && (
        <div className="flex gap-2">
          {required ? <p className="text-[red]">*</p> : ''}
          <p className="text-[14px] font-[400] leading-[20px] text-[#1F1F1F] mb-2">
            {label}
          </p>
          <p className="text-[14px] font-[400] leading-[20px] text-[#717070] mb-2">
            {subLabel}
          </p>
        </div>
      )}
      <Input
        defaultValue={defaultValue}
        type="text"
        value={value}
        style={readOnly ? { pointerEvents: 'none' } : {}}
        onChange={handleInputChange}
        placeholder={placeholder}
        className={`rounded-md border-[#E2E8F0] border focus:border-white w-full ${className}`}
      />
      {required && error ? <p className="text-[red]">Hãy nhập giá tiền</p> : ''}
    </div>
  );
};

export default InputFormatMoney;
