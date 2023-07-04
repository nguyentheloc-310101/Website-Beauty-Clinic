import React from 'react';
import Image from 'next/image';
import girls from '../../../statics/images/contact-inform/girls.png';
import FormContact from './FormContact';

const ContactInformation = () => {
  return (
    <div className="contact-container">
      <div className="absolute left-[60px] top-[105px] w-[720px] flex flex-col z-10 ml-[140px]">
        <div className="text-[#fff] text-[75px] font-[400] uppercase">
          Đặt lich ngay
        </div>
        <div className="text-[#fff] text-[35px] font-[500]">
          Miễn phí thăm khám & soi da
        </div>
        <FormContact />
      </div>

      <div className="girls-contact">
        <Image
          src={girls}
          alt={'text-customer'}
          className="w-[699px] h-auto"
        />
      </div>
    </div>
  );
};

export default ContactInformation;
