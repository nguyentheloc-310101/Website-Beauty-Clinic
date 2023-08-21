import React from 'react';
import CardCategory, { CardCategoryProps } from './CardCategory';
import ListServiceInCategories from './ListServiceInCategories';
import { ICategory } from '@/interfaces/category/category';

type CardSelectedProps = {
  card: ICategory;
  className?: string;
};

const CardSelected = ({ card, className }: CardSelectedProps) => {
  console.log('card', card);
  return (
    <div className={`flex lg:gap-[20px] h-full  ${className}`}>
      <CardCategory
        image={card.image}
        name={card.name}
        price={card.price}
        onDetail={true}
      />
      <ListServiceInCategories listService={card.services} />
    </div>
  );
};

export default CardSelected;
