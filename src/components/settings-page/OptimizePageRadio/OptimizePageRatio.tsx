import React from 'react';
import SwitchForm from '../../common/form/switch/SwitchForm';

const OptimizePageRatio = () => {
  return (
    <div className="flex justify-between">
      <SwitchForm
        defaultChecked={false}
        textNextToSwitch="Sử dụng DelayJS"
      />
      <SwitchForm
        defaultChecked={true}
        textNextToSwitch="Sử dụng LazyLoading"
      />
    </div>
  );
};

export default OptimizePageRatio;
