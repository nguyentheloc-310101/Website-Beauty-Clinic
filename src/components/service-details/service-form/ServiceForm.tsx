/* eslint-disable @next/next/no-img-element */
import React from 'react';
import LeftFormContent from './left/LeftFormContent';
import FormInputContent from './right-form/FormInputContent';

const ServiceForm = () => {
  return (
    <div className="linear-bg my-[80px] w-full h-[416px] rounded-[20px] grid grid-cols-2">
      <LeftFormContent />
      <FormInputContent />
    </div>
  );
};

export default ServiceForm;
