import React from 'react';
interface btnProps {
  text: string;
}

const PrimaryButton = ({ text }: btnProps) => {
  return <div className="btn-primary">{text}</div>;
};

export default PrimaryButton;
