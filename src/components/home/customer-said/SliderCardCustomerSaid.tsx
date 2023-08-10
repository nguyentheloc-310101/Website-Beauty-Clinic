'use client';
import React, { useRef, useState } from 'react';
import { CardCustomer } from './CardCustomer';
import { ICustomFeedback } from '@/interfaces/home/IHome';

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
      className="flex items-end gap-[20px] lg:gap-[60px] overflow-x-scroll hide-scrollbar h-[500px]"
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
                clinic={item.clinic}
              />
            </div>
          );
        })}
    </div>
  );
};

export default SliderCardCustomerSaid;
