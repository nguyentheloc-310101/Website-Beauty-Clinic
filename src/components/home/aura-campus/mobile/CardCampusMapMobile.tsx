import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { IoMdShareAlt } from 'react-icons/io';
import { Modal } from 'antd';
import { CloseCircleFilled } from '@ant-design/icons';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

interface CardCampusMapMobile {
  image: StaticImageData;
  showCampusMapMobile: boolean;
  setShowCampusMapMobile: (e: boolean) => void;
}
const CardCampusMapMobile = (props: CardCampusMapMobile) => {
  const { image, showCampusMapMobile, setShowCampusMapMobile } = props;
  return (
    <Modal
      open={showCampusMapMobile}
      footer={false}
      centered={true}
      className={'modalStyleMobile'}
      width={780}
      closeIcon={<CloseCircleFilled />}
      onOk={() => setShowCampusMapMobile(false)}
      onCancel={() => setShowCampusMapMobile(false)}>
      <div className="relative flex justify-center overflow-hidden">
        <Image
          src={image}
          alt="cover-img"
          className="h-[466px] w-[361px] rounded-[20px]"
          style={{ objectFit: 'contain' }}
        />

        <div className="absolute bottom-2 w-[320px] h-[34px] py-[8px] rounded-[8px] cursor-pointer bg-[#BC2449] mr-[7px] text-[#fff] ml-[10px]">
          <p className="h-full font-[600] text-center flex items-center justify-center text-[12px]">
            Chi tiết clinic
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default CardCampusMapMobile;
