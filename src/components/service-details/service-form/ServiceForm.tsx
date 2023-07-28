/* eslint-disable @next/next/no-img-element */
import React from 'react';
import LeftFormContent from './left/LeftFormContent';
import RightFormContent from './right-form/RightFormContent';

const ServiceForm = () => {
  return (
    <div className="bg-gradient-to-r from-[#C20459] to-[#4D0523] my-[80px] w-full h-[416px] rounded-[20px] grid grid-cols-2">
      <LeftFormContent />
      <RightFormContent />
    </div>
  );
};

export default ServiceForm;
