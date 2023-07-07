'use client';
import ReelsOutStanding from '@/components/reels/ReelsOutStanding';
import VideoReplay from '@/components/reels/VideoReplay';
import Head from 'next/head';

export default function LiveCommerce() {
  return (
    <div>
      <Head>
        <title>Live Commerce</title>
        <meta
          property="og:title"
          content="Live Commerce"
          key="title"
        />
      </Head>
      <ReelsOutStanding />
      <div className="h-[10vh]"></div>
      <VideoReplay />
    </div>
  );
}
