/* eslint-disable @next/next/no-img-element */
import React from 'react';
import LeftFormContent from './left/LeftFormContent';
import FormInputContent from './right-form/FormInputContent';

type ServiceFormProps = {
  setLoading: (e: boolean) => void;
};

const ServiceForm = (props: ServiceFormProps) => {
  const { setLoading } = props;
  return (
    <div className="linear-bg my-[80px] w-full h-[526px] rounded-[20px] grid grid-cols-2">
      <LeftFormContent />
      <FormInputContent setLoading={setLoading} />
      <img
        src="https://ucarecdn.com/8f8ccb12-3f47-4b88-a7d1-4d4afbf446eb/-/quality/smart/-/format/auto/"
        alt="rb-service"
        className={`absolute top-[-10vh]  opacity-95 right-0 w-[90vw] h-auto`}
      />
    </div>
  );
};

export default ServiceForm;
