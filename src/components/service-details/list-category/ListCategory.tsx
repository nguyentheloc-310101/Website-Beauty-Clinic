/* eslint-disable @next/next/no-img-element */
import { gradientText } from '@/constants/gradentText';
import { useState } from 'react';
import { CardCategoryProps } from './CardCategory';
import CardSelected from './CardSelected';
import { ICategory } from '@/interfaces/category/category';

interface ListCategoryProps {
  categoriesOnPage: any;
}
const ListCategory = ({ categoriesOnPage }: ListCategoryProps) => {
  const [activeDetail, setActiveDetail] = useState<boolean>(false);
  const [indexSelected, setIndexSelected] = useState<number | null>();
  const [cardSelect, setCardSelect] = useState<ICategory>();
  const handleCLick = (index: number, item: CardCategoryProps) => {
    if (index === indexSelected && activeDetail == true) {
      setActiveDetail(false);
      setIndexSelected(null);
      return;
    }
    setIndexSelected(index);
    setActiveDetail(true);
    setCardSelect(item as any);
  };
  console.log('categoriesOnPage', categoriesOnPage);
  return (
    <>
      {activeDetail && (
        <CardSelected
          className={'pt-[40px]'}
          card={cardSelect as ICategory}
        />
      )}

      <div className="lg:my-[40px] lg:flex lg:flex-wrap lg:gap-[40px]">
        {categoriesOnPage.map((item: any, index: number) => {
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
                    ? 'border-[#BC2449]'
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
                    {item.name}
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
