import { IClinic } from '@/interfaces/clinic/clinic';
import React from 'react';
import CardCampus from '../home/aura-campus/CardCampus';
interface ClinicsProps {
  allClinics: IClinic[];
  setClinicSelected?: any;
  where?: 'contact' | 'home' | '';
}
const ClinicsOnContact = (props: ClinicsProps) => {
  const { allClinics, where, setClinicSelected } = props;
  return (
    <div
      id="content"
      className="flex flex-wrap items-center justify-start gap-[16px] px-[16px] mt-[32px] lg:px-[80px] lg:gap-[50px] lg:mt-[40px]">
      {allClinics &&
        allClinics.map((item, key) => {
          return (
            <CardCampus
              setClinicSelected={setClinicSelected}
              where={where}
              key={key}
              item={item}
            />
          );
        })}
    </div>
  );
};

export default ClinicsOnContact;
