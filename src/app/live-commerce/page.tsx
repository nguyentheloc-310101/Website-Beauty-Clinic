'use client';
import ReelsOutStanding from "@/components/reels/ReelsOutStanding";
import VideoReplay from "@/components/reels/VideoReplay";

export default function LiveCommerce() {
  return (
    <div>
      <ReelsOutStanding/>
      <div className="h-[10vh]"></div>
      <VideoReplay/>
    </div>
  );
}
