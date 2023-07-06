import React, { useState } from 'react';
import Image from 'next/image';
import wrapper from '../../../statics/images/customer-said-video/wrapper.png';
import ribbon from '../../../statics/images/customer-said-video/ribbon.png';
import text from '../../../statics/images/customer-said-video/text-customer.png';

const CustomerSaidVideo = () => {
  const [youtubeID] = useState('IEDEtZ4UVtI');
  return (
    <>
      <div className="customer-said-container">
        <div className="relative flex items-center justify-center z-100">
          <Image
            src={text}
            alt={'text-customer'}
            className="md:w-auto md:h-[208px] md:mt-[47px] md:mb-[20px]"
          />
        </div>

        <section className="max-w-[980px] mx-auto relative w-full z-50">
          <div className="pt-[56.25%] relative">
            {/* <video
              className="absolute rounded-[40px] top-0 left-0 w-full h-full object-contain"
              controls>
              <source
                src="https://www.youtube.com/watch?v=CNG8u-uNprM&list=RDwQANVR4vqXI&index=3"
                type="video/mp4"
              />
            </video> */}
            <iframe
              src="https://www.youtube.com/embed/mfZ-KSP_iA4?&autoplay=1&loop=1&rel=0&showinfo=0&color=white&iv_load_policy=3&playlist=mfZ-KSP_iA4"
              className="absolute rounded-[40px] top-0 left-0 w-full h-full object-contain"
              allowFullScreen
            />
          </div>
        </section>

        <Image
          src={ribbon}
          alt="ribbon-img"
          className="sm:hidden relative z-10 md:hidden lg:top-[-850px]"
          width={2000}
        />
      </div>
    </>
  );
};

export default CustomerSaidVideo;
