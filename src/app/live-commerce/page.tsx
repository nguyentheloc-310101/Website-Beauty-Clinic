'use client';
import ReelsOutStanding from '@/components/live-stream/reels/ReelsOutStanding';
import VideoReplay from '@/components/live-stream/reels/VideoReplay';
import Head from 'next/head';
import Script from 'next/script';

export default function LiveCommerce() {
  return (
    <>
      <Script src="https://sf16-scmcdn-sg.ibytedtos.com/obj/static-sg/livesaas-client/pc/byteplus/js/index.1.1.2-beta.2.js" />
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
    </>
  );
}
