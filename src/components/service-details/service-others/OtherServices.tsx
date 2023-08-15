'use client';
import { gradientText } from '@/constants/gradentText';
import React, { useEffect, useState } from 'react';
import CardOtherService from './cards-services-horizontal/CardOtherService';
import { otherServiceData } from '@/data/other-services/OtherServiceData';
import { IService, IServiceDetails } from '@/interfaces/service/service';
interface OtherProps {
  otherServices?: any;
  allServices: IServiceDetails[];
}
const OtherServices = (props: OtherProps) => {
  const { otherServices, allServices } = props;

  useEffect(() => {
    if (otherServices) {
      filterOther(otherServices);
    }
  }, [otherServices]);
  const [otherServicesList, setOtherServicesList] = useState<IServiceDetails[]>(
    []
  );
  const filterOther = (otherServices: any) => {
    if (otherServices) {
      otherServices?.map((item: any) => {
        const result: IServiceDetails[] =
          allServices &&
          allServices?.filter((service) => service.service_id == item.id);
        if (result.length > 0) {
          setOtherServicesList((prev: any) => [...(result as any)]);
        }
      });
    }
  };

  return (
    <div>
      <div
        className={`lg:text-[35px] font-[800] leading-[52px] tracking-[0.25px] mb-[20px] ${gradientText}`}>
        Dịch vụ khác tại Thẩm mỹ Aura
      </div>

      <div className="cursor-pointer">
        {otherServicesList.map((item) => {
          return (
            <div key={item.key}>
              <CardOtherService
                image={item.image}
                desc={item.description}
                service_name={item.name}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OtherServices;
