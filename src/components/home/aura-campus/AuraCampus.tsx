import Image from 'next/image';
import dongThap from '../../../statics/images/campus/dongthap.png';
import caMau from '../../../statics/images/campus/camau.png';
import kienGiang from '../../../statics/images/campus/kiengiang.png';

import {
  AiFillCaretLeft,
  AiFillCaretRight,
  AiOutlineRight,
} from 'react-icons/ai';
import IconButton from '@/components/button/iconButton';
const IconLeftArrow = AiOutlineRight;

const AuraCampus = () => {
  return (
    <div>
      <div className="flex items-center justify-between px-[130px]">
        <div className="flex font-[800] text-[49px] leading-[140%] text-[#bc2449] ">
          Bạn có hẹn cùng Aura
        </div>
        <div className="flex items-center text-[#BF264B] text-[38px] font-[300] gap-[40px]">
          {' '}
          <AiFillCaretLeft />
          Xem thêm
          <AiFillCaretRight />
        </div>
      </div>
      <div className="flex items-center px-[130px] gap-[40px] mt-[40px]">
        <div className="w-[380px] rounded-[40px] overflow-hidden shadow-lg">
          <Image
            src={dongThap}
            alt="cover-img"
            className="scale-10  h-[380px] "
            style={{ objectFit: 'cover' }}
          />
          <div className="px-6 py-4">
            <div className="mb-2 font-[800] leading-[140%] text-[25px] text-[#bf264b]">
              Thẩm mỹ viện Quốc tế Aura - Đồng Tháp
            </div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur
            </p>
          </div>
        </div>
        <div className="w-[380px] rounded-[40px] overflow-hidden shadow-lg">
          <Image
            src={caMau}
            alt="cover-img"
            className="scale-10  h-[380px] "
            style={{ objectFit: 'cover' }}
          />
          <div className="px-6 py-4">
            <div className="mb-2 font-[800] leading-[140%] text-[25px] text-[#bf264b]">
              Thẩm mỹ viện Quốc tế Aura - Cà Mau
            </div>

            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur
              {/* <IconButton Icon={IconLeftArrow} /> */}
            </p>
          </div>
        </div>
        <div className="w-[380px] rounded-[40px] overflow-hidden shadow-lg">
          <Image
            src={kienGiang}
            alt="cover-img"
            className="scale-10  h-[380px] "
            style={{ objectFit: 'cover' }}
          />
          <div className="px-6 py-4">
            <div className="mb-2 font-[800] leading-[140%] text-[25px] text-[#bf264b]">
              Thẩm mỹ viện Quốc tế Aura - Kiên Giang
            </div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuraCampus;
