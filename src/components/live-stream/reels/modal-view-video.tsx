import PlayerStream from "./player-stream";
import PlayerVideo from "./player-video";
import { XMarkIcon } from "@heroicons/react/24/outline";
import UserChats from "./chats";
import { ISessionStream } from "@/interfaces/stream/session-stream";

type Props = {
    mode: "vod" | "stream";
    session?: ISessionStream;
    setOpenModalVideo: (state: boolean) => void;
};
const ModalViewVideo = ({ mode, session, setOpenModalVideo }: Props) => {
    console.log(session);
    return (
        <div className="fixed top-0 left-0 z-[1000] flex items-center justify-center w-screen h-screen bg-[rgba(31,31,31,0.2)]">
            <div className="relative flex w-[70%] h-[70%] p-[24px] bg-white rounded-lg">
                <div className="h-full w-[65%] object-cover bg-black flex items-center justify-center">
                    {session && mode == "stream" ? (
                        <PlayerStream
                            isConnectStream={true}
                            session={session}
                        />
                    ) : (
                        session && <PlayerVideo session={session} />
                    )}
                </div>
                <div className=" w-[35%] h-full text-[#8F9499] pl-[1rem] gap-[15px] flex flex-col justify-between">
                    <span className="flex items-center gap-[12px] text-[0.85rem]">
                        Live chat{" "}
                        <img
                            src="/images/svg/down-arrow.svg"
                            alt="img"
                            className="w-6 h-6"
                        />{" "}
                    </span>
                    <div className="flex-[1]">
                        <UserChats chats={session?.section[0]?.chats || []} />
                    </div>
                </div>
                <XMarkIcon
                    className="absolute top-[24px] right-[24px] w-6 h-6"
                    onClick={() => setOpenModalVideo(false)}
                    color="#8F9499"
                />
            </div>
        </div>
    );
};

export default ModalViewVideo;
