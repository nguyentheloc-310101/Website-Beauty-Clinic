'use client';
import React, { useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import { Radio, Timeline } from 'antd';

const PreferentialPage = () => {
  const [mode, setMode] = useState<'left' | 'alternate' | 'right'>('left');

  const onChange = (e: RadioChangeEvent) => {
    setMode(e.target.value);
  };

  return <div className="mt-[60px]"></div>;
};

export default PreferentialPage;
