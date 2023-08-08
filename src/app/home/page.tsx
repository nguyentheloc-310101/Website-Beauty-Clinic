'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import ActorSaid from '@/components/home/actor-said/ActorSaid';
import AuraCampus from '@/components/home/aura-campus/AuraCampus';
import CustomerSaidVideo from '@/components/home/customer-said-video/CustomerSaidVideo';
import SliderCustomerSaid from '@/components/home/customer-said/SliderCustomerSaid';
import ContactInformation from '@/components/home/form-contact/ContactInformation';
import HeroSection from '@/components/home/hero';
import SeeMoreAboutAura from '@/components/home/see-more/SeeMoreAboutAura';
import SliderService from '@/components/home/service-aura/ServiceAura';
import SliderServiceResponsive from '@/components/home/service-aura/ServiceAuraResponsive';
import PanelContact from '@/components/panel-contact/PanelContact';
import { IHome } from '@/interfaces/home/IHome';
import { supabase_website } from '@/services/supabase';
import { message } from 'antd';
import { IClinic } from '@/interfaces/clinic/clinic';
import LoadingDefault from '@/components/common/loading/LoadingDefault';

const GeneralHomeContext = createContext<any>(null);
const HomePage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [generalData, setGeneralData] = useState<any>();

  const [clinicsHome, setClinicsHome] = useState<IClinic[]>([]);
  useEffect(() => {
    fetchDataHome();
  }, []);

  const fetchDataHome = async () => {
    setLoading(true);
    const { data, error } = await supabase_website.from('data').select('*');
    if (error) {
      message.error(error.message);
      setLoading(false);

      return;
    }
    setGeneralData(data[0]);
    setLoading(false);
  };

  console.log('data_here: ', generalData);

  return (
    <GeneralHomeContext.Provider value={{ generalData, setGeneralData }}>
      <div>
        <PanelContact />
        <div className="flex flex-col items-center justify-center ">
          <HeroSection />
        </div>
        <div className="hidden md:block">
          <SliderService />
        </div>
        <div className="md:hidden">
          <SliderServiceResponsive />
        </div>
        <CustomerSaidVideo />
        <AuraCampus />
        <ActorSaid />
        <SliderCustomerSaid />
        <SeeMoreAboutAura />
        <ContactInformation />
      </div>
      {loading && <LoadingDefault loading={loading} />}
    </GeneralHomeContext.Provider>
  );
};

export default HomePage;

export function useGeneralHomeContext() {
  const context = useContext(GeneralHomeContext);
  if (!context) {
    throw new Error(
      'useGeneralDataContext must be used within a GeneralDataContext'
    );
  }
  return context;
}
