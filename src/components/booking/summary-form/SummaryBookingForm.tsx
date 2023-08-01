import { gradientText } from '@/constants/gradentText';
import { Form } from 'antd';
import React from 'react';
import { ItemInfo } from '../components/ItemInform';
import SelectFormMultiple from '@/components/common/form/select/SelectFormMultiple';

const dataMock = [
  {
    label: 'a',
    value: 'a1',
  },
  {
    label: 'b',
    value: 'b1',
  },
];

const SummaryBookingForm = () => {
  return (
    <div className="w-full lg:mt-[24px]">
      <div
        className={`${gradientText} lg:text-[24px] font-[800] lg:leading-[36px]`}>
        Tóm tắt đặt hẹn
      </div>
      <Form>
        <div className="grid divide-y divide-[#F5F5F5]">
          <ItemInfo
            label={'Ngày đặt hẹn:'}
            value={'06/08/2023'}
          />
          <ItemInfo
            label={'Thời gian đặt hẹn:'}
            value={'10:00'}
          />
          <SelectFormMultiple
            label={'Dịch vụ'}
            required={true}
            name={'service'}
            options={dataMock}
            maxTagPlaceholder={''}
          />
          <div></div>
        </div>
      </Form>
    </div>
  );
};

export default SummaryBookingForm;
