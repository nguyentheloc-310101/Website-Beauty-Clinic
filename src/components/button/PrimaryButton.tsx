import { Button } from 'antd';
import React from 'react';
interface btnProps {
  text: string;
  size: string;
  typeBtn?: 'button' | 'submit' | 'reset';
  loading?: boolean;
}

const PrimaryButton = ({ text, size, loading, typeBtn }: btnProps) => {
  let className = '';

  if (size === 'small') {
    className = 'btn-primary-small';
  } else if (size === 'big') {
    className = 'btn-primary';
  }
  return (
    <button
      type={typeBtn}
      // loading={loading}
      className={`${className}`}>
      {text}
    </button>
  );
};

export default PrimaryButton;
