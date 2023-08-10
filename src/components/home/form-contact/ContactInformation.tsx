/* eslint-disable @next/next/no-img-element */
import FormContact from './FormContact';

const ContactInformation = () => {
  return (
    <div className="contact-container">
      <div className="relative flex flex-col items-end justify-center z-10">
        <div className="text-[#fff]  text-right uppercase text-[19px] lg:text-[24px] lg:leading-[32px] font-[900]">
          Miễn phí thăm khám <br />& soi da
        </div>
        <div className="font-service-card mb-[80px] text-[#fff] text-[41px] lg:leading-[78px] lg:text-[70px] font-[400]">
          Đặt lịch ngay
        </div>

        <FormContact />
      </div>

      <div className="hidden md:flex md:flex-col-reverse md:h-[900px] md:w-auto ">
        <img
          src={
            'https://ucarecdn.com/ca7c18ca-e877-4294-9028-1e70a6aa4c02/-/preview/1698x1024/-/quality/lightest/-/format/webp/'
          }
          alt={'text-customer'}
          className="w-[653px] h-auto"
        />
      </div>
    </div>
  );
};

export default ContactInformation;
