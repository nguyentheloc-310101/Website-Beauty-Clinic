'use client';
import React, { useState } from 'react';
import { BiSolidRightArrow } from 'react-icons/bi';

const dummyServices = [
  {
    id: '1',
    name: 'Căng bóng',
  },
  {
    id: '2',
    name: 'Dưỡng sinh - Gội',
  },
  {
    id: '3',
    name: 'Tắm trắng',
  },
  {
    id: '4',
    name: 'Mí',
  },
  {
    id: '5',
    name: 'Mũi',
  },
  {
    id: '6',
    name: 'Béo',
  },
  {
    id: '7',
    name: 'Nám',
  },
  {
    id: '8',
    name: 'Phun xăm mày',
  },
  {
    id: '9',
    name: 'Phun xăm môi',
  },
];

const ServiceSideBarVs1 = () => {
  const [idSelected, setIdSelected] = useState<any>(null);
  const onSelectService = (id: string) => {
    setIdSelected(id);
  };
  return (
    <div className="w-full rounded-[16px] h-[100vh] flex flex-col items-center">
      <div className="text-[20px] w-full px-[24px] ml-[80px] font-[400] leading-[30px] tracking-[0.5px] text-[#36383A]">
        {dummyServices.map((item: any) => {
          return (
            <div
              onClick={() => onSelectService(item.id)}
              className={`${
                idSelected == item.id
                  ? ' ml-[15px] font-[800] text-[#BC2449] flex items-center justify-between pr-[40px]'
                  : 'transition ease-in-out delay-100 hover:translate-x-[2px] hover:scale-100 duration-200 hover:text-[#BC2449]'
              }  py-[12px] w-full cursor-pointer`}
              key={item.id}>
              {item.name}
              {idSelected == item.id && (
                <span>
                  <BiSolidRightArrow className="text-[#BC2449]" />
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceSideBarVs1;
