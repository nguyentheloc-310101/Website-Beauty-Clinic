'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '../statics/images/live-commerce/Logo.png';

const HeaderAura = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className="w-full h-[100px] flex  px-[235px] py-[1rem] items-center">
      <Image
        src={Logo}
        alt="Logo"
        className="w-[103px] h-[45px]"
      />
      <div className="flex ml-[10%] w-full font-[600] text-[#bc2449] text-[16px] items-center justify-between">
        <span>TRANG CHỦ</span>
        <span>GIỚI THIỆU</span>
        <span>ƯU ĐÃI</span>
        <span>LIÊN HỆ</span>
        <div className="flex flex-col items-center">
          <span className="text-[16px] font-[500px]">Tư vấn miễn phí</span>
          <span className="font-[700px] text-[18px] text-black">
            0833.08.2222
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeaderAura;
