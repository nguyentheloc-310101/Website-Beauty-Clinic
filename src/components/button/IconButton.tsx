import React from 'react';
interface IconButtonProps {
  Icon: React.ForwardRefExoticComponent<any>;
  active?: boolean;
  onClick?: any;
}
const IconButton = ({ Icon, active, onClick }: IconButtonProps) => {
  return (
    <div
      className={`w-[42px]  h-[42px] border rounded-md flex items-center justify-between ${
        active == true
          ? 'bg-[#5A68ED]'
          : 'cursor-pointer bg-white border-[#B9BDC1]'
      }`}
      onClick={onClick}>
      <div className="w-full flex justify-center items-end"></div>
    </div>
  );
};
export default IconButton;
