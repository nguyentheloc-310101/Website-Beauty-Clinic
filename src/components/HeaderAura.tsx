/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import BurgerIcon from '../statics/images/Layer_1.png';
import HomeIcon from '../statics/images/home.png';
import ServiceIcon from '../statics/images/service.png';
import NavLinks from './navbar/NavLinks';

const FooterIcon =
  'https://ucarecdn.com/755747d3-1799-4b18-af37-70ef308bb242/-/quality/smart/-/format/webp/';
const Logo =
  'https://ucarecdn.com/a7cf14e7-3e76-4ad9-b713-814cf1d021dc/-/quality/smart/-/format/webp/';

const HeaderAura = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [openServiceDrop, setOpenServiceDrop] = useState<boolean>(false);

  return (
    <>
      <div className="lg:hidden relative flex justify-between items-center py-[1rem] px-[20px] ">
        <Image
          src={BurgerIcon}
          alt="Burger"
          className="h-[1.5rem]"
          onClick={() => setIsOpened((prev: boolean) => !prev)}
        />
        <Link href="/">
          <img
            src={Logo}
            alt="logo"
            className="h-[3rem] w-auto"
          />
        </Link>
        <div></div>
        <div
          className={`z-[100] absolute p-5 top-[5rem] left-0 bg-white flex flex-col w-[70vw] gap-3 transition-transform duration-500 ${
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

            {openServiceDrop ? (
              <BsChevronUp
                onClick={() => {
                  setOpenServiceDrop(false);
                }}
                className="text-[1rem] text-[#bc2449]"
              />
            ) : (
              <BsChevronDown
                onClick={() => {
                  setOpenServiceDrop(true);
                }}
                className="text-[1rem] text-[rgba(0,0,0,0.2)]"
              />
            )}
          </div>
          {openServiceDrop && <NavLinks />}

          <Link href="/">
            <img
              src={FooterIcon}
              className="w-full h-[4rem] object-cover mt-2"
              alt="footer"
            />
          </Link>
        </div>
      </div>
      <>
        <div className="hidden w-full h-[80px] lg:flex xl:px-[10rem] lg:px-[7rem]  md:px-[6rem] py-[1rem] items-center">
          <Link href="/">
            <img
              src={Logo}
              alt="Logo"
              style={{ objectFit: 'contain' }}
              className="w-[103px] h-[45px] cursor-pointer"
            />
          </Link>

          <div className="flex ml-[10%] w-full font-[600] text-[#bc2449] text-[16px] items-center justify-between">
            <Link href="/">
              <span className="text-center cursor-pointer">TRANG CHỦ</span>
            </Link>
            <Link href="/introduction">
              <span className="text-center cursor-pointer">GIỚI THIỆU</span>
            </Link>
            <Link href="/preferential">
              <span className="text-center cursor-pointer">ƯU ĐÃI</span>
            </Link>
            <Link href="/contact">
              <span className="text-center cursor-pointer">LIÊN HỆ</span>
            </Link>

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
      </>
    </>
  );
};

export default HeaderAura;
