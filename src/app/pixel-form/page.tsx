'use client';
import React from 'react';
import ModalGeneral from '../../components/common/modal/ModalGeneral';
import { Tabs, TabsProps, theme } from 'antd';
import FormSeoAndSocial from '@/components/settings-page/FormSeoAndSocial/FormSeoAndSocial';
import FormSocialMediaCode from '@/components/settings-page/FormSocialMediaCode/FormSocialMediaCode';
import FormJsCode from '@/components/settings-page/FormJsCode/FormJsCode';
import OptimizePageRatio from '@/components/settings-page/OptimizePageRadio/OptimizePageRatio';
import StickyBox from 'react-sticky-box';

const items = [
  {
    key: '1',
    label: <div className="sticky">SEO & Social</div>,
    children: (
      <div className="overflow-y-auto">
        <FormSeoAndSocial />
      </div>
    ),
  },
  {
    key: '2',
    label: <div className="">Mã chuyển đổi</div>,
    children: <FormSocialMediaCode />,
  },
  {
    key: '3',
    label: `Mã JavaScript/CSS`,
    children: <FormJsCode />,
  },
  {
    key: '4',
    label: `Tối ưu hóa trang`,
    children: <OptimizePageRatio />,
  },
];

const PixelForm = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const renderTabBar: TabsProps['renderTabBar'] = (props, DefaultTabBar) => (
    <StickyBox
      offsetTop={0}
      offsetBottom={20}
      style={{ zIndex: 1 }}>
      <DefaultTabBar
        {...props}
        style={{ background: colorBgContainer }}
      />
    </StickyBox>
  );
  return (
    <ModalGeneral
      title={'Thiết lập trang'}
      height="742px">
      <div>
        <Tabs
          renderTabBar={renderTabBar}
          className="lg:w-[500px] "
          defaultActiveKey="1"
          items={items}
          centered
        />
      </div>
    </ModalGeneral>
  );
};

export default PixelForm;
