import React from 'react';
interface btnProps {
  text: string;
  size: string;
  disabled?: boolean;
}

const PrimaryButton = ({ text, size }: btnProps) => {
  let className = '';

  if (size === 'small') {
    className = 'btn-primary-small';
  } else if (size === 'big') {
    className = 'btn-primary';
  }
  return <button className={className}>{text}</button>;
};

export default PrimaryButton;
