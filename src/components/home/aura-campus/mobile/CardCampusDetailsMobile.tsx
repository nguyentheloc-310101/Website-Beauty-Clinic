/* eslint-disable @next/next/no-img-element */
import { IoMdShareAlt } from 'react-icons/io';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import { ListImageDetails } from '@/data/sliders/campusSlider';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import Link from 'next/link';
interface CampusDetailsMobile {
  image: any;
  image_list: ListImageDetails[];
  name: string;
  address: string;
  open: string;
  close: string;
  where?: 'contact' | 'home' | '';

  setShowCampusMapMobile: (e: boolean) => void;
}
const CardCampusDetailsMobile = (props: CampusDetailsMobile) => {
  const { name, open, close, address, image, where, setShowCampusMapMobile } =
    props;
  return (
    <div className="flex justify-center ">
      <div className="rounded-[20px] text-white">
        <div className="h-[288px] w-[350px]">
          <img
            src={image}
            alt="cover-img"
            className="h-[288px] w-[361px] rounded-t-[20px]"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="px-[16px] mt-2 w-full">
          <div className="mb-2 font-[800] leading-[140%] text-[16px] ">
            {name}
          </div>
          <p className="text-neutral-ng-0 text-white font-[400] leading-[140%] text-[13px]">
            {address}
          </p>
          <div className="flex items-center justify-between">
            <p className="text-neutral-ng-0 text-white font-[400] leading-[140%] text-[13px] mt-[12px]">
              {open} - {close}
            </p>
            <div
              className="flex h-full"
              onClick={() => setShowCampusMapMobile(true)}>
              <IoMdShareAlt className="w-[18px] h-[19px] mt-[15px]" />
            </div>
          </div>
        </div>
        {where == 'contact' || '' ? (
          <div className="flex w-full justify-center mt-[12px]">
            <div className="w-[152px] h-[32px] px-[16px] py-[8px] bg-[#fff] rounded-[8px] border-[#BC2449]">
              <p className="text-[#BF264B] font-[600] text-center flex items-center justify-center text-[12px]">
                Đặt dịch vụ
              </p>
            </div>
            <div className="w-[152px] h-[34px] py-[8px] rounded-[8px] cursor-pointer bg-[#BC2449]  text-[#fff]  ml-[10px]">
              <p className="h-full font-[600] text-center flex items-center justify-center text-[12px]">
                Gọi ngay
              </p>
            </div>
          </div>
        ) : (
          <div className="flex w-full justify-start mt-[12px] px-[16px]">
            <div className="w-full h-[32px] px-[16px] py-[8px] bg-[#fff] rounded-[8px] border-[#BC2449]">
              <Link href="/booking">
                <p className="text-[#BF264B] font-[600] text-center flex items-center justify-center text-[12px]">
                  Đặt hẹn ngay
                </p>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardCampusDetailsMobile;
