/* eslint-disable @next/next/no-img-element */
import { gradientText } from '@/constants/gradentText';
import { useState } from 'react';
import { CardCategoryProps } from './CardCategory';
import CardSelected from './CardSelected';

const initCategory: CardCategoryProps = {
  image:
    'https://ucarecdn.com/48afb975-ecf8-4017-a230-3eb5eb49ad1b/-/quality/smart/-/format/auto/',
  category: 'Phun xăm mày',
  price: 899900,
  onDetail: false,
};
const repeatedObjects = Array.from({ length: 8 }, () => initCategory);

const ListCategory = () => {
  const [activeDetail, setActiveDetail] = useState<boolean>(false);
  const [indexSelected, setIndexSelected] = useState<number | null>();
  const [cardSelect, setCardSelect] = useState<CardCategoryProps>();
  const handleCLick = (index: number, item: CardCategoryProps) => {
    if (index === indexSelected && activeDetail == true) {
      setActiveDetail(false);
      setIndexSelected(null);
      return;
    }
    setIndexSelected(index);
    setActiveDetail(true);
    setCardSelect(item);
  };
  return (
    <>
      {activeDetail && (
        <CardSelected
          className={'pt-[40px]'}
          card={cardSelect as CardCategoryProps}
        />
      )}

      <div className="lg:my-[40px] lg:flex lg:flex-wrap lg:gap-[40px]">
        {repeatedObjects.map((item, index) => {
          return (
            <div
              className="flex"
              key={index}
              onClick={() => {
                handleCLick(index, item);
              }}>
              <div
                className={`${
                  indexSelected == index
                    ? 'bg-[#F8DDE4] border-[#BC2449]'
                    : 'bg-[#fff] hover:border-[#BC2449]'
                } lg:w-[366px]  lg:p-[20px] rounded-[20px] border cursor-pointer`}>
                <img
                  src={item.image}
                  alt=""
                  className="w-full lg:h-[327px] object-cover rounded-[20px]"
                />
                <div className="lg:px-[20px] lg:pt-[20px]">
                  <div
                    className={` ${
                      indexSelected == index
                        ? `${gradientText}`
                        : `${gradientText}`
                    } lg:text-[24px] font-[800] lg:leading-[36px]`}>
                    {item.category}
                  </div>
                  <div
                    className={`flex flex-col lg:mt-[16px] ${
                      indexSelected == index
                        ? 'text-[#36383A]'
                        : 'text-[#36383A]'
                    }`}>
                    <div className="lg:text-[16px] lg:leading-[24px] font-[300] lg:tracking-[0.5px]">
                      Giá chỉ từ
                    </div>
                    <div className="lg:text-[24px] lg:leading-[36px] font-[600]">
                      {item.price}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ListCategory;
