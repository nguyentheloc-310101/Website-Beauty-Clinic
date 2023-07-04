import React from 'react';
import AuraCampus from '@/components/home/aura-campus/AuraCampus';
import ActorSaid from '@/components/home/actor-said/ActorSaid';
import HeroSection from '@/components/home/hero';
import SliderImage from '@/components/home/slider';
import CustomerSaidVideo from '@/components/home/customer-said-video/CustomerSaidVideo';
import SliderCustomerSaid from '@/components/home/customer-said/SliderCustomerSaid';
import SeeMoreAboutAura from '@/components/home/see-more/SeeMoreAboutAura';
import ContactInformation from '@/components/home/form-contact/ContactInformation';

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="flex flex-col items-center justify-center ">
        <HeroSection />
        <SliderImage />
        <CustomerSaidVideo />
      </div>
      <AuraCampus />
      <ActorSaid />
      <SliderCustomerSaid />
      <SeeMoreAboutAura />
      <ContactInformation />
    </div>
  );
};

export default HomePage;
