import React from 'react';
import Image, { StaticImageData } from 'next/image';
interface CardCustomerProps {
  customer_name: string;
  message: string;
  signed: string;
  image: StaticImageData;
}
export const CardCustomer = (props: CardCustomerProps) => {
  const { customer_name, message, signed, image } = props;
  return (
    <div className="card-customer">
      <div className="flex flex-col w-[286px] h-full items-center justify-center ml-[56px]">
        <span className="text-[#B24B64] text-[20px] font-[600]">
          {customer_name}
        </span>
        <span className="text-[#B24B64] w-[286px] h-[123px] text-[18px] font-[500] text-justify my-[17px]">
          &quot; {message} &quot;
        </span>
        <span className="text-[#B24B64B3] font-[400] text-[50px] tracking-[-0.18px]">
          {signed}
        </span>
      </div>
      <div>
        <Image
          src={image}
          alt={'image-customer'}
          className="w-auto h-[400px]"
        />
      </div>
    </div>
  );
};
