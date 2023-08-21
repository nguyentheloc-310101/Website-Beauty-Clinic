'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import CoverImageContact, {
  ContactCover,
} from '@/components/contact/CoverImageContact';
import { IClinic } from '@/interfaces/clinic/clinic';
import { message } from 'antd';
import { supabase_website } from '@/services/supabase';
import ClinicsOnContact from '@/components/contact/ClinicsOnContact';

const initCoverObj: ContactCover = {
  image: '',
  textAbove: '',
  textBeneath: '',
};
const ContactPageContext = createContext<any>(null);
const ContactPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [generalData, setGeneralData] = useState<any>();

  const [clinicsOnContact, setClinicOnContact] = useState<IClinic[]>([]);
  const [allClinicId, setAllClinicId] = useState<string[]>([]);
  const [coverData, setCoverData] = useState<ContactCover>(initCoverObj);
  const [clinicSelected, setClinicSelected] = useState<string>('');
  //clinics on database
  const [allClinicsFetch, setAllClinicsFetch] = useState<IClinic[]>([]);

  useEffect(() => {
    fetchDataContact();
  }, []);

  const fetchDataContact = async () => {
    setLoading(true);
    const { data, error } = await supabase_website
      .from('data')
      .select('*')
      .eq('key', 'contact');
    if (error) {
      message.error(error.message);
      setLoading(false);
      return;
    }
    let allId = [];
    if (data) {
      setGeneralData(data[0]);
      const tmpObj: ContactCover = {
        image: data[0].data.background,
        textAbove: data[0].data.title,
        textBeneath: data[0].data.subtitle,
      };
      setCoverData(tmpObj);
      setAllClinicId(data[0].data.clinic_ids);
      allId = data[0].data.clinic_ids;
    }
    console.log(allId);
    console.log(data);
    const { data: allClinics, error: errorClinics } = await supabase_website
      .from('clinics')
      .select('*');
    if (errorClinics) {
      message.error(errorClinics.message);
      return;
    } else {
      setAllClinicsFetch(allClinics);
    }
    if (allClinics) {
      allId &&
        allId.map((id: string) => {
          const tmp = allClinics.filter((clinic) => clinic.id == id);
          if (tmp.length !== 0) {
            setClinicOnContact((prev) => [...prev, tmp[0]]);
          }
        });
    }
  };
  console.log('clinicSelected', clinicSelected);
  return (
    <ContactPageContext.Provider value={{ clinicSelected }}>
      <CoverImageContact
        image={coverData.image}
        textAbove={coverData.textAbove}
        textBeneath={coverData.textBeneath}
      />
      <ClinicsOnContact
        setClinicSelected={setClinicSelected}
        where={'contact'}
        allClinics={clinicsOnContact}
      />
    </ContactPageContext.Provider>
  );
};

export default ContactPage;

export function useContactContext() {
  const context = useContext(ContactPageContext);
  if (!context) {
    throw new Error(
      'useGeneralDataContext must be used within a GeneralDataContext'
    );
  }
  return context;
}
