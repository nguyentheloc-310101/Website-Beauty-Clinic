import React from 'react';
import FooterLeftImg from '../statics/images/Footer_left.png';
import FooterRightImg from '../statics/images/Footer_right.png';
import Logo from '../statics/images/Logo.png';
import Image from 'next/image';
import { BsChevronRight } from 'react-icons/bs';
import { BiLogoFacebook } from 'react-icons/bi';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BiLogoTwitter } from 'react-icons/bi';
import { AiFillYoutube } from 'react-icons/ai';

const FooterAura = () => {
  return (
    <div className="w-full h-auto !font-montserrat font-[100] flex justify-between items-center">
      <Image
        src={FooterLeftImg}
        alt="Footer left"
        className="h-[15rem] w-auto"
      />
      <div className="flex flex-col items-center gap-2">
        <Image
          src={Logo}
          alt="Logo"
          className="w-[7rem] h-auto"
        />
        <div className="flex flex-col items-center text-[#98818d]">
          <span>Nầng tầm nét Việt © 2023</span>
          <span>Đăng ký doanh nghiệp số: 0316034950</span>
          <span>MST: 1801544652</span>
        </div>
        <div className="flex items-center gap-5 text-[#98818d]">
          <div className="flex items-center">
            <span>Giới thiệu</span>
            <BsChevronRight className="text-[#bc2449]" />
          </div>

          <div className="flex items-center">
            <span>Dịch vụ</span>
            <BsChevronRight className="text-[#bc2449]" />
          </div>

          <div className="flex items-center">
            <span>Liên hệ</span>
            <BsChevronRight className="text-[#bc2449]" />
          </div>

          <div className="flex items-center">
            <span>Khuyến mãi</span>
            <BsChevronRight className="text-[#bc2449]" />
          </div>
        </div>

        <div className="flex gap-7 text-[#bc2449] text-[1.5rem] items-center">
          <BiLogoFacebook />
          <AiOutlineInstagram />
          <BiLogoTwitter />
          <AiFillYoutube />
        </div>
      </div>
      <Image
        src={FooterRightImg}
        alt="Footer right"
        className="h-[15rem] w-auto"
      />
    </div>
  );
};

export default FooterAura;
