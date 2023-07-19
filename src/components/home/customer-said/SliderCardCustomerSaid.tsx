'use client';
import React, { useRef, useState } from 'react';

import { CardCustomer } from './CardCustomer';
//TODO: transfer to file data and use map()
const customer1 =
  'https://ucarecdn.com/bd420e86-e59c-499f-9d91-ff90d68f6117/-/preview/-/quality/lightest/-/format/webp/';
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

const SliderCardCustomerSaid = () => {
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
      <CardCustomer
        customer_name={' Chú Hải - Aura Cà Mau'}
        message={
          'Là đàn ông xăm mày sợ bị trêu nhưng mà bên đây làm tự nhiên không ai nhận ra hết. Làm xong chân mày phong thủy này về chú trúng 2 lô đất to'
        }
        signed={'Hai'}
        image={
          'https://ucarecdn.com/bd420e86-e59c-499f-9d91-ff90d68f6117/-/preview/310x373/-/quality/lightest/-/format/webp/'
        }
      />
      <CardCustomer
        customer_name={' Chị Ngọc - Aura HCM'}
        message={
          'Đừng có dại nghe lời người này người kia chỉ bôi kem thuốc gì hết nám, chị sợ lắm rồi. Phải đến Aura gặp bác sĩ da liệu, soi da mới sạch nám được'
        }
        signed={'  Ngọc'}
        image={customer2}
      />
      <CardCustomer
        customer_name={'Chị Linh - Aura HCM'}
        message={
          'Aura làm mũi bên đẹp lắm luôn nhìn hài hòa, sang cực. Bác sĩ bên này cắt mí hay nâng mũi kỹ về phong thủy lắm, 10 điểm chất lượng nha.'
        }
        signed={'Linh'}
        image={customer3}
      />
      <CardCustomer
        customer_name={'Cô Thắm - Aura Phú Yên'}
        message={
          'Các bé nhân viên ở đây dễ thương lắm con ơi đến vừa trẻ đẹp, vừa vui vậy ai mà không thích đến.'
        }
        signed={'  Ngọc'}
        image={customer4}
      />
      <CardCustomer
        customer_name={'Chị Liên - Aura Vĩnh Long'}
        message={
          'Bác sĩ ở đây tay nghề rất cao, nám nặng như chị mà 5 buổi sạch trơn.'
        }
        signed={'Lien'}
        image={customer5}
      />
      <CardCustomer
        customer_name={'Cô Phượng - Aura Cần Thơ'}
        message={
          'Cô đến làm thử nâng cơ trẻ hóa xem sao ai có mà dè đẹp vậy đâu, về nhà chồng con ai cũng khen.'
        }
        signed={'Phuong'}
        image={customer6}
      />
    </div>
  );
};

export default SliderCardCustomerSaid;
