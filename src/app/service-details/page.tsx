/* eslint-disable @next/next/no-img-element */
import ServiceDefinition from '@/components/service-details/service-definition/ServiceDefinition';
import ServiceHero from '@/components/service-details/service-hero/ServiceHero';
import ServiceReason from '@/components/service-details/service-reason/ServiceReason';
import ServiceSteps from '@/components/service-details/service-steps/ServiceSteps';
import { gradientText } from '@/constants/gradentText';
import { Metadata } from 'next';
import LogoSvg from '../../../public/images/svg/LogoSvg';
import ServiceForm from '@/components/service-details/service-form/ServiceForm';
import OtherServices from '@/components/service-details/service-others/OtherServices';
import ZaloQR from '@/components/service-details/zalo-qr/ZaloQR';
export const metadata: Metadata = {
  title: 'Thẩm mỹ quốc tế Aura - Dịch vụ',
  description: 'Aura Beauty Clinic',
};

const ServicePage = () => {
  return (
    <div>
      <ServiceHero />
      <div className="flex flex-cols">
        <div>
          <div className="lg:w-[430px] my-[80px]">
            {/* <ServiceSideBar /> */}
          </div>
        </div>
        <div className="pr-[130px] my-[80px]">
          {/*Service information*/}
          <div className="mb-[80px]">
            <div
              className={`${gradientText} lg:text-[35px] font-[800] lg:leading-[52px] lg:track-[0.25px]`}>
              Hiểu hơn về nám
            </div>
            <ServiceDefinition />
            <ServiceReason />
          </div>
          {/*Section: Step*/}
          <ServiceSteps />
        </div>
      </div>
      {/*Section: Form advisory*/}
      <div className="relative pr-[130px]">
        <div className="ml-[430px]">
          <ServiceForm />
        </div>
        <img
          src="https://ucarecdn.com/13e7673d-1023-4915-9a0d-e7a7a882808f/-/quality/smart/-/format/auto/"
          alt="rb-service"
          className="absolute top-[-15vh] right-0 w-[90vw] h-auto "
        />
      </div>
      {/*Section: Other services*/}
      <div className="px-[130px] mt-[15%]">
        <OtherServices />
      </div>
      <div className="mt-[80px] relative h-[500px]">
        <div className="absolute bottom-[-37%]">
          <ZaloQR />
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
