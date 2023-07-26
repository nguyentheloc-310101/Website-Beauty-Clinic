import { gradientText } from '@/constants/gradentText';
import React from 'react';
import CardOtherService from './cards-services-horizontal/CardOtherService';

const OtherServices = () => {
  return (
    <div>
      <div
        className={`lg:text-[35px] font-[800] leading-[52px] tracking-[0.25px] mb-[20px] ${gradientText}`}>
        Dịch vụ khác tại Thẩm mỹ Aura
      </div>
      <div>
        <CardOtherService
          image={
            'https://ucarecdn.com/0a3c0d79-1afb-49cf-97a3-ce3fbe34d69c/-/quality/smart/-/format/auto/'
          }
          desc={
            'Lorem ipsum dolor sit amet consectetur. Lacus tristique quam pretium ac amet netus in feugiat turpis. Sed elit ac massa vitae. Bibendum nisl elit nisl mauris ac et cras enim et. Posuere tempus fames amet consequat neque eget. Vehicula pulvinar tortor sit nunc elementum dui maecenas. Sit consequat ipsum odio pellentesque. Id tristique est consequat commodo. Amet sagittis.'
          }
          service_name={'Phun xăm mày'}
        />
        <CardOtherService
          image={
            'https://ucarecdn.com/085dfcda-d155-44d7-8a5d-4a5265b47539/-/quality/smart/-/format/auto/'
          }
          desc={
            'Lorem ipsum dolor sit amet consectetur. Lacus tristique quam pretium ac amet netus in feugiat turpis. Sed elit ac massa vitae. Bibendum nisl elit nisl mauris ac et cras enim et. Posuere tempus fames amet consequat neque eget. Vehicula pulvinar tortor sit nunc elementum dui maecenas. Sit consequat ipsum odio pellentesque. Id tristique est consequat commodo. Amet sagittis.'
          }
          service_name={'Giảm Béo'}
        />
        <CardOtherService
          image={
            'https://ucarecdn.com/cb193431-3798-4611-89d7-5f5260487c57/-/quality/smart/-/format/auto/'
          }
          desc={
            'Lorem ipsum dolor sit amet consectetur. Lacus tristique quam pretium ac amet netus in feugiat turpis. Sed elit ac massa vitae. Bibendum nisl elit nisl mauris ac et cras enim et. Posuere tempus fames amet consequat neque eget. Vehicula pulvinar tortor sit nunc elementum dui maecenas. Sit consequat ipsum odio pellentesque. Id tristique est consequat commodo. Amet sagittis.'
          }
          service_name={'Xăm môi'}
        />
      </div>
    </div>
  );
};

export default OtherServices;
