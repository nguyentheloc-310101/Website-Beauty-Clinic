/* eslint-disable @next/next/no-img-element */
'use client';
type CoverImageProps = {
  image: string;
  textAbove: string;
  textBeneath: string;
  description: string;
};

const CoverImage = (props: CoverImageProps) => {
  const { image, textAbove, textBeneath, description } = props;

  return (
    <div className="w-full lg:h-auto relative">
      <img
        src={image}
        alt=""
        className="object-cover w-full lg:h-[722px]"
      />
      <div className="lg:absolute lg:text-right lg:w-[551px] lg:top-[90px] lg:right-[130px]">
        <div className="font-service-card lg:text-[100px] text-[#BC2449] font-[400] lg:leading-[140px]">
          {textAbove}
        </div>
        <div className="uppercase lg:text-[36px] text-[#BC2449] font-[900] lg:leading-[54px]">
          {textBeneath}
        </div>
        <div className="lg:text-[16px] lg:mt-[40px] lg:text-[#36383A] lg:leading-[24px] font-[400] lg:tracking-[0.5px]">
          {description}
        </div>
        <div className="flex w-full justify-between lg:mt-[20px]">
          <button className="lg:w-[232px] lg:h-[46px] lg:text-[16px] font-[500] lg:leading-[20px] lg:tracking-[0.15px] text-[#BC2449] items-center justify-center bg-[#fff] lg:px-[24px] lg:py-[12px] rounded-[8px] border border-solid border-[#BC2449]">
            Tư vấn ngay
          </button>
          <button className="lg:w-[232px] lg:h-[46px] items-center justify-center lg:text-[16px] text-white font-[600] lg:leading-[22px] lg:tracking-[-0.32px] bg-[#BC2449] lg:px-[24px] lg:py-[12px] rounded-[8px] border border-solid border-[#BC2449]">
            Đặt hẹn ngay
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoverImage;
