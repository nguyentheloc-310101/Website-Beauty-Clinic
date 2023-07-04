'use client';
import ReelsOutStanding from "@/components/reels/ReelsOutStanding";
import VideoReplay from "@/components/reels/VideoReplay";
import Script from "next/script";

export default function LiveCommerce() {
  return (
    <div>
      <ReelsOutStanding/>
      <div className="h-[10vh]"></div>
      <VideoReplay/>
      <script src="https://sf16-scmcdn-sg.ibytedtos.com/obj/static-sg/livesaas-client/pc/byteplus/js/index.1.1.2-beta.2.js"/>
    </div>
  );
}
