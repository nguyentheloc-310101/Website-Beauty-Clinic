import { Dropdown, MenuProps, Space } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const NavigationAura = () => {
  return (
    <div className="hidden w-full text-white bg-[#bc2449] text-[14px] lg:flex items-center justify-between font-[600] xl:px-[10rem] lg:px-[7rem] md:px-[6rem] py-[10px] hover:text-[]">
      <div
        className="cursor-pointer"
        // onMouseEnter={() => handleMouseEnter(itemsPT)}
      >
        <span className="text-center hover:text-[#f7d5dd]">
          Phẩu thuật thẩm mỹ
        </span>
      </div>

      <div
        className="cursor-pointer"
        // onMouseEnter={() => handleMouseEnter(itemsTriNam)}
      >
        <span className="text-center hover:text-[#f7d5dd]">Trị nám</span>
      </div>
      <div
        className="cursor-pointer"
        // onMouseEnter={() => handleMouseEnter(itemsPhunXam)}
      >
        <span className="text-center hover:text-[#f7d5dd]">Phun xăm</span>
      </div>
      <div
        className="cursor-pointer"
        // onMouseEnter={() => handleMouseEnter(itemsTaoHinh)}
      >
        <span className="text-center hover:text-[#f7d5dd]">
          Tạo hình không xâm lấn
        </span>
      </div>

      <div
        className="cursor-pointer"
        // onMouseEnter={() => handleMouseEnter(itemsNangCo)}
      >
        <span className="text-center hover:text-[#f7d5dd]">
          Nâng cơ trẻ hóa
        </span>
      </div>
      <div
        className="cursor-pointer"
        // onMouseEnter={() => handleMouseEnter(itemsOtherService)}
      >
        <span className="text-center hover:text-[#f7d5dd]">Dịch vụ khác</span>
      </div>
    </div>
  );
};

export default NavigationAura;
