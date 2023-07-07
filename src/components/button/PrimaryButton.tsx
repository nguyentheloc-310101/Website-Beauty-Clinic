import React from 'react';
interface btnProps {
  text: string;
  size: string;
  onClick?: any;
}

const PrimaryButton = ({ text, size, onClick }: btnProps) => {
  let className = '';

  if (size === 'small') {
    className = 'btn-primary-small';
  } else if (size === 'big') {
    className = 'btn-primary';
  }
  return (
    <div
      onClick={onClick}
      className={className}>
      {text}
    </div>
  );
};

export default PrimaryButton;
