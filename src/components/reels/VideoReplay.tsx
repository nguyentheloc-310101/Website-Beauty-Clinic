import React from 'react';
import Image from 'next/image';
import MainImg from '../../statics/images/20230703-133201.png';
import Video1Img from '../../statics/images/20230703-133154.png';
import Video2Img from '../../statics/images/20230703-133132.png';

const VideoReplay = () => {
     return (  
          <div className="w-full h-auto px-[5rem] pt-5 flex-wrap">
               <p className="font-[700] py-5 text-[2rem] text-[#bc2449]">Video đã phát</p>
               <div className="flex justify-between gap-5 h-[60vh]">
                    <div className="relative w-[50%] h-full overflow-hidden rounded-lg">
                         <Image src={MainImg} alt="theme" className="w-full h-full object-cover"/>
                         <div className="absolute bottom-5 w-[75%] left-5 flex flex-col gap-2">
                              <p className="text-[1.5rem] font-[600] text-[#bc2449]">Title của video</p>
                              <p className="text-[0.9rem] text-[#36383A]">Lorem ipsum dolor sit amet consectetur. Tortor hendrerit aliquam suscipit fringilla. Elit eget proin semper tempus sed biben.</p>
                              <button className="w-[35%] bg-[#bc2449] rounded-lg text-white py-2 px-3">Xem ngay</button>
                         </div>
                    </div>
          
                    <div className="flex flex-col gap-5 relative w-[50%] h-full">
                         <div className="h-[50%] overflow-hidden rounded-lg">
                              <Image src={Video1Img} alt="theme" className="w-full h-full"/>
                         </div>
                         <div className="h-[50%] overflow-hidden rounded-lg">
                              <Image src={Video2Img} alt="theme" className="w-full h-full"/>
                         </div>
                         
                    </div>
               </div>
          </div>
     );
}
 
export default VideoReplay;