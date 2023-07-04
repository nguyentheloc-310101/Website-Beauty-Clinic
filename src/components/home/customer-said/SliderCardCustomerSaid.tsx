'use client';
import React, { useRef, useState } from 'react';
import customer2 from '../../../statics/images/customer-said/customers/customer2.png';
import customer1 from '../../../statics/images/customer-said/customers/customer1.png';
import customer3 from '../../../statics/images/customer-said/customers/customer3.png';
import customer4 from '../../../statics/images/customer-said/customers/customer4.png';
import customer5 from '../../../statics/images/customer-said/customers/customer5.png';
import customer6 from '../../../statics/images/customer-said/customers/customer6.png';

import { CardCustomer } from './CardCustomer';

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
      className="flex gap-[60px] overflow-x-auto hide-scrollbar"
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
        image={customer1}
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
      />{' '}
      <CardCustomer
        customer_name={'Cô Thắm - Aura Phú Yên'}
        message={
          'Các bé nhân viên ở đây dễ thương lắm con ơi đến vừa trẻ đẹp, vừa vui vậy ai mà không thích đến.'
        }
        signed={'  Ngọc'}
        image={customer4}
      />{' '}
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
