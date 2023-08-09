'use client';
import serviceSlideData from '@/data/sliders/serviceSlider';
import CardService from './CardService';
import { useGeneralHomeContext } from '@/app/home/page';
import { IHomeService } from '@/interfaces/home/IHome';
const SliderServiceResponsive = () => {
  const { generalData } = useGeneralHomeContext();
  const serviceList: IHomeService[] = generalData?.data.services;
  return (
    <div className="flex flex-wrap items-center justify-center gap-[15px]">
      {serviceList?.slice(0, 4).map((item, key) => {
        return (
          <CardService
            key={key}
            image={item.image}
          />
        );
      })}
    </div>
  );
};

export default SliderServiceResponsive;
