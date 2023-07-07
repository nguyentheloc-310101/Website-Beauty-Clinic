import { Breadcrumb } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react';

export default function VerifyAdvisory() {
  return (
    <div>
      <div>
        {' '}
        <Breadcrumb
          items={[
            {
              href: '',
              title: <HomeOutlined />,
            },
            {
              href: '',
              title: (
                <>
                  <UserOutlined />
                  <span>Application List</span>
                </>
              ),
            },
            {
              title: 'Application',
            },
          ]}
        />
      </div>
    </div>
  );
}
