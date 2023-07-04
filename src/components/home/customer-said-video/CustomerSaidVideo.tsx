import React from 'react';
import Image from 'next/image';
import wrapper from '../../../statics/images/customer-said-video/wrapper.png';
import ribbon from '../../../statics/images/customer-said-video/ribbon.png';
import text from '../../../statics/images/customer-said-video/text-customer.png';

const CustomerSaidVideo = () => {
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
        <section className="max-w-[1180px] mx-auto absolute-center w-full z-10">
          <div className="pt-[56.25%] relative">
            <video
              className="absolute rounded-[40px] top-0 left-0 w-full h-full object-contain"
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
          className="absolute bottom-12"
          width={2200}
          height={541}
        />
      </div>
    </>
  );
};

export default CustomerSaidVideo;
