'use client';
import React, { useState } from 'react';
import AuraCampus from '@/components/home/aura-campus/AuraCampus';
import ActorSaid from '@/components/home/actor-said/ActorSaid';
import HeroSection from '@/components/home/hero';
import SliderService from '@/components/home/service-aura/ServiceAura';
import CustomerSaidVideo from '@/components/home/customer-said-video/CustomerSaidVideo';
import SliderCustomerSaid from '@/components/home/customer-said/SliderCustomerSaid';
import SeeMoreAboutAura from '@/components/home/see-more/SeeMoreAboutAura';
import ContactInformation from '@/components/home/form-contact/ContactInformation';
import ReelsOutStanding from '@/components/reels/ReelsOutStanding';
import { StaticImageData } from 'next/image';

const HomePage = () => {
  // const [campusName, setCampusName] = useState<string>('');
  // const [campusAddress, setCampusAddress] = useState<string>('');
  // const [campusTime, setCampusTime] = useState<string>('');
  // const [campusImage, setCampusImage] = useState<StaticImageData>();
  // const [campusMap, setCampusMap] = useState<StaticImageData>();

  return (
    <div className="home-container">
      <HeroSection />
      <SliderService />
      <CustomerSaidVideo />
      <AuraCampus />
      <ActorSaid />
      <SliderCustomerSaid />
      <SeeMoreAboutAura />
      <ContactInformation />
      <ReelsOutStanding />
    </div>
  );
};

export default HomePage;
