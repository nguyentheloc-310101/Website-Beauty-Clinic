import { Dropdown, MenuProps, Space } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const NavigationAura = () => {
  return (
    <div className="hidden w-full text-white bg-[#bc2449] text-[14px] lg:flex items-center justify-between font-[600] xl:px-[10rem] lg:px-[7rem] md:px-[6rem] py-[10px] hover:text-[]">
      <div
      // onMouseEnter={() => handleMouseEnter(itemsPT)}
      >
        <span className="text-center">Phẩu thuật thẩm mỹ</span>
      </div>
      <div
      // onMouseEnter={() => handleMouseEnter(itemsTriNam)}
      >
        <span className="text-center">Trị nám</span>
      </div>
      <div
      // onMouseEnter={() => handleMouseEnter(itemsPhunXam)}
      >
        <span className="text-center">Phun xăm</span>
      </div>
      <div
      // onMouseEnter={() => handleMouseEnter(itemsTaoHinh)}
      >
        <span className="text-center">Tạo hình không xâm lấn</span>
      </div>
      <div
      // onMouseEnter={() => handleMouseEnter(itemsNangCo)}
      >
        <span className="text-center">Nâng cơ trẻ hóa</span>
      </div>
      <div
        className=""
        // onMouseEnter={() => handleMouseEnter(itemsOtherService)}
      >
        <span className="text-center">Dịch vụ khác</span>
      </div>
    </div>
  );
};

export default NavigationAura;
