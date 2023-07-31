/* eslint-disable @next/next/no-img-element */
import { Doctors } from '@/components/service-details/service-doctors/Doctors';
import ServiceForm from '@/components/service-details/service-form/ServiceForm';
import ServiceFormMobile from '@/components/service-details/service-form/ServiceFormMobile';
import ServiceHero from '@/components/service-details/service-hero/ServiceHero';
import OtherServices from '@/components/service-details/service-others/OtherServices';
import ServicePayment from '@/components/service-details/service-payments/ServicePayment';
import ServiceSteps from '@/components/service-details/service-steps/ServiceSteps';
import ZaloQR from '@/components/service-details/zalo-qr/ZaloQR';
import ZaloQRMobile from '@/components/service-details/zalo-qr/ZaloQRMobile';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Thẩm mỹ quốc tế Aura - Dịch vụ',
  description: 'Aura Beauty Clinic',
};

const ServicePage = () => {
  return (
    <div>
      <ServiceHero />
      <div className="lg:flex flex-cols">
        <div>
          <div className="lg:w-[430px] lg:my-[80px]"></div>
        </div>
        <div className="lg:my-[80px]">
          <div className="px-[16px] pb-[16px] lg:mb-[80px]">
            <Doctors />
          </div>
          <div className="p-[16px]">
            <ServiceSteps />
          </div>
        </div>
      </div>
      <div className="hidden lg:block relative pr-[130px]">
        <div className="lg:ml-[430px]">
          <ServiceForm />
        </div>
        <img
          src="https://ucarecdn.com/13e7673d-1023-4915-9a0d-e7a7a882808f/-/quality/smart/-/format/auto/"
          alt="rb-service"
          className="absolute top-[-15vh] right-0 w-[90vw] h-auto "
        />
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
