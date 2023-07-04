"use client";
import React from 'react';
import ReelCard from './ReelCard';


const ReelsOutStanding = () => {
     return (  
          <div className="w-full h-auto px-[5rem] pt-5 flex-wrap">
               <p className="font-[700] py-5 text-[2rem] text-[#bc2449]">Reels nổi bật</p>
               <div className="flex justify-between flex-wrap">
                    <ReelCard/>
                    <ReelCard/>
                    <ReelCard/>
                    <ReelCard/>
               </div>
          </div>
     );
}
 
export default ReelsOutStanding;