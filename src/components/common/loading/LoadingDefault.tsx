import { Spin } from 'antd';
import React from 'react';

type LoadingDefaultProps = {
  loading: boolean;
  text?: string;
};

const LoadingDefault = (props: LoadingDefaultProps) => {
  const { loading, text } = props;
  return (
    <Spin
      size={'large'}
      spinning={loading}
      className="fixed top-0 bg-white/70 z-[100] left-0 flex items-center justify-center h-[100%] w-full"></Spin>
  );
};

export default LoadingDefault;
