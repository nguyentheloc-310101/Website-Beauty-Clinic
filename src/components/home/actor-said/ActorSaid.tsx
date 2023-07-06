import React from 'react';
import Image from 'next/image';
import actor from '../../../statics/images/actor-said/actor.png';
import text from '../../../statics/images/actor-said/text.png';

const ActorSaid = () => {
  return (
    <div className="grid grid-cols-2 lg:px-[107px] sm:mt-[80px] lg:mt-[100px] sm:h-fit">
      <div className="col-span-1 md:w-[555px] md:h-[891px]">
        <Image
          src={actor}
          alt="cover-img"
          className="scale-10"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="col-span-1 lg:mt-[66px]">
        <Image
          src={text}
          alt="cover-img"
          className="md:w-[582px] md:h-[191px] w-[150px] mr-[20px] h-auto"
          style={{ objectFit: 'cover' }}
        />
        <div className="lg:ml-[30px] text-right">
          <div className="text-[10px] font-[400]  lg:ml-[40px] w-[150px] text-[#414141] lg:w-[508px] lg:h-[264px] lg:text-[22px] lg:font-[300]">
            &quot;Cơ địa và nội tiết tố thay đổi sau khi sinh con đã từng khiến
            mình rất stress mỗi khi soi gương, da thâm nám dày và vùng da bụng
            chảy xệ. Nhưng thật may vì đã tìm được TMV Aura, chăm sóc toàn diện
            tại đây chính là quyết định đúng đắn nhất của mình.&quot;
          </div>
          <div className="w-full text-center h-[40px]">
            <div className="text-[#4f4f4f] mt-[5px] italic sm:font-[300] text-[9px] uppercase lg:font-[100] lg:text-[27px]">
              diễn viên
            </div>
            <div className="font-[600] italic sm:text-[21px] text-transparent bg-clip-text bg-gradient-to-r from-[#BF264B] to-[#DF4B6E] lg:font-[600] lg:text-[61px]">
              {'LÊ BÊ LA'}
            </div>
            <div className=" sm:font-[500] text-transparent bg-clip-text bg-gradient-to-r from-[#BF264B] to-[#DF4B6E] mr-[20px] text-[8px] lg:text-[24px] lg:font-[500]">
              Sạch thâm nám sau 2 liệu trình
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActorSaid;
