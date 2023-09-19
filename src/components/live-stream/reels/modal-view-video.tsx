import PlayerStream from "./player-stream";
import PlayerVideo from "./player-video";
import { XMarkIcon } from "@heroicons/react/24/outline";
import UserChats from "./chats";
import { ISessionStream, TChat } from "@/interfaces/stream/session-stream";
import { useState } from "react";
import ServiceCard from "../services/service-card";
import { formatNumberWithCommas } from "@/services/functions";
import {
  TOrderService,
  getOrderStorage,
} from "@/services/stream/order-service";
import { useRouter } from "next/navigation";
import { supabase } from "@/services/supabase";

type Props = {
  mode: "vod" | "stream";
  session?: ISessionStream;
  setOpenModalVideo: (state: boolean) => void;
};
const ModalViewVideo = ({ mode, session, setOpenModalVideo }: Props) => {
  const [chats, setChats] = useState<TChat[]>(session?.section[0]?.chats || []);
  const [currentTab, setCurrentTab] = useState<"chat" | "services">("services");
  const [orderServices, setOrderServices] = useState<TOrderService[]>(
    getOrderStorage()
  );
  const router = useRouter();
  supabase
    .channel("session-changes")
    .on(
      "postgres_changes",
      {
        event: "*",
        schema: "public",
        table: "streams_sections",
        filter: `id=eq.${session?.section[0]?.id}`,
      },
      (payload) => {
        if (payload.new) {
          const myObject: { [key: string]: any } = payload.new;
          const chats = myObject["chats"] as TChat[];
          if (chats) {
            setChats(chats);
          }
        }
        console.log("payload", payload);
      }
    )
    .subscribe();
  return (
    <div className="fixed top-0 left-0 z-[1000] flex items-center justify-center w-screen h-screen bg-[rgba(31,31,31,0.2)]">
      <div className="relative flex w-[70%] h-[70%] p-[24px] bg-white rounded-lg">
        <div className="h-full w-[65%] object-cover bg-black flex items-center justify-center">
          {session && mode == "stream" ? (
            <PlayerStream isConnectStream={true} session={session} />
          ) : (
            session && <PlayerVideo session={session} />
          )}
        </div>
        <div className=" w-[35%] h-full text-[#8F9499] pl-[1rem] pr-[3rem] gap-[15px] flex flex-col justify-start">
          <div className="w-full flex items-center justify-center">
            <span
              className={`flex items-center justify-center gap-[12px] font-[600] hover:cursor-pointer text-[1rem] w-[50%] text-center px-[1rem] py-[0.5rem] rounded-t-[8px] ${
                currentTab == "chat"
                  ? "bg-[#F8DDE4] text-[#EB98AD]"
                  : "text-[#BC2449]"
              }`}
              onClick={() => setCurrentTab("chat")}
            >
              Bình luận
            </span>
            <span
              className={`flex items-center justify-center gap-[12px] font-[600] hover:cursor-pointer text-[1rem] w-[50%] text-center px-[1rem] py-[0.5rem] rounded-t-[8px] ${
                currentTab == "services"
                  ? "bg-[#F8DDE4] text-[#EB98AD]"
                  : "text-[#BC2449]"
              }`}
              onClick={() => setCurrentTab("services")}
            >
              Dịch vụ
            </span>
          </div>
          {currentTab == "chat" ? (
            <div className="flex-[1] flex flex-col gap-[8px] h-full overflow-scroll pb-[50px]">
              <UserChats chats={chats || []} />
            </div>
          ) : (
            <div className="h-full">
              <section className="flex-[1] flex flex-col gap-[8px] max-h-[70%] overflow-scroll pb-[50px]">
                {session &&
                  session?.section[0]?.services.map((service, idx) => {
                    return (
                      <div key={idx} className="flex flex-col gap-[8px]">
                        <ServiceCard
                          service={service}
                          setOrderServices={setOrderServices}
                        />
                        <hr />
                      </div>
                    );
                  })}
              </section>
              <section className="w-full flex flex-col gap-[1rem] mt-[2rem]">
                <div className="w-full flex items-center justify-between">
                  <span className="text-[1rem]">Tổng order</span>
                  <h1 className="my-0 text-[#bc2449] text-[1rem] font-bold text-right">
                    {" "}
                    {formatNumberWithCommas(278111232)} đ
                  </h1>
                </div>
                <div className="w-full gap-[1rem] flex">
                  <div className="flex items-center gap-[0.5rem] p-[0.5rem]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.5 2.49994L19.6 7.59994C19.9 7.79994 20 8.19994 20 8.59994V18.5999C20 20.4999 18.5 21.9999 16.7 21.9999H7.3C5.5 21.9999 4 20.4999 4 18.6999V5.39994C4 3.49994 5.5 1.99994 7.3 2.09994H13.5C13.9 2.09994 14.2 2.19994 14.5 2.49994ZM18.5 8.69994C18.5 8.49994 18.4 8.29994 18.3 8.09994L14 3.69994C13.9 3.49994 13.6 3.49994 13.4 3.49994H13V8.19994C13 8.59994 13.4 8.99994 13.8 8.99994H18.5V8.69994ZM7.99999 12.3999C7.66862 12.3999 7.39999 12.6686 7.39999 12.9999C7.39999 13.3313 7.66862 13.5999 7.99999 13.5999H16C16.3314 13.5999 16.6 13.3313 16.6 12.9999C16.6 12.6686 16.3314 12.3999 16 12.3999H7.99999ZM7.99999 15.3999C7.66862 15.3999 7.39999 15.6686 7.39999 15.9999C7.39999 16.3313 7.66862 16.5999 7.99999 16.5999H14C14.3314 16.5999 14.6 16.3313 14.6 15.9999C14.6 15.6686 14.3314 15.3999 14 15.3999H7.99999Z"
                        fill="#BC2449"
                      />
                    </svg>
                    <span className="text-[1rem] font-bold text-black">
                      {orderServices
                        ? orderServices
                            .reduce(
                              (total, service) => total + service.quantity,
                              0
                            )
                            .toString()
                        : "0"}
                    </span>
                  </div>
                  <button
                    onClick={() => router.push("/booking")}
                    className="px-[24px] py-[0.5rem] flex-[1] bg-[#bc2449] text-[1rem] text-white font-[600] rounded-lg"
                  >
                    Đặt hẹn ngay
                  </button>
                </div>
              </section>
            </div>
          )}
        </div>
        <XMarkIcon
          className="absolute top-[24px] right-[24px] w-6 h-6"
          onClick={() => setOpenModalVideo(false)}
          color="#8F9499"
        />
      </div>
    </div>
  );
};

export default ModalViewVideo;
