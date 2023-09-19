"use client";
import LivesOutStanding from "@/components/live-stream/reels/LivesOutStanding";
import ReelsOutStanding from "@/components/live-stream/reels/ReelsOutStanding";
import VideoReplay from "@/components/live-stream/reels/VideoReplay";
import ModalViewVideo from "@/components/live-stream/reels/modal-view-video";
import { ISessionStream } from "@/interfaces/stream/session-stream";
import { supabase } from "@/services/supabase";
import useStreamsStore from "@/stores/stream-store";
import Head from "next/head";
import Script from "next/script";
import { useEffect, useState } from "react";
import useSWR from "swr";

type Props = {
    hideNavigate?: boolean;
};
function LiveCommerce({ hideNavigate }: Props) {
    const [openModal, setOpenModal] = useState(false);
    const [mode, setMode] = useState<"vod" | "stream">("vod");
    const [currentSession, setCurrentSession] = useState<ISessionStream>();
    const streams = useStreamsStore((state) => state.streams);
    const setStreams = useStreamsStore((state) => state.setStreams);

    const fetchSessions = async () => {
        let { data: sessions } = await supabase.rpc("get_all_sesstions_stream");
        if (sessions && sessions.length > 0) {
            return sessions as ISessionStream[];
        }
        return [];
    };
    let {
        data: sessions,
        error,
        isLoading,
    } = useSWR("/sessions", fetchSessions);
    const fetchStreams = async () => {
        let { data: streams } = await supabase.rpc("get_all_streamers_live");
        if (streams && streams.length > 0) {
            let _streams: ISessionStream[] = [];
            for (let i = 0; i < streams.length; i++) {
                console.log(i);
                let id = streams[i].id;
                _streams.push(streams[i]);
                for (let j = i + 1; j < streams.length; j++) {
                    if (streams[i].id == id && j == streams.length - 1) {
                        i = streams.length;
                        break;
                    }
                    if (streams[j].id == id) {
                        continue;
                    } else {
                        i = j;
                        break;
                    }
                }
            }
            setStreams(_streams);
            return;
        }
        setStreams([]);
    };
    useEffect(() => {
        fetchStreams();
    }, []);
    supabase
        .channel("StatusCatcher")
        .on(
            "postgres_changes",
            { event: "*", schema: "public", table: "stream_info" },
            async (payload) => {
                console.log("realtime change");
                await fetchStreams();
            }
        )
        .subscribe();
    return (
        <>
            <Script src="https://sf16-scmcdn-sg.ibytedtos.com/obj/static-sg/livesaas-client/pc/byteplus/js/index.1.1.2-beta.2.js" />
            <link
                rel="stylesheet"
                href="https://sf16-scmcdn-sg.ibytedtos.com/obj/static-sg/livesaas-client/pc/byteplus/css/index.1.1.2-beta.2.css"
            />

            <div className="w-full">
                <Head>
                    <title>Live Commerce</title>
                    <meta
                        property="og:title"
                        content="Live Commerce"
                        key="title"
                    />
                </Head>
                {streams && streams.length > 0 && (
                    <LivesOutStanding
                        sessions={streams}
                        setCurrentSession={setCurrentSession}
                        setOpenModalVideo={setOpenModal}
                        setMode={setMode}
                        hideNavigate={hideNavigate}
                    />
                )}
                {sessions && sessions.length > 0 && (
                    <ReelsOutStanding
                        sessions={sessions}
                        setCurrentSession={setCurrentSession}
                        setOpenModalVideo={setOpenModal}
                        setMode={setMode}
                        hideNavigate={hideNavigate}
                    />
                )}

                {/* <VideoReplay /> */}
            </div>
            {openModal && (
                <ModalViewVideo
                    mode={mode}
                    session={currentSession}
                    setOpenModalVideo={setOpenModal}
                />
            )}
        </>
    );
}
export default LiveCommerce;
