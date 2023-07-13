'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import zalo from '../../statics/images/panel-contact/zalo.png';
import mess from '../../statics/images/panel-contact/mess.png';
import shopee from '../../statics/images/panel-contact/shopee.png';

const PanelContact = () => {
  const [showIcon, setShowIcon] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowIcon(true);
      } else {
        setShowIcon(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={`panel-contact ${showIcon ? 'show' : ''}`}>
      <Image
        src={zalo}
        alt={'zalo-icon'}
        width={48}
        height={48}
        className="cursor-pointer lg:mt-[8px]"
      />
      <Image
        src={mess}
        alt={'zalo-icon'}
        width={48}
        height={48}
        className="cursor-pointer"
      />
      <Image
        src={shopee}
        alt={'zalo-icon'}
        width={48}
        height={48}
        className="cursor-pointer"
      />
    </div>
  );
};

export default PanelContact;
