import React from 'react';
import Image from 'next/image';
import wrapper from '../../../statics/images/customer-said/wrapper.png';
import ribbon from '../../../statics/images/customer-said/ribbon.png';
import text from '../../../statics/images/customer-said/text-customer.png';

const CustomerSaid = () => {
  return (
    <>
      <div className="relative h-[1350px]">
        <div className="relative flex items-center justify-center z-50 bottom-[-262px]">
          <Image
            src={text}
            alt={'text-customer'}
            className="w-[812px] h-[258px] "
          />
        </div>

        <Image
          src={wrapper}
          alt="cover-img"
          className="scale-10 h-[913px]"
        />
        <section className="max-w-[1180px] mx-auto absolute-center w-full">
          <div className="pt-[56.25%] relative">
            <video
              className="absolute rounded-[40px] top-0 left-0 z-50 w-full h-full object-contain"
              width="100%"
              height="100%"
              controls>
              <source src="../../../statics/videos/customerSaid.mp4" />
            </video>
            {/* <video
              src={customerSaid}
              className="absolute rounded-[40px] top-0 left-0 z-50 w-full h-full object-contain"
              width="100%"
              height="100%"
              controls
            /> */}
          </div>
        </section>

        <Image
          src={ribbon}
          alt="ribbon-img"
          className=" absolute scale-10 bottom-2 h-[541px]  "
        />
      </div>
    </>
  );
};

export default CustomerSaid;
