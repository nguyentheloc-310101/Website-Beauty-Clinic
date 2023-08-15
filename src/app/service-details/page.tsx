/* eslint-disable @next/next/no-img-element */
'use client';
import ServiceSideBarVs1 from '@/components/service-details/service-sideBar/vs1/ServiceSideBarVs1';
import { IService, IServiceStep } from '@/interfaces/service/service';
import { supabase_website } from '@/services/supabase';
import { message } from 'antd';
import { useEffect, useState } from 'react';

const ServicePage = () => {
  const [allServices, setAllServices] = useState<IService[]>([]);
  const [serviceSelected, setServiceSelected] = useState<IService>();
  const [loading, setLoading] = useState<boolean>(false);
  const [otherServices, setOtherServices] = useState<any>();

  useEffect(() => {
    fetchDataServiceDetail();
  }, []);

  const fetchDataServiceDetail = async () => {
    setLoading(true);
    const { data, error } = await supabase_website.from('services').select('*');
    if (error) {
      message.error(error.message);
      setLoading(false);
      return;
    }
    console.log('service: ', data);
    setAllServices(data);
    setServiceSelected(data[0]);
    setOtherServices(data[0]?.others);

    //hello

    setLoading(false);
  };
  console.log('serviceSelect: ', serviceSelected);
  console.log('otherServices: ', otherServices);
  return (
    <div>
      {/* <ServiceHero serviceSelected={serviceSelected} /> */}
      <div className="lg:flex flex-cols">
        <div>
          <div className="hidden lg:block lg:w-[430px] lg:mt-[197px] px-[16px]">
            <ServiceSideBarVs1
              serviceSelected={serviceSelected}
              allServices={allServices}
              setServiceSelected={setServiceSelected}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
