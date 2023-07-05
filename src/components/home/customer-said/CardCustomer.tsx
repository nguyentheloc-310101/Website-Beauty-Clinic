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
      <div className="flex flex-col w-[286px] h-full items-center lg:justify-center lg:ml-[56px]">
        <span className="text-[#B24B64] text-center lg:text-[20px]  mt-[190px]  font-[600]">
          {customer_name}
        </span>
        <span className="text-[#B24B64] w-[316px] lg:w-[286px] lg:mb-[140px] lg:h-[123px] lg:text-[18px] lg:font-[500] text-justify lg:my-[17px]">
          &quot; {message} &quot;
        </span>
        <span className="text-[#B24B64B3] font-[400] hidden lg:text-[50px] lg:tracking-[-0.18px]">
          {signed}
        </span>
      </div>
      <div>
        <Image
          src={image}
          alt={'image-customer'}
          className="w-auto h-[273px] left-[55px] top-[-90px] lg:top-0 lg:bottom-0 lg:h-[400px] absolute lg:relative"
        />
      </div>
    </div>
  );
};
