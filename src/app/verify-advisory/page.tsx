'use client';
import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import Image from 'next/image';
import phoneCall from '../../statics/images/verify-advisory/phoneCall.png';
import Link from 'next/link';

const VerifyAdvisory = () => {
  return (
    <div className="lg:px-[170px] lg:mt-[100px]">
      <div className="lg:mb-[10px]">
        <Breadcrumb
          items={[
            {
              href: '/',
              title: (
                <div className="flex items-center justify-center gap-[5px]">
                  <HomeOutlined />
                  <span>Trang chủ</span>
                </div>
              ),
            },
            {
              href: '',
              title: (
                <div className="flex items-center justify-center gap-[2px]">
                  <span className="text-[#BF264B] font-[600]">
                    Xác nhận đăng ký tư vấn
                  </span>
                </div>
              ),
            },
          ]}
        />
      </div>
      <div className="lg:w-[1100px] lg:h-[373px] bg-white rounded-[5px] lg:flex lg:flex-col lg:items-center lg:justify-center lg:shadow-md">
        <div className="text-[#BF264B] text-[32px] font-[600] leading-[140%]">
          Aura xin cảm ơn
        </div>
        <div className="text-[#5C5257] lg:text-[20px] lg:font-[400] text-center">
          Đơn đăng ký thành công! <br />
          TMV Quốc Tế Aura sẽ liên hệ tư vấn cho quý khách sớm nhất.
        </div>
        <div className="lg:mt-[10px] lg:mb-[20px]">
          <Image
            src={phoneCall}
            alt="phoneCall"
            width={72}
            style={{ objectFit: 'contain' }}
          />
        </div>
        <div className="text-[#5C5257] lg:text-[20px] lg:font-[400] text-center lg:mb-[10px]">
          Hotline:
          <span className="text-[#BF264B] text-[30px] font-[600] leading-[140%]">
            1900 6947
          </span>
        </div>
        <Link href="/">
          <div className="bg- lg:w-[230px] lg:h-[33px] lg:flex items-center justify-center lg:rounded-[30px] bg-[#BF264B] lg:hover:bg-[#DF4B6E]">
            <div className="lg:text-[20px] lg:font-[600] text-[#fff]">
              Quay về trang chủ
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default VerifyAdvisory;
