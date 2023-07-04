import React from 'react';
import Image from 'next/image';
import SliderCardCustomerSaid from './SliderCardCustomerSaid';
import text from '../../../statics/images/customer-said-video/text-customer.png';
import dantri from '../../../statics/images/customer-said/logo/logo-dantri.png';
import alobacsi from '../../../statics/images/customer-said/logo/logo-alobacsi.png';
import eva from '../../../statics/images/customer-said/logo/logo-eva.png';
import afamily from '../../../statics/images/customer-said/logo/logo-afamily.png';

const SliderCustomerSaid = () => {
  return (
    <div>
      <div className="background-customer-said">
        <div className="text-aura">
          <Image
            src={text}
            alt={'text-customer'}
            className="w-[812px] h-[258px] "
          />
        </div>
        <div className="flex items center justify-center">
          <SliderCardCustomerSaid />
        </div>
        <div className="text-white text-[50px] font-[800] uppercase flex items-center justify-center mt-[75px]">
          Báo chí nói gì về Aura
        </div>
        <div className="flex items-center justify-center">
          <div className="logo-container px-">
            <Image
              src={dantri}
              alt={'logo'}
              className="w-auto h-[41px] "
            />
            <Image
              src={alobacsi}
              alt={'logo'}
              className="w-auto h-[44px] "
            />
            <Image
              src={eva}
              alt={'logo'}
              className="w-auto h-[54px] "
            />
            <Image
              src={afamily}
              alt={'logo'}
              className="w-auto h-[57px] "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderCustomerSaid;
