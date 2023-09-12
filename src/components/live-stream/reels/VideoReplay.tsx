/* eslint-disable @next/next/no-img-element */
import { supabase } from "@/services/supabase";
import { useEffect, useState } from "react";
import { LiaEyeSolid } from "react-icons/lia";

import PlayerStream from "./player-stream";
const MainImg =
    "https://ucarecdn.com/49a4f250-587d-4660-a221-e6fb026890dd/-/quality/smart/-/format/webp/";
const Video1Img =
    "https://ucarecdn.com/e70e3d89-5556-411d-975f-8f72e60bf868/-/quality/smart/-/format/webp/";
const Video2Img =
    "https://ucarecdn.com/03ef030b-62ca-479a-b593-a8928a96705a/-/quality/smart/-/format/webp/";
const VideoReplay = () => {
    const [streams, setStreams] = useState([]);
    useEffect(() => {
        getStreams();
    }, []);

    const getStreams = async () => {
        try {
            let data: any = await supabase
                .from("stream_info")
                .select()
                .eq("status", "live");

            setStreams(data?.data);
        } catch (e) {
            console.log(e);
        }
    };
    // const channel = supabase
    //   .channel('schema-db-changes')
    //   .on(
    //     'postgres_changes',
    //     {
    //       event: '*',
    //       schema: 'public',
    //       table: 'stream_info',
    //     },
    //     async (payload) => {
    //       await getStreams();
    //     }
    //   )
    //   .subscribe();
    return (
        <div className="w-full flex flex-col gap-[30px] px-[16px] sm:px-[10%] flex-wrap">
            <p className="font-[600] py-1 sm:py-5 text-[1.2rem] sm:text-[2.5rem] text-[#bc2449]">
                Video đã phát
            </p>
            <section className="flex w-full items-center justify-center gap-[30px]">
                <div className="relative replay-video w-[calc((100%-30px)/2)] h-[720px]">
                    <div className="w-full h-full  bg-gradient-to-t from-[#fff] via-transparent to-transparent absolute top-0 left-0"></div>
                    <div className="absolute bottom-[2rem] left-[2rem] flex flex-col gap-[1rem]">
                        <h1 className="text-[#bc2449] font-[600] text-[2rem] my-0">
                            Title của video
                        </h1>
                        <p className="text-[#36383A] text-[14px] font-[400] max-w-[60%] my-0">
                            Lorem ipsum dolor sit amet consectetur. Tortor
                            hendrerit aliquam suscipit fringilla. Elit eget
                            proin semper tempus sed biben.
                        </p>
                        <div>
                            <button className="px-[32px] py-[12px] text-[1rem] font-[500] bg-[#bc2449] text-white rounded-lg">
                                Xem ngay
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-[30px] w-[calc((100%-30px)/2)] h-[720px]">
                    <div className="w-full h-[calc((100%-30px)/2)] flex flex-col gap-[1rem]">
                        <img
                            src={Video1Img}
                            alt="img"
                            className="w-full flex-[5] rounded-lg"
                        />
                        <div className="w-full flex-[1] px-[1rem] flex flex-col gap-[8px]">
                            <h1 className="text-[#bc2449] font-[600] text-[1.25rem] my-0">
                                Title của video
                            </h1>{" "}
                            <div className="w-full flex items-center justify-between text-[12px] text-[#36383A]">
                                <span>@username</span>
                                <span>dd/mm/yy</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-[calc((100%-30px)/2)] flex flex-col gap-[1rem]">
                        <img
                            src={Video1Img}
                            alt="img"
                            className="w-full flex-[5] rounded-lg"
                        />
                        <div className="w-full flex-[1] px-[1rem] flex flex-col gap-[8px]">
                            <h1 className="text-[#bc2449] font-[600] text-[1.25rem] my-0">
                                Title của video
                            </h1>{" "}
                            <div className="w-full flex items-center justify-between text-[12px] text-[#36383A]">
                                <span>@username</span>
                                <span>dd/mm/yy</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default VideoReplay;
