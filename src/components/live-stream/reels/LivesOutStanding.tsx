"use client";
import Link from "next/link";
import { ISessionStream } from "@/interfaces/stream/session-stream";
import LiveCard from "./LiveCard";
type Props = {
    sessions?: ISessionStream[];
    setCurrentSession: any;
    setOpenModalVideo: (state: boolean) => void;
    setMode: any;
};
const LivesOutStanding = ({
    sessions,
    setCurrentSession,
    setOpenModalVideo,
    setMode,
}: Props) => {
    return (
        <div className="w-full h-auto px-[20%] sm:px-[10%] pt-[40px] flex-wrap mb-[10%] flex flex-col gap-[30px]">
            <div className="flex justify-between items-center">
                <p className="font-[600] !my-0 text-[1.2rem] sm:py-5 sm:text-[2.5rem] text-[#bc2449]">
                    Lives nổi bật
                </p>
                {/* <Link href="/live-commerce" className="flex items-center gap-5">
                    <span className="font-[700] text-[1.2rem] sm:py-5 sm:text-[2rem] text-[#bc2449]">
                        Xem thêm
                    </span>
                    <BsChevronRight className="text-[1.2rem] sm:text-[2rem] text-[#bc2449]" />{" "}
                </Link> */}
            </div>
            <div className="flex flex-wrap w-full gap-[30px]">
                {sessions &&
                    sessions.length > 0 &&
                    sessions
                        .filter((session) => session.created_at != null)
                        .map((session, idx) => {
                            return (
                                <LiveCard
                                    session={session}
                                    key={idx}
                                    setCurrentSession={setCurrentSession}
                                    setOpenModalVideo={setOpenModalVideo}
                                    setMode={setMode}
                                />
                            );
                        })}
            </div>
        </div>
    );
};

export default LivesOutStanding;
