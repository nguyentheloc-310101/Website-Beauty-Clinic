/* eslint-disable @next/next/no-img-element */
import FormContact from './FormContact';

const ContactInformation = () => {
  return (
    <div className="contact-container">
      <div className="relative flex flex-col items-end justify-center z-10">
        <div className="text-[#fff] text-[41px] lg:text-[75px] font-[400] uppercase">
          Đặt lịch ngay
        </div>
        <div className="text-[#fff] text-[19px] lg:text-[35px] font-[500]">
          Miễn phí thăm khám & soi da
        </div>
        <FormContact />
      </div>

      <div className="hidden md:flex md:flex-col-reverse md:h-[900px] md:w-auto ">
        <img
          src={
            'https://ucarecdn.com/ca7c18ca-e877-4294-9028-1e70a6aa4c02/-/preview/1698x1024/-/quality/lightest/-/format/webp/'
          }
          alt={'text-customer'}
          className="w-[699px] h-auto"
        />
      </div>
    </div>
  );
};

export default ContactInformation;
