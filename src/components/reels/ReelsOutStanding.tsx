import React from 'react';
import ReelCard from './ReelCard';


const ReelsOutStanding = () => {
     return (  
          <div className="w-full h-auto px-[5rem] pt-5 flex-wrap">
               <p className="font-[700] py-5 text-[2rem] text-[#bc2449]">Reels nổi bật</p>
               <div className="flex justify-between flex-wrap">
                    <ReelCard title="Cắt mí Minideep" author="Rey" date="3/3/2022"/>
                    <ReelCard title="HIFU ULTHERAPY 4.0" author="Trọng" date="08/08/2022"/>
                    <ReelCard title="Căng bóng da Glasskin Face" author="Hường" date="09/05/2022"/>
                    <ReelCard title="AURA Cây lăn đá cẩm thạch" author="Bebe" date="6/6/2022"/>
               </div>
          </div>
     );
}
 
export default ReelsOutStanding;