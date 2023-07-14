'use client';
import serviceSlideData from '@/data/sliders/serviceSlider';
import CardService from './CardService';
const SliderServiceResponsive = () => {
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
