/* eslint-disable @next/next/no-img-element */
import SliderCardCustomerSaid from './SliderCardCustomerSaid';

const SliderCustomerSaid = () => {
  return (
    <div className="background-customer-said">
      <div className="hidden lg:flex lg:items-center lg:justify-center">
        <img
          src={
            'https://ucarecdn.com/4f1b4f0e-d7c3-4fd2-a93b-3220db293803/-/quality/lightest/-/format/webp/'
          }
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
          <img
            src={
              'https://ucarecdn.com/7481cd64-c420-4ae6-89d7-36995c4e2a31/-/quality/lightest/-/format/webp/'
            }
            alt={'logo'}
            className="w-auto h-[41px] "
          />
          <img
            src={
              'https://ucarecdn.com/b1997dc6-5cb7-4d03-996d-fb5488efa80b/-/quality/lightest/-/format/webp/'
            }
            alt={'logo'}
            className="w-auto h-[44px] "
          />
          <img
            src={
              'https://ucarecdn.com/92e056f3-4185-4177-9a86-4ac887f8e39e/-/quality/lightest/-/format/webp/'
            }
            alt={'logo'}
            className="w-auto h-[54px] "
          />
          <img
            src={
              'https://ucarecdn.com/4b90e8f0-abbb-45b3-bc7b-cf382befd0e3/-/quality/lightest/-/format/webp/'
            }
            alt={'logo'}
            className="w-auto h-[57px] "
          />
        </div>
      </div>
    </div>
  );
};

export default SliderCustomerSaid;
