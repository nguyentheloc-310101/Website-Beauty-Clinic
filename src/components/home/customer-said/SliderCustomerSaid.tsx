/* eslint-disable @next/next/no-img-element */
import { useGeneralHomeContext } from '@/app/home/page';
import SliderCardCustomerSaid from './SliderCardCustomerSaid';
import { ICustomFeedback, INews } from '@/interfaces/home/IHome';

const SliderCustomerSaid = () => {
  const { generalData } = useGeneralHomeContext();
  const customerSaid: ICustomFeedback[] = generalData?.data.customFeedbacks;
  const news: INews[] = generalData?.data.news;
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
        <SliderCardCustomerSaid customerSaid={customerSaid} />
      </div>
      <div className="hidden text-white text-[50px] font-[800] uppercase lg:flex items-center justify-center mt-[75px]">
        Báo chí nói gì về Aura
      </div>
      <div className="hidden lg:flex items-center justify-center">
        <div className="mt-[24px] gap-[71px] flex w-[1150px] h-[130px] justify-center items-center rounded-[25px] bg-white px-2">
          {news &&
            news.map((item, key) => {
              return (
                <img
                  key={key}
                  src={item.image}
                  alt={'logo'}
                  className="w-auto h-[41px] "
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default SliderCustomerSaid;
