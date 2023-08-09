import React from 'react';
import ServiceStepCard from './service-step-card/ServiceStepCard';
import { gradientText } from '@/constants/gradentText';
import { IServiceStep } from '@/interfaces/service/service';

interface ServiceStepCardProps {
  steps: IServiceStep[];
}
const ServiceSteps = (props: ServiceStepCardProps) => {
  const { steps } = props;

  return (
    <>
      <div
        className={`${gradientText} sticky lg:text-[35px] font-[800] lg:leading-[52px] lg:tracking-[0.25px]`}>
        Các bước điều trị tại Thẩm mỹ viện Aura
      </div>
      <div className="overflow-x-auto">
        <div className=" w-fit mt-[8px] lg:mt-[20px] gap-[16px] lg:w-fit flex flex-row lg:flex-wrap lg:gap-[20px]">
          {steps?.map((step: IServiceStep, key: number) => {
            return (
              <ServiceStepCard
                key={key}
                step={key + 1}
                image={step.image}
                desc={step.description}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ServiceSteps;
