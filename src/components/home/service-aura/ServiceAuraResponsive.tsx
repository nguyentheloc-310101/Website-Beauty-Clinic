'use client';
import serviceSlideData from '@/data/sliders/serviceSlider';
import CardService from './CardService';
import { useGeneralHomeContext } from '@/app/home/page';
import { IHomeService } from '@/interfaces/home/IHome';
const SliderServiceResponsive = () => {
  const { generalData, setGeneralData } = useGeneralHomeContext();
  const serviceList: IHomeService[] = generalData?.services;
  return (
    <div className="flex flex-wrap items-center justify-center gap-[15px]">
      {serviceSlideData.slice(0, 4).map((item) => {
        return (
          <CardService
            key={item.key}
            image={item.image}
            alt={item.alt}
          />
        );
      })}
    </div>
  );
};

export default SliderServiceResponsive;
