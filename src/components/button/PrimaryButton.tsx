import React from 'react';
interface btnProps {
  text: string;
  size: string;
}

const PrimaryButton = ({ text, size }: btnProps) => {
  let className = '';

  if (size === 'small') {
    className = 'btn-primary-small';
  } else if (size === 'big') {
    className = 'btn-primary';
  }
  return <div className={className}>{text}</div>;
};

export default PrimaryButton;
