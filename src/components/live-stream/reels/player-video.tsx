import { ISessionStream } from "@/interfaces/stream/session-stream";
import { getVideoInfo } from "@/services/stream/stream-services";
import { supabase } from "@/services/supabase";
import { Spin } from "antd";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import useSWR from "swr";
interface Props {
    session: ISessionStream;
}

const PlayerVideo = ({ session }: Props) => {
    const [isPortrait, setIsPortrait] = useState(false);
    const fetchVideoURL = async () => {
        try {
            if (session && session.section) {
                let videoInfo = await getVideoInfo(
                    session.activity_id,
                    session.section[0].video_id
                );
                return videoInfo.PlayUrl;
            }
        } catch (error) {}
        return null;
    };
    let {
        data: videoUrl,
        error,
        isLoading,
    } = useSWR(`/videos/${session.section[0].video_id}`, fetchVideoURL);

    function detectVideoOrientation(videoUrl: string) {
        return new Promise<boolean>((resolve, reject) => {
            const video = document.createElement("video");
            video.preload = "metadata";
            video.src = videoUrl;
            if (!videoUrl) {
                return resolve(false);
            }
            video.onloadedmetadata = () => {
                const aspectRatio = video.videoWidth / video.videoHeight;
                const isPortrait = aspectRatio < 1;
                resolve(isPortrait);
            };

            video.onerror = (error) => {
                reject(false);
            };
        });
    }
    useEffect(() => {
        const detectVideo = async () => {
            let data = await detectVideoOrientation(videoUrl);
            setIsPortrait(data);
        };
        detectVideo();
    }, [videoUrl]);
    if (isLoading) {
        return (
            <div className="w-full h-full flex items-center justify-center">
                <Spin size={"large"}></Spin>
            </div>
        );
    }
    return (
        <section className="player-wrapper">
            <ReactPlayer
                id="video"
                url={videoUrl}
                playing
                volume={1}
                muted={false}
                controls
                width={isPortrait ? "45%" : "100%"}
                height={isPortrait ? "100%" : "80%"}
            ></ReactPlayer>
        </section>
    );
};
export default PlayerVideo;
