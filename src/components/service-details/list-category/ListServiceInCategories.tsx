import { IServiceDetails } from '@/interfaces/service/service';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

type ListServiceInCategoriesProps = {
  listService: IServiceDetails[];
};

const ListServiceInCategories = (props: ListServiceInCategoriesProps) => {
  const { listService } = props;
  console.log('listService', listService);
  return (
    <div className="flex flex-wrap lg:items-start lg:justify-start lg:gap-[10px] h-auto">
      {listService &&
        listService.map((service, index) => {
          console.log(service as any);
          if ((service as any)['service-details']?.length == 0) return null;
          return (
            <Link
              key={index}
              href={`/service-details/${(service as any).slug}`}>
              <div className="flex cursor-pointer flex-col lg:border border-none lg:gap-[8px] lg:w-[366px] lg:p-[20px] lg:h-[108px] hover:rounded-[20px] hover:bg-[#fff] hover:border hover:border-[#BC2449] text-[#36383A]">
                <div className="lg:text-[24px] font-[600] lg:leading-[36px]">
                  {service.name}
                </div>
                <div className="lg:text-[16px] font-[300] lg:leading-[24px] lg:tracking-[0.5px]">
                  Tìm hiểu thêm
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default ListServiceInCategories;
