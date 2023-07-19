import Image from 'next/image';
import afamily from '../../../statics/images/customer-said/logo/logo-afamily.png';
import alobacsi from '../../../statics/images/customer-said/logo/logo-alobacsi.png';
import dantri from '../../../statics/images/customer-said/logo/logo-dantri.png';
import eva from '../../../statics/images/customer-said/logo/logo-eva.png';
import text from '../../../statics/images/customer-said/textImg.png';
import SliderCardCustomerSaid from './SliderCardCustomerSaid';
//TODO: optimize image
const SliderCustomerSaid = () => {
  return (
    <div className="background-customer-said">
      <div className="hidden lg:flex lg:items-center lg:justify-center">
        <Image
          src={text}
          alt={'text-customer'}
          className="w-[812px] h-[258px] mt-[87px] mb-[43px]"
        />
      </div>
      <div className="lg:hidden flex items-center justify-center z-10">
        <div className="mt-[45px] text-[#fff]  font-[800] text-[31px] w-[220px] h-[62px]">
          Khách hàng nói gì về Aura
        </div>
      </div>
      <div className="flex items center justify-center">
        <SliderCardCustomerSaid />
      </div>
      <div className="hidden text-white text-[50px] font-[800] uppercase lg:flex items-center justify-center mt-[75px]">
        Báo chí nói gì về Aura
      </div>
      <div className="hidden lg:flex items-center justify-center">
        <div className="mt-[24px] gap-[71px] flex w-[1150px] h-[130px] justify-center items-center rounded-[25px] bg-white px-2">
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
  );
};

export default SliderCustomerSaid;
