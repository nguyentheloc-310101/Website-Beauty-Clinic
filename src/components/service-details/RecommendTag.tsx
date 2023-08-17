import { ITag } from '@/interfaces/category/Category';
import React from 'react';

type RecommendTagProps = {
  listTag: ITag[];
  setTagSelected: any;
};

const RecommendTag = (props: RecommendTagProps) => {
  const { listTag, setTagSelected } = props;
  return (
    <div className="flex gap-[20px]">
      {listTag &&
        listTag.map((tag, index) => {
          return (
            <div
              onClick={() => {
                setTagSelected(tag.id);
              }}
              className="lg:px-[20px] cursor-pointer border-[4px] border-[#fff] border-solid hover:border-[#BC2449] lg:py-[10px] lg:text-[24px] text-[#BC2449] font-[600] lg:leading-[36px] flex items-center justify-center bg-[#fff] rounded-[20px]"
              key={index}>
              {tag.name}
            </div>
          );
        })}
    </div>
  );
};

export default RecommendTag;
