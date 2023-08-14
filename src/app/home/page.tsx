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
import { IAuraInfos, IHome } from '@/interfaces/home/IHome';
import { supabase_website } from '@/services/supabase';
import { message } from 'antd';
import { IClinic } from '@/interfaces/clinic/clinic';
import LoadingDefault from '@/components/common/loading/LoadingDefault';

const GeneralHomeContext = createContext<any>(null);
const HomePage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [generalData, setGeneralData] = useState<any>();

  // const [clinicsHome, setClinicsHome] = useState<IClinic[]>([]);
  const [allClinics, setAllClinics] = useState<IClinic[]>([]);
  const [allClinicId, setAllClinicId] = useState<string[]>([]);
  const [clinicsOnHome, setClinicsOnHome] = useState<IClinic[]>([]);

  const [isShowAuraInfos, setIsShowAuraInfos] = useState<boolean>(true);
  const [auraInfos, setAuraInfos] = useState<IAuraInfos[]>([]);

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
    setAllClinicId(data[0].data.clinic_ids);
    setIsShowAuraInfos(data[0].data.hasAuraInfos);
    setAuraInfos(data[0].data.auraInfos);
    const allId = data[0].data.clinic_ids;

    const { data: allClinics, error: errorClinics } = await supabase_website
      .from('clinics')
      .select('*');
    if (errorClinics) {
      message.error(errorClinics.message);
      return;
    } else {
      setAllClinics(allClinics);
      setLoading(false);
    }

    allId &&
      allId.map((id: string) => {
        const tmp = allClinics.filter((clinic) => clinic.id == id);
        console.log('tmp: ', tmp[0]);
        if (tmp.length !== 0) {
          setClinicsOnHome((prev) => [...prev, tmp[0]]);
        }
      });

    setLoading(false);
  };

  console.log('data_here: ', generalData);
  console.log('data_clinics: ', allClinics);
  console.log('auraInfos: ', auraInfos);

  return (
    <>
      {loading && <LoadingDefault loading={loading} />}
      <GeneralHomeContext.Provider value={{ generalData, setGeneralData }}>
        <div>
          <PanelContact />
          <div className="flex flex-col items-center justify-center ">
            <HeroSection />
          </div>
          <div className="hidden lg:block lg:w-full lg:mb-[20px] mb-[30px]">
            <SliderService />
          </div>
          <div className="md:hidden">
            <SliderServiceResponsive />
          </div>
          <CustomerSaidVideo />
          <AuraCampus
            allClinics={clinicsOnHome}
            allClinicId={allClinicId}
          />
          <ActorSaid />
          <SliderCustomerSaid />
          {isShowAuraInfos ? (
            <SeeMoreAboutAura auraInfos={auraInfos} />
          ) : (
            <div className="hidden lg:block lg:my-[00px]"></div>
          )}

          <ContactInformation />
        </div>
      </GeneralHomeContext.Provider>
    </>
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
