import React from 'react';
import ServiceStepCard from './service-step-card/ServiceStepCard';
import { gradientText } from '@/constants/gradentText';

const ServiceSteps = () => {
  return (
    <div>
      <div
        className={`${gradientText} lg:text-[35px] font-[800] lg:leading-[52px] lg:tracking-[0.25px]`}>
        Các bước điều trị tại Thẩm mỹ viện Aura
      </div>
      {/*TODO: chuyen sang dung map()*/}
      <div className="mt-[20px] flex flex-wrap gap-[20px]">
        <ServiceStepCard
          step={1}
          image={
            'https://ucarecdn.com/ab240c93-34b3-45cc-b0f1-e80b88999ad2/-/preview/586x270/-/quality/smart/-/format/auto/'
          }
          desc={
            'Bác sĩ sẽ trực tiếp thăm khám, soi da miễn phí, tư vấn và thiết kế phác đồ điều trị cho từng khách hàng.'
          }
        />
        <ServiceStepCard
          step={2}
          image={
            'https://ucarecdn.com/5110b00c-6cfb-4a28-b936-466824421248/-/preview/586x270/-/quality/smart/-/format/auto/'
          }
          desc={'Vệ sinh, làm sạch da cho khách hàng.'}
        />
        <ServiceStepCard
          step={3}
          image={
            'https://ucarecdn.com/79c96461-d9ff-46ae-a50b-3fa346384cd1/-/preview/586x270/-/quality/smart/-/format/auto/'
          }
          desc={
            'Tiến hành ủ tê 30 phút trước khi thực hiện điều trị nám bằng công nghệ Frozen Melasma.'
          }
        />
        <ServiceStepCard
          step={4}
          image={
            'https://ucarecdn.com/91b55ac6-b27b-47e2-b265-9f0cd21c8f41/-/preview/586x270/-/quality/smart/-/format/auto/'
          }
          desc={
            'Sau đó, khử trùng đầu súng và da một lần nữa bằng povidine và nước muối sinh lý.'
          }
        />
        <ServiceStepCard
          step={5}
          image={
            'https://ucarecdn.com/9155932d-48e3-4825-81ba-bb9f7a21d29e/-/preview/586x270/-/quality/smart/-/format/auto/'
          }
          desc={
            'Bác sĩ bắt đầu điều chỉnh mức năng lượng của công nghệ Đông hủy nám Frozen Melasma sao cho phù hợp với tình trạng da của khách hàng. Sau đó, đi máy vào các vùng da bị tăng sắc tố, các đốm, mảng nám.'
          }
        />
        <ServiceStepCard
          step={6}
          image={
            'https://ucarecdn.com/49a2821b-9eca-438b-83e1-7fbbbf1d13b8/-/preview/586x270/-/quality/smart/-/format/auto/'
          }
          desc={
            'Đắp mặt nạ ánh sáng đỏ hoặc xanh trong khoảng 10 - 15 phút để hồi phục da.'
          }
        />
        <ServiceStepCard
          step={7}
          image={
            'https://ucarecdn.com/c6919672-d499-4c62-b5bb-c97731036a9a/-/preview/586x270/-/quality/smart/-/format/auto/'
          }
          desc={'Bác sĩ dặn dò và hướng dẫn cách chăm sóc da đúng cách.'}
        />
      </div>
    </div>
  );
};

export default ServiceSteps;
