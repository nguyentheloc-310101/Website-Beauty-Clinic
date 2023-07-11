import React from 'react';
interface VoucherButtonProps {
  isAdviseCard: boolean;
  setIsAdviceCard: (e: boolean) => void;
}

const VoucherButton = ({
  isAdviseCard,
  setIsAdviceCard,
}: VoucherButtonProps) => {
  return (
    <div
      className="voucher-button-bg cursor-pointer"
      onClick={() => {
        console.log('726376217');
        setIsAdviceCard(!isAdviseCard);
      }}>
      <div className="text-[#fff] uppercase font-[900] text-[10px] md:text-[20px] text-center p-2">
        <span className="">ƯU ĐÃI</span>
        <br /> MỚI NHẤT
      </div>
    </div>
  );
};

export default VoucherButton;
