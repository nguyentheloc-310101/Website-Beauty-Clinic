/* eslint-disable @next/next/no-img-element */
'use client';
import CoverImage from '@/components/service-details/CoverImage';
import RecommendTag from '@/components/service-details/RecommendTag';
import ListCategory from '@/components/service-details/list-category/ListCategory';
import ServiceSideBarVs1 from '@/components/service-details/service-sideBar/vs1/ServiceSideBarVs1';
import ZaloQR from '@/components/service-details/zalo-qr/ZaloQR';
import ZaloQRMobile from '@/components/service-details/zalo-qr/ZaloQRMobile';
import { IService, IServiceStep } from '@/interfaces/service/service';
import { supabase_website } from '@/services/supabase';
import { message } from 'antd';
import { useEffect, useState } from 'react';

const ServicePage = () => {
  const [serviceSelected, setServiceSelected] = useState<IService>();
  const [loading, setLoading] = useState<boolean>(false);
  const [otherServices, setOtherServices] = useState<any>();
  const listTag = ['Đặt nhiều', 'Chăm sóc mặt', 'Chăm sóc body'];

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

    setServiceSelected(data[0]);
    setOtherServices(data[0]?.others);

    //hello

    setLoading(false);
  };
  console.log('serviceSelect: ', serviceSelected);
  console.log('otherServices: ', otherServices);
  return (
    <div>
      <CoverImage
        image={
          'https://ucarecdn.com/4949c747-3410-45a2-8f38-1eaaeb704691/-/quality/smart/-/format/auto/'
        }
        textAbove={'Aura nâng tầm'}
        textBeneath={'nhan sắc của bạn'}
        description={
          'Lorem ipsum dolor sit amet consectetur. Mauris maecenas et nisl eleifend pharetra risus. Id felis eu bibendum et diam. Penatibus cursus arcu purus scelerisque semper in molestie ullamcorper. Elementum et mauris ante condimentum.'
        }
      />

      <div className="relative">
        <img
          src="https://ucarecdn.com/a790035a-a601-47ca-8742-95a2ea964a47/-/preview/469x216/-/quality/smart/-/format/auto/-/filter/carris/"
          alt=""
          className="absolute z-[-999] top-0"
        />
        <div className="lg:px-[130px] lg:py-[80px]">
          <RecommendTag listTag={listTag} />
          <ListCategory />
        </div>
        <img
          src="https://ucarecdn.com/d9f5af41-2072-4677-b89c-22b38047f1d5/-/preview/-/quality/smart/-/format/auto/-/filter/carris/"
          alt=""
          className="absolute z-[-999] lg:w-[548px] lg:h-[627px] bottom-0 right-1"
        />
      </div>
      {/* <div className="lg:flex flex-cols">
        <div>
          <div className="hidden lg:block lg:w-[430px] lg:mt-[197px] px-[16px]">
            <ServiceSideBarVs1
              serviceSelected={serviceSelected}
              allServices={allServices}
              setServiceSelected={setServiceSelected}
            />
          </div>
        </div>
      </div> */}
      <div className="hidden lg:block mt-[80px] relative h-[500px]">
        <div className="absolute bottom-[-37%]">
          <ZaloQR />
        </div>
      </div>
      <div className="lg:hidden">
        <ZaloQRMobile />
      </div>
    </div>
  );
};

export default ServicePage;
