import React from 'react';
import imageCustomer from '../../../statics/images/customer-said/customers/customer2.png';
import Image from 'next/image';

/*image will be add later*/
interface CardProps {
  customer_name: string;
  text: string;
  //   image
}

const SliderCardCustomerSaid = () => {
  return (
    <div>
      <div className="card-slider-customer ">
        <div className="flex flex-col w-[286px] h-full items-center justify-center ml-[56px]">
          <span className="text-[#B24B64] text-[20px] font-[600]">
            Chị Ngọc - Aura HCM
          </span>
          <span className="text-[#B24B64] w-[286px] h-[123px] text-[18px] font-[500] text-justify my-[17px]">
            &quot; Đừng có dại nghe lời người này người kia chỉ bôi kem thuốc gì
            hết nám, chị sợ lắm rồi. Phải đến Aura gặp bác sĩ da liệu, soi da
            mới sạch nám được. &quot;
          </span>
          <span className="text-[#B24B64B3] font-[400] text-[50px] tracking-[-0.18px]">
            Ngọc
          </span>
        </div>
        <div>
          <Image
            src={imageCustomer}
            alt={'image-customer'}
            className="w-auto h-[400px]"
          />
        </div>
      </div>
    </div>
  );
};

export default SliderCardCustomerSaid;
