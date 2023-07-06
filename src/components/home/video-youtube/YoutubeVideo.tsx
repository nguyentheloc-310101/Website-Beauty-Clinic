import React from 'react';
import YouTube,  Options  from 'react-youtube';

interface Props {
  videoUrl: string;
}

const YoutubeVideo: React.FC<Props> = ({ videoUrl }) => {
  const extractVideoId = (url: string): string | undefined => {
    const videoIdRegex =
      /(?:https?:\/\/(?:www\.)?youtube\.com\/watch(?:\?v=|.*?\&v=)|youtu\.be\/)([^\s?&]+)/i;
    const match = url.match(videoIdRegex);
    return match && match[1];
  };

  const _onReady = (event: any) => {
    event.target.pauseVideo();
  };

  const opts: Options = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  const videoId = extractVideoId(videoUrl);

  return (
    <div>
      <h3>GeeksforGeeks - YouTube</h3>
      {videoId && (
        <YouTube
          videoId={videoId}
          opts={opts}
          onReady={_onReady}
        />
      )}
    </div>
  );
};

export default YoutubeVideo;
