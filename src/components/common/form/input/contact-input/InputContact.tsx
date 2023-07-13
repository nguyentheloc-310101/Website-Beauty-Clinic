import React from 'react';

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
      <label className="block mb-1 text-[#BF264B] lg:text-[21px] font-[500]">
        {label}
      </label>
      <input
        onChange={onChange}
        name={name}
        value={value}
        className="input-contact"
        placeholder={placeholder}
      />
    </div>
  );
};
