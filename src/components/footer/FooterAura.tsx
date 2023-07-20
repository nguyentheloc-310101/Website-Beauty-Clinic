/* eslint-disable @next/next/no-img-element */
import { AiFillYoutube, AiOutlineInstagram } from 'react-icons/ai';
import { BiLogoFacebook, BiLogoTwitter } from 'react-icons/bi';
import { BsChevronRight } from 'react-icons/bs';
interface Props {
  isMobile: boolean;
}

const FooterAura = ({ isMobile }: Props) => {
  return isMobile ? (
    <div className="relative w-full h-auto">
      <img
        src={
          'https://ucarecdn.com/e59438fb-6bc5-41ae-8f3e-8f9e137bdbdd/-/quality/smart/-/format/webp/'
        }
        alt="Footer left"
        className="h-[18rem] w-full object-contain"
      />
      <div className="absolute bottom-10 left-0 w-full flex text-white text-[1.5rem] justify-center items-center">
        <div className="flex gap-7">
          <BiLogoFacebook />
          <AiOutlineInstagram />
          <BiLogoTwitter />
          <AiFillYoutube />
        </div>
      </div>
    </div>
  ) : (
    <div className="w-full h-auto !font-montserrat font-[100] flex justify-between items-center">
      <img
        src={
          'https://ucarecdn.com/8ac0837c-2954-488d-8967-2692dfd24b74/-/preview/586x270/-/quality/smart/-/format/webp/'
        }
        alt="Footer left"
        className="h-[15rem] w-auto"
      />
      <div className="flex flex-col items-center gap-2">
        <img
          src={
            'https://ucarecdn.com/a7cf14e7-3e76-4ad9-b713-814cf1d021dc/-/preview/586x270/-/quality/smart/-/format/webp/'
          }
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
      <img
        src={
          'https://ucarecdn.com/bb2ead69-fa99-4d44-a6d4-62112bfa810c/-/preview/586x270/-/quality/smart/-/format/webp/'
        }
        alt="Footer right"
        className="h-[15rem] w-auto"
      />
    </div>
  );
};

export default FooterAura;
