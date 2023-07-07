import React from 'react';
import Image from 'next/image';
import girls from '../../../statics/images/contact-inform/girls.png';
import FormContact from './FormContact';

const ContactInformation = () => {
  return (
    <div className="contact-container">
      <div className="relative flex flex-col items-center justify-center lg:absolute lg:left-[60px] lg:top-[105px] lg:w-[720px] lg:flex lg:flex-col z-10 lg:ml-[140px]">
        <div className="text-[#fff] text-[41px] lg:text-[75px] font-[400] uppercase">
          Đặt lich ngay
        </div>
        <div className="text-[#fff] text-[19px] lg:text-[35px] font-[500]">
          Miễn phí thăm khám & soi da
        </div>
        <FormContact />
      </div>

      <div className="hidden md:flex md:flex-col-reverse md:h-[900px] md:w-auto md:mr-[245px]">
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
