'use client';
import ActorSaid from '@/components/home/actor-said/ActorSaid';
import AuraCampus from '@/components/home/aura-campus/AuraCampus';
import CustomerSaidVideo from '@/components/home/customer-said-video/CustomerSaidVideo';
import SliderCustomerSaid from '@/components/home/customer-said/SliderCustomerSaid';
import ContactInformation from '@/components/home/form-contact/ContactInformation';
import HeroSection from '@/components/home/hero';
import SeeMoreAboutAura from '@/components/home/see-more/SeeMoreAboutAura';
import SliderService from '@/components/home/service-aura/ServiceAura';
import ReelsOutStanding from '@/components/reels/ReelsOutStanding';

const HomePage = () => {
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
