import { ISessionStream } from "@/interfaces/stream/session-stream";
import React, { useRef, useEffect, useMemo } from "react";
var webSDK: any = null;

type Props = {
    isConnectStream: boolean;
    session: ISessionStream;
};
const PlayerStream = ({ isConnectStream, session }: Props) => {
    const initFlag = useRef(false);
    const token = session?.token;
    console.log(token);
    useEffect(() => {
        if (initFlag.current) {
            return;
        }
        //  if (!user?.activityId) return;
        if (!token) return;
        // if (!user) return;
        if (typeof window === "undefined") return;
        if (!initFlag.current) {
            initFlag.current = true;
            webSDK = new (window as any).ByteLiveWebSDK({
                activityId: parseInt(session?.activity_id),
                token: token,
                mode: 1,
                service: "livesaas",
                modules: [
                    {
                        id: "player",
                        mode: "player",
                    },
                ],
                options: {
                    pcPlayerHeader: false,
                    disabledLogin: false,
                    disablePlayerCover: true,
                    purePlayer: true,
                },
            });
            webSDK.on("permission.need", () => {
                console.log("khoi");
            });
            return () => {
                console.log("cleaned up");
                webSDK.destroy();
            };
        }
        return;
    }, [isConnectStream]);
    return (
        <div
            id="player"
            className="w-full h-full border border-solid border-[#8F9499] rounded-[2px] z-[100]"
        ></div>
    );
};

export default PlayerStream;
