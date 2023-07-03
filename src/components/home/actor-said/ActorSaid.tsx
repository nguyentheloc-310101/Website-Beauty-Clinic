import React from 'react';
import Image from 'next/image';
import actor from '../../../statics/images/actor-said/actor.png';
import text from '../../../statics/images/actor-said/text.png';

const ActorSaid = () => {
  return (
    <div className="grid grid-cols-2 px-[107px] mt-[100px]">
      <div className="actor">
        <Image
          src={actor}
          alt="cover-img"
          className="scale-10"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="mt-[66px]">
        <Image
          src={text}
          alt="cover-img"
          className="text-actor"
          style={{ objectFit: 'cover' }}
        />
        <div className="ml-[30px]">
          <p className="paragraph-actor text-right">
            &quot;Cơ địa và nội tiết tố thay đổi sau khi sinh con đã từng khiến
            mình rất stress mỗi khi soi gương, da thâm nám dày và vùng da bụng
            chảy xệ. Nhưng thật may vì đã tìm được TMV Aura, chăm sóc toàn diện
            tại đây chính là quyết định đúng đắn nhất của mình.&quot;
          </p>
          <div className="w-full text-center">
            <p className="actor-declare">DIỄN VIÊN</p>
            <p className="actor-name"> {'LÊ BÊ LA'}</p>
            <p className="actor-desc">Sạch thâm nám sau 2 liệu trình</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActorSaid;
