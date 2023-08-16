'use client';
import { gradientText } from '@/constants/gradentText';
import { IServiceDetails } from '@/interfaces/service/service';
import { supabase_website } from '@/services/supabase';
import { message } from 'antd';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import CardOtherService from './cards-services-horizontal/CardOtherService';
interface OtherProps {
  otherServices?: any;
  allServices: IServiceDetails[];
}
const OtherServices = (props: OtherProps) => {
  const router = useRouter();
  const { otherServices, allServices } = props;

  useEffect(() => {
    if (otherServices) {
      filterOther(otherServices);
    }
  }, [otherServices]);
  const [otherServicesList, setOtherServicesList] = useState<IServiceDetails[]>(
    []
  );

  const handleClickOtherServices = async (idService: string) => {
    let slugService: string = '';
    if (idService) {
      const { data } = await supabase_website
        .from('services')
        .select('*')
        .eq('id', idService);
      if (data) {
        slugService = data[0].slug;
      }
      router.push(`/service-details/${slugService}`);
    } else {
      message.warning('Không tìm thấy dịch vụ');
      return;
    }
  };
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
  console.log(otherServicesList);
  return (
    <div>
      <div
        className={`lg:text-[35px] font-[800] leading-[52px] tracking-[0.25px] mb-[20px] ${gradientText}`}>
        Dịch vụ khác tại Thẩm mỹ Aura
      </div>

      <div className="cursor-pointer">
        {otherServicesList.map((item) => {
          return (
            <div
              key={item.key}
              onClick={() => handleClickOtherServices(item.service_id)}>
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
