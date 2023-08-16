import React from 'react';
import CardCategory, { CardCategoryProps } from './CardCategory';

type CardSelectedProps = {
  card: CardCategoryProps;
  className?: string;
};

const CardSelected = ({ card, className }: CardSelectedProps) => {
  return (
    <div
      className={`flex gap-[20px] h-full items-center justify-between ${className}`}>
      <CardCategory
        image={card.image}
        category={card.category}
        price={card.price}
        onDetail={true}
      />
      <div className="w-full bg-[white] h-[500px] rounded-[20px]">
        &quot;đì-teo &quot; --- waiting for design
      </div>
    </div>
  );
};

export default CardSelected;
