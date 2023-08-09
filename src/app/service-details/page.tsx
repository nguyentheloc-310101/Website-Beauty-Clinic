/* eslint-disable @next/next/no-img-element */
'use client';
import { Doctors } from '@/components/service-details/service-doctors/Doctors';
import ServiceForm from '@/components/service-details/service-form/ServiceForm';
import ServiceFormMobile from '@/components/service-details/service-form/ServiceFormMobile';
import ServiceHero from '@/components/service-details/service-hero/ServiceHero';
import OtherServices from '@/components/service-details/service-others/OtherServices';
import ServicePayment from '@/components/service-details/service-payments/ServicePayment';
import ServiceSideBarVs1 from '@/components/service-details/service-sideBar/vs1/ServiceSideBarVs1';
import ServiceSteps from '@/components/service-details/service-steps/ServiceSteps';
import ZaloQR from '@/components/service-details/zalo-qr/ZaloQR';
import ZaloQRMobile from '@/components/service-details/zalo-qr/ZaloQRMobile';
import { IService } from '@/interfaces/service/service';
import { supabase_website } from '@/services/supabase';
import { message } from 'antd';
import { Metadata } from 'next';
import { useEffect, useState } from 'react';

const ServicePage = () => {
  const [allServices, setAllServices] = useState<IService[]>([]);
  const [serviceSelected, setServiceSelected] = useState<IService>();
  const [loading, setLoading] = useState<boolean>(false);
  const [hasDoctor, setHasDoctor] = useState<boolean>(true);
  const [hasSteps, setHasSteps] = useState<boolean>(true);

  useEffect(() => {
    fetchDataServiceDetail();
  }, []);

  const fetchDataServiceDetail = async () => {
    setLoading(true);
    const { data, error } = await supabase_website
      .from('services')
      .select('*,doctors(*)');
    if (error) {
      message.error(error.message);
      setLoading(false);
      return;
    }
    console.log('service: ', data);
    setAllServices(data);
    // setServiceSelected(data[0]);

    const allServices = data[0];
    setLoading(false);
  };
  console.log('service_selected: ', serviceSelected);
  return (
    <div>
      <ServiceHero />
      <div className="lg:flex flex-cols">
        <div>
          <div className="hidden lg:block lg:w-[430px] lg:mt-[197px] px-[16px]">
            <ServiceSideBarVs1
              allServices={allServices}
              setServiceSelected={setServiceSelected}
            />
          </div>
        </div>
        <div className="lg:my-[80px]">
          {hasDoctor && (
            <div className="px-[16px] pb-[16px] lg:mb-[80px]">
              <Doctors />
            </div>
          )}
          {hasSteps && (
            <div className="p-[16px]">
              <ServiceSteps />
            </div>
          )}
        </div>
      </div>
      <div className="hidden lg:block relative pr-[130px]">
        <div className="lg:ml-[430px]">
          <ServiceForm />
        </div>
      </div>
      <div className="relative lg:hidden h-[683px] w-full overflow-hidden">
        <ServiceFormMobile />
        <img
          src="https://ucarecdn.com/449f407d-d989-466f-b772-8412f0e620cb/-/quality/smart/-/format/auto/"
          alt="rb-service"
          className="absolute top-[-1vh] w-full h-auto "
        />
      </div>
      <div className="lg:pr-[130px] lg:pl-[430px] lg:mt-[30vh]">
        <ServicePayment />
      </div>
      <div className="hidden lg:block lg:px-[130px] lg:mt-[5%]">
        <OtherServices />
      </div>

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
