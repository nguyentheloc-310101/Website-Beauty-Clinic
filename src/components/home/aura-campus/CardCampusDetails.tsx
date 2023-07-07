import { Modal } from 'antd';
import Image, { StaticImageData } from 'next/image';

import React from 'react';

interface CardCampusDetailsProps {
  image: StaticImageData;
  name: string;
  address: string;
  time: string;
  map: StaticImageData;
  setIsDetails: (e: boolean) => void;
  isDetails: boolean;
}

const CardCampusDetails = (props: CardCampusDetailsProps) => {
  const { name, address, time, image, map, setIsDetails, isDetails } = props;
  return (
    <Modal
      open={isDetails}
      footer={false}
      centered={true}
      className="modalStyle"
      width={780}
      onOk={() => setIsDetails(false)}
      onCancel={() => setIsDetails(false)}>
      <div className="grid grid-cols-2 gap-[20px]">
        <div>
          <Image
            src={image}
            alt="cover-img"
            className="scale-10 h-[288px] w-[380px] rounded-tl-[40px]"
            style={{ objectFit: 'cover' }}
          />
          <div className="px-[17px] mt-2 w-full">
            <div className="mb-2 font-[800] leading-[140%] text-[25px] text-[#fff]">
              {name}
            </div>
            <p className="text-neutral-ng-0 text-white font-[400] leading-[140%] text-[16px]">
              {address}
            </p>
            <p className="text-neutral-ng-0 text-white font-[400] leading-[140%] text-[16px] mt-[12px]">
              {time}
            </p>
          </div>
          <div className="flex w-full h-[55px] justify-between px-[30px] mb-[40px]">
            <div className="w-[128px] h-[36px] hover:w-[129px] hover:h-[37px] bg-[#fff] rounded-[8px] cursor-pointer border-[#BC2449]">
              <p className="text-[#BF264B] h-full font-[600] text-center flex items-center justify-center">
                Đặt dịch vụ
              </p>
            </div>
            <div className="w-[128px] h-[36px] hover:w-[129px] hover:h-[37px] rounded-[8px] cursor-pointer bg-[#BC2449] hover:bg-[#fff] text-[#fff]  hover:text-[#BC2449] ml-[30px]">
              <p className="h-full font-[600] text-center flex items-center justify-center">
                Gọi ngay
              </p>
            </div>
          </div>
        </div>

        <div>
          <Image
            src={map}
            alt="cover-img"
            className="h-[520px] w-[380px] rounded-r-[40px]"
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </Modal>
  );
};

export default CardCampusDetails;
