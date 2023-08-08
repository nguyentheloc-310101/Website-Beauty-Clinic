'use client';
import React, { useRef, useState } from 'react';
import { CardCustomer } from './CardCustomer';
import { ICustomFeedback } from '@/interfaces/home/IHome';
const customer1 =
  'https://ucarecdn.com/bd420e86-e59c-499f-9d91-ff90d68f6117/-/quality/lightest/-/format/webp/';
const customer2 =
  'https://ucarecdn.com/3f842cbd-8893-490c-8363-fc0992c36dca/-/preview/510x573/-/quality/lightest/-/format/webp/';
const customer3 =
  'https://ucarecdn.com/fa429afc-1895-43e1-a0c6-64a03335d07e/-/preview/706x760/-/quality/lightest/-/format/webp/';
const customer4 =
  'https://ucarecdn.com/39f43306-89f3-431d-ada8-08469195e87c/-/preview/706x760/-/quality/lightest/-/format/webp/';
const customer5 =
  'https://ucarecdn.com/839f9b61-fbb5-4ba6-b78b-bbd2473b128f/-/preview/510x573/-/quality/lightest/-/format/webp/';
const customer6 =
  'https://ucarecdn.com/45899a1c-5e01-40f5-8d16-5210b42ddfc7/-/preview/706x760/-/quality/lightest/-/format/webp/';

interface CustomerFeedbackProps {
  customerSaid: ICustomFeedback[];
}

const SliderCardCustomerSaid = ({ customerSaid }: CustomerFeedbackProps) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsMouseDown(true);
    setStartX(e.pageX - sliderRef.current!.offsetLeft);
    setScrollLeft(sliderRef.current!.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current!.offsetLeft;
    const walk = (x - startX) * 2; // Adjust the sliding speed here
    sliderRef.current!.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      className="flex items-end gap-[25px] lg:gap-[60px] z-100 overflow-x-auto hide-scrollbar h-[500px]"
      ref={sliderRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}>
      {customerSaid &&
        customerSaid.map((item, key) => {
          return (
            <div key={key}>
              <CardCustomer
                customer_name={item.name}
                message={item.content}
                signed={item.signature}
                image={item.image}
              />
            </div>
          );
        })}
    </div>
  );
};

export default SliderCardCustomerSaid;
