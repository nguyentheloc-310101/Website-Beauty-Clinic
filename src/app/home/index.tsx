'use client';
import ActorSaid from '@/components/home/actor-said/ActorSaid';
import AuraCampus from '@/components/home/aura-campus/AuraCampus';
import CustomerSaidVideo from '@/components/home/customer-said-video/CustomerSaidVideo';
import SliderCustomerSaid from '@/components/home/customer-said/SliderCustomerSaid';
import ContactInformation from '@/components/home/form-contact/ContactInformation';
import HeroSection from '@/components/home/hero';
import SeeMoreAboutAura from '@/components/home/see-more/SeeMoreAboutAura';
import SliderService from '@/components/home/service-aura/ServiceAura';
import SliderServiceResponsive from '@/components/home/service-aura/ServiceAuraResponsive';
import ReelsOutStanding from '@/components/reels/ReelsOutStanding';
import Head from 'next/head';

const HomePage = () => {
  return (
    <div className="home-container">
      <Head>
        <title>Chuỗi thẩm mỹ viện quốc tế Aura Beauty Clinic</title>
        <meta
          property="og:title"
          content="My page title"
          key="title"
        />
      </Head>
      <div className="flex flex-col items-center justify-center ">
        <HeroSection />
      </div>
      <div className="hidden md:block">
        <SliderService />
      </div>
      <div className="md:hidden">
        <SliderServiceResponsive />
      </div>
      <div className="hidden xl:block">
        <CustomerSaidVideo />
      </div>
      <div className="hidden xl:block">
        <AuraCampus />
      </div>
      <ActorSaid />
      <SliderCustomerSaid />
      <SeeMoreAboutAura />
      <ContactInformation />
      <ReelsOutStanding />
    </div>
  );
};

export default HomePage;
