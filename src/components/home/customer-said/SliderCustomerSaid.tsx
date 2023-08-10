/* eslint-disable @next/next/no-img-element */
import { useGeneralHomeContext } from '@/app/home/page';
import SliderCardCustomerSaid from './SliderCardCustomerSaid';
import { ICustomFeedback, INews } from '@/interfaces/home/IHome';
import Link from 'next/link';

const SliderCustomerSaid = () => {
  const { generalData } = useGeneralHomeContext();
  const customerSaid: ICustomFeedback[] = generalData?.data.customFeedbacks;
  const news: INews[] = generalData?.data.news;
  return (
    <div className="background-customer-said">
      <div className="hidden lg:flex lg:items-center lg:justify-center">
        <div className="mt-[80px] text-[#fff]  font-[800] text-[31px] ">
          <div className="lg:text-[56px] font-[900] lg:leading-[64px] uppercase ">
            Khách hàng
          </div>
          <div className="font-service-card lg:text-[120px] font-[400] lg:leading-[148px]">
            nói gì về Aura?
          </div>
        </div>
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
                <Link
                  target="blank"
                  href={item.url}
                  key={key}>
                  <img
                    src={item.image}
                    alt={'logo'}
                    className="w-auto h-[41px] "
                  />
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default SliderCustomerSaid;
