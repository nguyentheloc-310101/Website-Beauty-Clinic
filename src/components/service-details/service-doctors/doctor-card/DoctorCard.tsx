/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { gradientText } from '@/constants/gradentText';
import { DownArrowSvg } from '../../../../../public/icons/DownArrowSvg';
interface DoctorCardProps {
  name: string;
  image: any;
  experience: number;
  desc_doctor: string;
  major: string;
}

const DoctorCard = (props: DoctorCardProps) => {
  const { name, image, experience, desc_doctor, major } = props;
  return (
    <div className="w-full h-auto rounded-[16px] p-[16px] border gap-[16px] flex lg:rounded-[20px] lg:flex-col lg:w-[430px] lg:h-auto bg-white">
      <div className="w-[92px] h-full flex items-center justify-center lg:w-full lg:h-[322px] lg:object-contain">
        <img
          src={image}
          alt="doctor-image"
          className="w-full h-full scale-100"
        />
      </div>
      <div className="w-full lg:p-[20px]">
        <div className="flex items-center justify-between">
          <div
            className={`${gradientText} text-[12px] leading-[18px] lg:text-[24px] font-[800] lg:leading-[36px]`}>
            BS.CKI <br />
            <span>{name}</span>
          </div>
          <div>
            <DownArrowSvg />
          </div>
        </div>

        <div className="text-[10px] leading-[14px] lg:text-[16px] font-[400] lg:leading-[24px] lg:mt-[8px] text-[#36383A] lg:tracking-[0.5px]">
          <span className="font-[700]">{experience} năm</span> kinh nghiệm
        </div>
        <div className="hidden lg:block lg:py-[16px] lg:text[16px] font-[200] lg:leading-[24px] lg:tracking-[0.5px]">
          {desc_doctor}
        </div>
        <div className="text-[10px] leading-[14px] lg:text-[16px] font-[400] text-[#36383A] lg:leading-[24px] lg:tracking-[0.5px]">
          Chuyên: <span className="font-[700]">{major}</span>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
