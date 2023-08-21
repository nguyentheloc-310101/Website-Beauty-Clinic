/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface ContactCover {
  image: string;
  textAbove: string;
  textBeneath: string;
}

const CoverImageContact = (props: ContactCover) => {
  const { image, textAbove, textBeneath } = props;
  return (
    <div className="w-full lg:h-fit relative">
      <img
        src={image}
        alt=""
        className="object-fit w-full lg:h-[722px]"
      />
      <div className="absolute-bottom-center z-50 lg:text-center lg:w-full">
        <div className="font-service-card lg:text-[100px] text-[#BC2449] font-[400] lg:leading-[148px]">
          {textAbove}
        </div>
        <div className="lg:my-[24px] uppercase lg:text-[36px] text-[#BC2449] font-[900] lg:leading-[54px]">
          {textBeneath}
        </div>
      </div>
      <div className="absolute w-full lg:h-[300px] linear-bg-contact-cover z-[10] bottom-0"></div>
    </div>
  );
};

export default CoverImageContact;

export type { ContactCover };
