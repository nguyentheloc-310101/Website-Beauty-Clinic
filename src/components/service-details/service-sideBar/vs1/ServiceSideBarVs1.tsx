'use client';
import { IService, IServiceStep } from '@/interfaces/service/service';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import React, { useState } from 'react';
import { BiSolidRightArrow } from 'react-icons/bi';

interface ServiceSideBarProps {
  allServices: IService[];
  serviceSelected?: IService;
  // setHasDoctor: any;
  // setHasSteps: any;
  // setOtherServices: any;
  // setSteps: (e: IServiceStep[]) => void;
  setServiceSelected: (e: IService) => void;
}
const ServiceSideBarVs1 = (props: ServiceSideBarProps) => {
  const {
    serviceSelected,
    allServices,
    setServiceSelected,
    // setOtherServices,
    // setHasDoctor,
    // setHasSteps,
    // setSteps,
  } = props;
  const router = useRouter();
  const [idSelected, setIdSelected] = useState<any>();

  const onSelectService = (id: string) => {
    setIdSelected(id);
    const result: IService[] = allServices.filter(
      (service) => service.id == id
    );
    if (result.length > 0) {
      setServiceSelected(result[0]);
      //   setHasDoctor(result[0].hasDoctors);
      //   setHasSteps(result[0].hasSteps);
      //   setSteps(result[0].steps);
      //   setOtherServices(result[0].others);
    }
  };

  return (
    <div className="w-full rounded-[16px] h-[100vh] flex flex-col items-center">
      <div className="text-[20px] w-full px-[24px] ml-[80px] font-[400] leading-[30px] tracking-[0.5px] text-[#36383A]">
        {allServices.map((item: any, key: number) => {
          return (
            <Link
              key={key}
              href={`/service-details/${item.slug}`}>
              <div
                key={key}
                onClick={() => {
                  onSelectService(item.id);
                }}
                className={`${
                  idSelected == item.id
                    ? ' ml-[15px] font-[800] text-[#BC2449] flex items-center justify-between pr-[40px]'
                    : 'transition ease-in-out delay-100 hover:translate-x-[2px] hover:scale-100 duration-200 hover:text-[#BC2449]'
                }  py-[12px] w-full cursor-pointer`}>
                {item.name}
                {idSelected == item.id && (
                  <span>
                    <BiSolidRightArrow className="text-[#BC2449]" />
                  </span>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceSideBarVs1;
