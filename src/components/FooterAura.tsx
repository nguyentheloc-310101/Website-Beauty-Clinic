import Image from 'next/image';
import { AiFillYoutube, AiOutlineInstagram } from 'react-icons/ai';
import { BiLogoFacebook, BiLogoTwitter } from 'react-icons/bi';
import { BsChevronRight } from 'react-icons/bs';
import FooterLeftImg from '../statics/images/live-commerce/Footer_left.png';
import FooterRightImg from '../statics/images/live-commerce/Footer_right.png';
import Logo from '../statics/images/live-commerce/Logo.png';
import FooterIcon from '../statics/images/mobile_footer.png';
interface Props {
  isMobile: boolean;
}

const FooterAura = ({ isMobile }: Props) => {
  return isMobile ? (
    <div className="relative w-full h-auto">
      <Image
        src={FooterIcon}
        alt="Footer left"
        className="h-[18rem] w-full object-fit"
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
