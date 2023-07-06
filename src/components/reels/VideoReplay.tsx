import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import MainImg from '../../statics/images/live-commerce/20230703-133201.png';
import Video1Img from '../../statics/images/live-commerce/20230703-133154.png';
import Video2Img from '../../statics/images/live-commerce/20230703-133132.png';
import {LiaEyeSolid} from 'react-icons/lia';
import PlayerStream from './player-stream';
import { supabase } from '@/services/supabase';

const VideoReplay = () => {
     const [streams, setStreams] = useState([]);
     useEffect(()=>{
          getStreams();
     },[]);

     const getStreams = async ()=>{
          try{
               let data : any = await supabase.from('stream_info').select().eq('status','live');
               console.log(data?.data);
               setStreams(data?.data);
          }catch(e){
               console.log(e);
          }
     }
     const channel = supabase
          .channel('schema-db-changes')
          .on(
          'postgres_changes',
          {
               event: '*',
               schema: 'public',
               table: 'stream_info'
          },
          async (payload) => {
               await getStreams();
          }
          )
          .subscribe()
     return (  
          <div className="w-full h-auto px-[16px] sm:px-[5rem] pt-5 flex-wrap">
               <p className="font-[700] py-1 sm:py-5 text-[1.5rem] sm:text-[2rem] text-[#bc2449]">Video đã phát</p>
               <div className="flex justify-between gap-5 h-[60vh] sm:h-[75vh]">
                    <div className="relative w-[50%] h-full overflow-hidden rounded-lg">
                         <div className="z-50 w-full h-full absolute top-0 left-0 bg-gradient-to-b from-transparent to-slate-50"></div>
                         <Image src={MainImg} alt="theme" className="z-10 w-full h-full object-cover"/>
                         <div className="z-[100] absolute bottom-5 w-[75%] left-5 flex flex-col gap-2">
                              <p className="text-[1rem] sm:text-[1.5rem] font-[600] text-[#bc2449]">Title của video</p>
                              <p className="text-[0.7rem] sm:text-[0.9rem] text-[#36383A]">Lorem ipsum dolor sit amet consectetur. Tortor hendrerit aliquam suscipit fringilla. Elit eget proin semper tempus sed biben.</p>
                              <button className="text-[0.7rem] sm:text-[1rem] w-[45%] sm:w-[35%] bg-[#bc2449] rounded-lg text-white py-2 px-3">Xem ngay</button>
                         </div>
                    </div>
                    <div className="flex flex-col gap-5 relative w-[50%] h-full">
                    {
                         streams.length == 1?
                         <>
                              <div className="h-[50%]">
                                   <div className="relative rounded-lg h-[80%] overflow-hidden">
                                        <PlayerStream isConnectStream={true} streamInfo={streams[0]}/>
                                        <p className="absolute top-[1rem] left-[1rem] rounded-lg py-1 px-2 bg-[#bc2449] text-white">Live</p>
                                        <p className="absolute top-[1rem] right-[1rem] rounded-lg flex gap-2 items-center py-1 px-2 bg-[#1F1F1F33] text-white text-[1rem]"><LiaEyeSolid/> <span>3.5k</span></p>
                                   </div>
                                   <div className="px-5">
                                        <p className="font-[700] my-1 text-[0.7rem] sm:text-[1.1rem] text-[#bc2449]">Test Stream</p>
                                        <div className="flex justify-between text-[0.7rem] sm:text-[1rem]">
                                             <span>@Rey</span>
                                             <p>5/7/2023     10:30</p>
                                        </div>
                                   </div>
                              </div>
                              <div className="h-[50%]">
                              <div className="relative rounded-lg h-[80%] overflow-hidden">
                                        <Image src={Video2Img} alt="theme" className="w-full h-full"/>
                                        <p className="absolute top-[1rem] left-[1rem] rounded-lg py-1 px-2 bg-[#bc2449] text-white">Live</p>
                                        <p className="absolute top-[1rem] right-[1rem] rounded-lg flex gap-2 items-center py-1 px-2 bg-[#1F1F1F33] text-white text-[1rem]"><LiaEyeSolid/> <span>3.5k</span></p>
                                   </div>
                                   <div className="px-5">
                                        <p className="font-[700] my-1  text-[0.7rem] sm:text-[1rem] text-[#bc2449]">Combo mày môi tùy chọn</p>
                                        <div className="flex justify-between text-[0.7rem] sm:text-[1rem]">
                                             <span>@Heo</span>
                                             <p>5/5/2023     7:30</p>
                                        </div>
                                   </div>
                              </div>
                         </>
                         :
                         streams.length == 2?
                         <>
                              <div className="h-[50%]">
                                   <div className="relative rounded-lg h-[80%] overflow-hidden">
                                        <PlayerStream isConnectStream={true} streamInfo={streams[0]}/>
                                        <p className="absolute top-[1rem] left-[1rem] rounded-lg py-1 px-2 bg-[#bc2449] text-white">Live</p>
                                        <p className="absolute top-[1rem] right-[1rem] rounded-lg flex gap-2 items-center py-1 px-2 bg-[#1F1F1F33] text-white text-[1rem]"><LiaEyeSolid/> <span>3.5k</span></p>
                                   </div>
                                   <div className="px-5">
                                        <p className="font-[700] my-1 text-[0.7rem] sm:text-[1rem] text-[#bc2449]">Test Stream</p>
                                        <div className="flex justify-between text-[0.7rem] sm:text-[1rem]">
                                             <span>@Rey</span>
                                             <p>5/7/2023     10:30</p>
                                        </div>
                                   </div>
                              </div>
                              <div className="h-[50%]">
                              <div className="relative rounded-lg h-[80%] overflow-hidden">
                                        <PlayerStream isConnectStream={true} streamInfo={streams[1]}/>
                                        <p className="absolute top-[1rem] left-[1rem] rounded-lg py-1 px-2 bg-[#bc2449] text-white">Live</p>
                                        <p className="absolute top-[1rem] right-[1rem] rounded-lg flex gap-2 items-center py-1 px-2 bg-[#1F1F1F33] text-white text-[1rem]"><LiaEyeSolid/> <span>3.5k</span></p>
                                   </div>
                                   <div className="px-5">
                                        <p className="font-[700] my-1 text-[0.7rem] sm:text-[1rem] text-[#bc2449]">Combo mày môi tùy chọn</p>
                                        <div className="flex justify-between text-[0.7rem] sm:text-[1rem]">
                                             <span>@Heo</span>
                                             <p>5/5/2023     7:30</p>
                                        </div>
                                   </div>
                              </div>
                         </>
                         :
                         <>
                              <div className="h-[50%]">
                                   <div className="relative rounded-lg h-[80%] overflow-hidden">
                                        <Image src={Video2Img} alt="theme" className="w-full h-full"/>
                                        <p className="absolute top-[1rem] left-[1rem] rounded-lg py-1 px-2 bg-[#bc2449] text-white">Live</p>
                                        <p className="absolute top-[1rem] right-[1rem] rounded-lg flex gap-2 items-center py-1 px-2 bg-[#1F1F1F33] text-white text-[1rem]"><LiaEyeSolid/> <span>3.5k</span></p>
                                   </div>
                                   <div className="px-5">
                                        <p className="font-[700] my-1 text-[0.7rem] sm:text-[1rem] text-[#bc2449]">Test Stream</p>
                                        <div className="flex justify-between text-[0.7rem] sm:text-[1rem]">
                                             <span>@Rey</span>
                                             <p>5/7/2023     10:30</p>
                                        </div>
                                   </div>
                              </div>
                              <div className="h-[50%]">
                              <div className="relative rounded-lg h-[80%] overflow-hidden">
                                        <Image src={Video1Img} alt="theme" className="w-full h-full"/>
                                        <p className="absolute top-[1rem] left-[1rem] rounded-lg py-1 px-2 bg-[#bc2449] text-white">Live</p>
                                        <p className="absolute top-[1rem] right-[1rem] rounded-lg flex gap-2 items-center py-1 px-2 bg-[#1F1F1F33] text-white text-[1rem]"><LiaEyeSolid/> <span>3.5k</span></p>
                                   </div>
                                   <div className="px-5">
                                        <p className="font-[700] my-1 text-[0.7rem] sm:text-[1rem] text-[#bc2449]">Combo mày môi tùy chọn</p>
                                        <div className="flex justify-between text-[0.7rem] sm:text-[1rem]">
                                             <span>@Heo</span>
                                             <p>5/5/2023     7:30</p>
                                        </div>
                                   </div>
                              </div>
                         </>
                    }
                    </div>
                    
               </div>
          </div>
     );
}
 
export default VideoReplay;