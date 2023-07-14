'use client';
import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import Image from 'next/image';
import phoneCall from '../../statics/images/verify-advisory/phoneCall.png';
import Link from 'next/link';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Chuỗi thẩm mỹ viện quốc tế Aura Beauty Clinic',
  description: 'Aura Beauty Clinic',
};
const VerifyAdvisory = () => {
  return (
    <div className="lg:px-[200px] lg:mt-[100px] px-[20px] mt-[20px]">
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
      <div className="lg:w-full lg:h-[373px] bg-white rounded-[5px] flex flex-col items-center justify-center mt-[5px] shadow-md px-[10px] h-[270px] w-full">
        <div className="text-[#BF264B] lg:text-[32px] font-[600] lg:leading-[140%] text-[22px]">
          Aura xin cảm ơn
        </div>
        <div className="text-[#5C5257] lg:text-[20px] lg:font-[400] text-center text-[12px]">
          Đơn đăng ký thành công! <br />
          TMV Quốc Tế Aura sẽ liên hệ tư vấn cho quý khách sớm nhất.
        </div>
        <div className="lg:mt-[10px] lg:mb-[20px]">
          <Image
            src={phoneCall}
            alt="phoneCall"
            // width={72}
            className="lg:w-[72px] w-[40px]"
            style={{ objectFit: 'contain' }}
          />
        </div>
        <div className="text-[#5C5257] lg:text-[20px] lg:font-[400] text-center lg:mb-[10px]">
          Hotline:
          <span className="text-[#BF264B] lg:text-[30px] font-[600] leading-[140%]">
            1900 6947
          </span>
        </div>
        <Link href="/">
          <div className="bg- lg:w-[230px] lg:h-[33px] flex items-center justify-center rounded-[30px] mt-[10px] w-[150px] bg-[#BF264B] hover:bg-[#DF4B6E]">
            <div className="lg:text-[20px] lg:font-[600] text-[#fff] text-[14px]">
              Quay về trang chủ
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default VerifyAdvisory;
