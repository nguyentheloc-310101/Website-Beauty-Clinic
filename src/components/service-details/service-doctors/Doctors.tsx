import { doctorData } from '@/data/service-data/serviceDoctorData';
import React from 'react';
import DoctorCard from './doctor-card/DoctorCard';
import { gradientText } from '@/constants/gradentText';
import { IService } from '@/interfaces/service/service';
import { IDoctor } from '@/interfaces/doctor/doctor';
interface DoctorsProps {
  serviceSelected: any;
}
export const Doctors = (props: DoctorsProps) => {
  const { serviceSelected } = props;
  const doctorsList: IDoctor[] = serviceSelected?.doctors;
  return (
    <>
      <div
        className={`${gradientText} mt-[32px] mb-[8px] lg:text-[35px] font-[800] lg:leading-[52px] lg:tracking-[0.25px] lg:mb-[30px]`}>
        Đội ngũ Y Bác sĩ uy tín
      </div>

      <div className="flex flex-col lg:flex-row gap-[8px] lg:flex-wrap lg:gap-[20px]">
        {doctorsList?.map((item, key) => {
          return (
            <div key={key}>
              <DoctorCard
                name={item.name}
                experience={item.experience}
                desc_doctor={item.desc_doctor}
                major={item.major}
                image={item.image}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
