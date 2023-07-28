/* eslint-disable @next/next/no-img-element */
import { AiFillYoutube, AiOutlineInstagram } from 'react-icons/ai';
import { BiLogoFacebook, BiLogoTwitter } from 'react-icons/bi';
import { BsChevronRight } from 'react-icons/bs';
<<<<<<< HEAD
=======
import LogoSvg from '../../../public/images/svg/LogoSvg';
>>>>>>> loc-dev

const FooterAura = () => {
  return (
    <>
      <div className="lg:hidden relative w-full h-auto">
        <img
          src={
            'https://ucarecdn.com/e59438fb-6bc5-41ae-8f3e-8f9e137bdbdd/-/quality/smart/-/format/auto/'
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

      <div className="hidden relative w-full h-auto !font-montserrat font-[100] lg:flex justify-between items-center">
        <img
          src={
            'https://ucarecdn.com/8ac0837c-2954-488d-8967-2692dfd24b74/-/quality/smart/-/format/auto/'
          }
          alt="Footer left"
          className="h-[482px] w-auto z-50"
        />
        <img
          src={
            'https://ucarecdn.com/a7cf14e7-3e76-4ad9-b713-814cf1d021dc/-/preview/586x270/-/quality/smart/-/format/auto/'
          }
          alt="Logo"
          className="w-[7rem] h-auto absolute-top-center "
        />
        <div className=" relative mt-[220px] flex flex-col items-center h-full justify-center gap-2 z-50">
          <div className="flex flex-col items-center text-[#fff] ">
            <span>Nầng tầm nét Việt © 2023</span>
            <span>Đăng ký doanh nghiệp số: 0316034950</span>
            <span>MST: 1801544652</span>
          </div>
          <div className="flex items-center gap-5 text-[#fff]">
            <div className="flex items-center">
              <span>Giới thiệu</span>
              <BsChevronRight className="text-[#fff]" />
            </div>

            <div className="flex items-center">
              <span>Dịch vụ</span>
              <BsChevronRight className="text-[#fff]" />
            </div>

            <div className="flex items-center">
              <span>Liên hệ</span>
              <BsChevronRight className="text-[#fff]" />
            </div>

            <div className="flex items-center">
              <span>Khuyến mãi</span>
              <BsChevronRight className="text-[#bc2449]" />
            </div>
          </div>

          <div className="flex gap-7 text-[#fff] text-[1.5rem] items-center">
            <BiLogoFacebook />
            <AiOutlineInstagram />
            <BiLogoTwitter />
            <AiFillYoutube />
          </div>
        </div>
        <img
          src={
            'https://ucarecdn.com/bb2ead69-fa99-4d44-a6d4-62112bfa810c/-/quality/smart/-/format/auto/'
          }
          alt="Footer right"
          className="h-[482px] w-auto z-50"
        />
        <img
          src="https://ucarecdn.com/b5476522-c4e3-4f0b-baff-6255f046d829/-/quality/smart/-/format/auto/"
          alt="long_img"
          className="absolute bottom-0 object-contain"
        />
      </div>
    </>
  );
};

export default FooterAura;
