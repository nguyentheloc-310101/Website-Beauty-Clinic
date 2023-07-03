import React from 'react';

import AuraCampus from '@/components/home/aura-campus/AuraCampus';
import ActorSaid from '@/components/home/actor-said/ActorSaid';
import HeroSection from '@/components/home/hero';
import SliderImage from '@/components/home/slider';
import CustomerSaid from '@/components/home/customer-said/CustomerSaid';

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center ">
        <HeroSection />
        <SliderImage />
        <CustomerSaid />
      </div>
      <AuraCampus />
      <div>
        <ActorSaid />
      </div>

      <div>Booking form</div>
    </>
  );
};

export default HomePage;
