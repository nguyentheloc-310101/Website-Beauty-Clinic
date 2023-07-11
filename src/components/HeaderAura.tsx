import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '../statics/images/live-commerce/Logo.png';
import BurgerIcon from '../statics/images/Layer_1.png';
import HomeIcon from '../statics/images/home.png';
import ServiceIcon from '../statics/images/service.png';
import FooterIcon from '../statics/images/popup_footer.png';
import { BsChevronDown } from 'react-icons/bs';
import Link from 'next/link';

interface Props {
  isMobile: boolean;
}
const HeaderAura = ({ isMobile }: Props) => {
  const [isOpened, setIsOpened] = useState(false);
  const [heading, setHeading] = useState<string>('');
  const [subHeading, setSubHeading] = useState<string>('');
  return isMobile ? (
    <div className="relative flex justify-between items-center py-[1rem] px-[20px]">
      <Image
        src={BurgerIcon}
        alt="Burger"
        className="h-[1.5rem]"
        onClick={() => setIsOpened((prev: boolean) => !prev)}
      />
      <Image
        src={Logo}
        alt="logo"
        className="h-[3rem] w-auto"
      />
      <div></div>
      <div
        className={`z-[100] absolute p-5 top-[5rem] left-0 bg-white flex flex-col w-[60vw] gap-3 transition-transform duration-500 ${
          isOpened ? 'translate-x-0' : '-translate-x-full'
        }`}>
        <Link href="/">
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <Image
                src={HomeIcon}
                alt="home"
                className="w-[1rem] h-[1rem]"
              />
              <span className="font-[700] text-[1rem] text-[#bc2449]">
                Trang chủ
              </span>
            </div>
            <BsChevronDown className="text-[1rem] text-[rgba(0,0,0,0.2)]" />
          </div>
        </Link>

        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <Image
              src={ServiceIcon}
              alt="home"
              className="w-[1rem] h-[1rem]"
            />
            <span className="font-[700] text-[1rem] text-[#bc2449]">
              Dịch vụ
            </span>
          </div>
          <BsChevronDown className="text-[1rem] text-[rgba(0,0,0,0.2)]" />
        </div>
        {/* <div className="flex flex-col pl-[2rem] ga[-2">
          <div className="flex justify-between items-center py-2">
            <span className="font-[700] text-[1rem]">Phẫu thuật thẩm mỹ</span>
            <BsChevronDown className="text-[1rem] text-[rgba(0,0,0,0.2)]" />
          </div>

          <div className="flex justify-between items-center py-2">
            <span className="font-[700] text-[1rem]">Điều trị nám</span>
            <BsChevronDown className="text-[1rem] text-[rgba(0,0,0,0.2)]" />
          </div>

          <div className="flex justify-between items-center py-2">
            <span className="font-[700] text-[1rem]">Phun xăm</span>
            <BsChevronDown className="text-[1rem] text-[rgba(0,0,0,0.2)]" />
          </div>

          <div className="flex justify-between items-center py-2">
            <span className="font-[700] text-[1rem]">
              Tạo hình không xâm lấn
            </span>
            <BsChevronDown className="text-[1rem] text-[rgba(0,0,0,0.2)]" />
          </div>
        </div> */}
        <>
          {navigationLinks.sublinks.map((slinks: any, index: number) => (
            <div key={index}>
              <div>
                <h1
                  onClick={() =>
                    subHeading !== slinks.Head
                      ? setSubHeading(slinks.Head)
                      : setSubHeading('')
                  }
                  className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center md:pr-0 pr-5">
                  {slinks.Head}

                  <span className="text-xl md:mt-1 md:ml-2 inline">
                    <ion-icon
                      name={`${
                        subHeading === slinks.Head
                          ? 'chevron-up'
                          : 'chevron-down'
                      }`}></ion-icon>
                  </span>
                </h1>
                <div
                  className={`${
                    subHeading === slinks.Head ? 'md:hidden' : 'hidden'
                  }`}>
                  {slinks.sublink.map((slink) => (
                    <li className="py-3 pl-14">
                      <Link to={slink.link}>{slink.name}</Link>
                    </li>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </>
        <Image
          src={FooterIcon}
          className="w-full h-[4rem] object-cover mt-2"
          alt="footer"
        />
      </div>
    </div>
  ) : (
    <div className="w-full h-[100px] flex xl:px-[10rem] lg:px-[7rem]  md:px-[6rem] py-[1rem] items-center">
      <Image
        src={Logo}
        alt="Logo"
        className="w-[103px] h-[45px]"
      />
      <div className="flex ml-[10%] w-full font-[600] text-[#bc2449] text-[16px] items-center justify-between">
        <span className="text-center cursor-pointer">TRANG CHỦ</span>
        <span className="text-center cursor-pointer">GIỚI THIỆU</span>
        <span className="text-center cursor-pointer">ƯU ĐÃI</span>
        <span className="text-center cursor-pointer">LIÊN HỆ</span>
        <div className="flex flex-col items-center">
          <span className="text-[16px] font-[500px] text-center cursor-pointer">
            Tư vấn miễn phí
          </span>
          <span className="font-[700px] text-[18px] text-black text-center cursor-pointer">
            0833.08.2222
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeaderAura;
