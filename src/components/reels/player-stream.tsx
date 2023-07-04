import React, {useRef, useEffect, useMemo} from 'react';


interface Props {
  isConnectStream: boolean;
}
var webSDK: any = null;

const PlayerStream = ({isConnectStream}:Props) => {
     const initFlag = useRef(false);
     const token = "YvFBcI"; //streamInfo?.token;
     const activityId = "1769851383158785";//streamInfo?.activity_id;

   
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
           activityId: parseInt(activityId),
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
             pcPlayerHeader:false,
             disabledLogin: false,
             disablePlayerCover: true,
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
     }, [isConnectStream]);
     return (
        <div id="player" className="w-[100%] h-[100%]"></div>
     );
}
 
export default PlayerStream;