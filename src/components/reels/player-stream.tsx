import React, { useRef, useEffect, useMemo } from 'react';

interface Props {
  isConnectStream: boolean;
  streamInfo: any;
}
var webSDK: any = null;

const PlayerStream = ({ isConnectStream, streamInfo }: Props) => {
  const initFlag = useRef(false);
  const token = streamInfo?.token;
  const activityId = streamInfo?.activity_id;

  useEffect(() => {
    if (initFlag.current) {
      return;
    }
    //  if (!user?.activityId) return;
    if (!token) return;
    // if (!user) return;
    if (typeof window === 'undefined') return;
    if (!initFlag.current) {
      initFlag.current = true;
      webSDK = new (window as any).ByteLiveWebSDK({
        activityId: parseInt(activityId),
        token: token,
        mode: 1,
        service: 'livesaas',
        modules: [
          {
            id: 'player',
            mode: 'player',
          },
        ],
        options: {
          pcPlayerHeader: false,
          disabledLogin: false,
          disablePlayerCover: true,
        },
      });
      webSDK.on('permission.need', () => {});
      return () => {
        console.log('cleaned up');
        webSDK.destroy();
      };
    }
  }, [isConnectStream]);
  return (
    <div
      id="player"
      className="w-[100%] h-[100%]"></div>
  );
};

export default PlayerStream;
