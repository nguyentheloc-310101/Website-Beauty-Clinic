/* eslint-disable @next/next/no-img-element */
import { AiOutlinePlus } from "react-icons/ai";
import ProductsCarousel from "./ProductsCarousel";
import { ISessionStream } from "@/interfaces/stream/session-stream";
import { formatNumberWithCommas } from "@/services/functions";

interface Props {
    session: ISessionStream;
    setCurrentSession: any;
    setOpenModalVideo: (state: boolean) => void;
    setMode: any;
}
const LiveCard = ({
    session,
    setCurrentSession,
    setOpenModalVideo,
    setMode,
}: Props) => {
    console.log(session);
    return (
        <div className="flex flex-col rounded-lg overflow-hidden w-[calc((100%-90px)/4)] h-[40vh] sm:min-w-[270px] sm:w-[calc[(100%-90px)/4]] sm:h-[450px] shadow-md">
            <div className="relative w-full h-[95%]">
                <img
                    src={
                        session?.section[0]?.thumbnail ||
                        session?.staff_id[0]?.avatar ||
                        session?.avatar
                    }
                    alt="thumb"
                    className="w-full h-full object-cover rounded-lg"
                    onClick={() => {
                        setCurrentSession(session);
                        setMode("stream");
                        setOpenModalVideo(true);
                    }}
                />
                <span className="absolute top-[1rem] left-[1rem] rounded-lg text-[12px] px-[12px] py-[6px] bg-[#bc2449] text-white font-[500]">
                    Live
                </span>
            </div>

            <div className="h-auto w-full mt-5 px-2 pb-[8px]">
                <p className="font-[700] two-lines-truncate h-[60px] w-full text-[1.3rem] text-[#bc2449]">
                    {(session?.section && session?.section[0]?.name) ||
                        session.name ||
                        (session?.staff_id && session.staff_id[0].name)}
                </p>
                <div className="flex justify-between">
                    <span className="text-[#36383A] text-[0.9rem]">
                        @{session?.staff_id && session.staff_id[0].name}
                    </span>
                    <span className="text-[#36383A] text-[0.9rem]">
                        {session?.created_at
                            ? new Date(session?.created_at).toLocaleDateString()
                            : new Date().toLocaleDateString()}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default LiveCard;
