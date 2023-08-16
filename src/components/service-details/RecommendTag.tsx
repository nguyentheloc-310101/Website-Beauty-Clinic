import React from 'react';
type RecommendTagProps = {
  listTag: string[];
};

const RecommendTag = (props: RecommendTagProps) => {
  const { listTag } = props;
  return (
    <div className="flex gap-[20px]">
      {listTag &&
        listTag.map((tag, index) => {
          return (
            <div
              className="lg:px-[20px] cursor-pointer border-[4px] border-[#fff] border-solid hover:border-[#BC2449] lg:py-[10px] lg:text-[24px] text-[#BC2449] font-[600] lg:leading-[36px] flex items-center justify-center bg-[#fff] rounded-[20px]"
              key={index}>
              {tag}
            </div>
          );
        })}
    </div>
  );
};

export default RecommendTag;
