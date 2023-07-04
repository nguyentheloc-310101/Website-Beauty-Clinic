import React from 'react';

interface InputContactProps {
  label: string;
  placeholder?: string;
}
export const InputContact = (props: InputContactProps) => {
  const { label, placeholder } = props;
  return (
    <div className="">
      <label className="block mb-1 text-[#BF264B] text-[21px] font-[500]">
        {label}
      </label>
      <input
        className="input-contact"
        placeholder={placeholder}
      />
    </div>
  );
};
