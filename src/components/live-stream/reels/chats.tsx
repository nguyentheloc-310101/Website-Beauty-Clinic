import { TChat } from "@/interfaces/stream/session-stream";
import { useEffect } from "react";

type Props = {
  chats?: TChat[];
};
const UserChats = ({ chats }: Props) => {
  useEffect(() => {
    var elem = document.getElementById("chat-scroll");
    if (elem) {
      elem.scrollTop = elem.scrollHeight;
    }
  }, [chats && chats.length]);
  return (
    <div
      id="chat-scroll"
      className="w-full max-h-full overflow-y-auto text-[0.8rem]"
    >
      {chats &&
        chats.map((chat, index) => {
          return (
            <div
              key={index}
              className="relative flex items-start px-[8px] gap-[18px]"
            >
              <img
                src={chat.avatar || "/images/live-reels/user.jpeg"}
                alt="avatar"
                className="w-6 h-6 object-cover rounded-full mt-[5px] border border-solid"
              />

              <div className="flex flex-col items-start text-[0.9rem] text-black">
                <span className="text-[#B9BDC1]">{chat.name}</span>
                <p>{chat.content}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default UserChats;
