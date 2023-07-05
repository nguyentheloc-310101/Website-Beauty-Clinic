import React from 'react';
import Image from 'next/image';
import wrapper from '../../../statics/images/customer-said-video/wrapper.png';
import ribbon from '../../../statics/images/customer-said-video/ribbon.png';
import text from '../../../statics/images/customer-said-video/text-customer.png';

const CustomerSaidVideo = () => {
  return (
    <>
      <div className="customer-said-container">
        <div className="relative flex items-center justify-center z-100">
          <Image
            src={text}
            alt={'text-customer'}
            className="w-[812px] h-[258px] mt-[57px] mb-[20px]"
          />
        </div>

        <section className="max-w-[1180px] mx-auto relative w-full z-50">
          <div className="pt-[56.25%] relative">
            <video
              className="absolute rounded-[40px] top-0 left-0 w-full h-full object-contain"
              controls>
              <source src="../../../statics/videos/customerSaid.mp4" />
            </video>
          </div>
        </section>

        <Image
          src={ribbon}
          alt="ribbon-img"
          className="relative z-10 top-[-650px]"
          width={2200}
        />
      </div>
    </>
  );
};

export default CustomerSaidVideo;
