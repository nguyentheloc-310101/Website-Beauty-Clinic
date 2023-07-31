import { gradientText } from '@/constants/gradentText';
import { paymentData } from '@/data/payment/payment';
import React from 'react';
import IconPaymentMethod from './IconPaymentMethod';

const ServicePayment = () => {
  return (
    <div className="flex flex-col p-[16px]">
      <div
        className={`${gradientText} lg:text-[35px] font-[800] lg:leading-[52px] lg:tracking-[0.25px]`}>
        Phương thức thanh toán linh hoạt
      </div>
      <div className="text-[11px] leading-[14px] my-[8px] lg:text-[16px] text-[#36383A] lg:my-[20px] font-[300] lg:leading-[24px] lg:tracking-[0.08px]">
        Chúng tôi cũng cung cấp các lựa chọn trả góp linh hoạt để đảm bảo khả
        năng chi trả của khách hàng cho các dịch vụ chăm sóc cao cấp.
      </div>
      <div className="flex flex-start gap-[16px] lg:mt-[20px] lg:gap-[20px]">
        {paymentData.map((item) => {
          return (
            <div key={item.key}>
              <IconPaymentMethod
                icon={item.icon}
                method={item.method}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicePayment;
