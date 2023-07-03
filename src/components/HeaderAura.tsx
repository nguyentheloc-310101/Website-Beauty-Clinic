import React from 'react';
import Image from 'next/image';
import Logo from '../statics/images/Logo.png';

const HeaderAura = () => {
     return (  
          <div className="w-full flex text-[#bc2449] text-[0.9rem] px-[10rem] py-[1rem] font-[500] items-center justify-between">
               <Image
                    src={Logo}
                    alt="Logo"
                    className="w-[7rem] h-auto"
               />
               <span>TRANG CHỦ</span>
               <span>GIỚI THIỆU</span>
               <span>ƯU ĐÃI</span>
               <span>LIÊN HỆ</span>
               <div className="flex flex-col items-center">
                    <span className="text-[0.8rem]">Tư vấn miễn phí</span>
                    <span className="font-bold text-black">0833.08.2222</span>
               </div>
          </div>
     );
}
 
export default HeaderAura;