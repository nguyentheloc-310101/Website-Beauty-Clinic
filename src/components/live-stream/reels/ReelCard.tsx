/* eslint-disable @next/next/no-img-element */
import { AiOutlinePlus } from "react-icons/ai";
import ProductsCarousel from "./ProductsCarousel";
import { ISessionStream } from "@/interfaces/stream/session-stream";
import { formatNumberWithCommas } from "@/services/functions";

interface Props {
    session: ISessionStream;
    setCurrentSession: any;
    setOpenModalVideo: (state: boolean) => void;
    setMode: any;
}
const ReelCard = ({
    session,
    setCurrentSession,
    setOpenModalVideo,
    setMode,
}: Props) => {
    return (
        <div className="flex flex-col rounded-lg overflow-hidden w-[calc((100%-90px)/4)] h-[40vh] sm:min-w-[270px] sm:w-[calc[(100%-90px)/4]] sm:h-[450px] shadow-md">
            <div className="relative w-full h-[95%]">
                <div
                    onClick={() => {
                        setCurrentSession(session);
                        setMode("vod");
                        setOpenModalVideo(true);
                    }}
                >
                    <ProductsCarousel
                        services={session?.section[0]?.services}
                    />
                </div>
                <div className="product-container absolute bottom-[2.5rem] p-1 bg-[rgba(255,255,255,0.5)] overflow-hidden rounded-lg z-100 flex justify-between items-end">
                    <div className="flex-1 h-full flex items-center gap-1">
                        <img
                            src={
                                session?.section[0]?.services &&
                                session?.section[0]?.services.length > 0
                                    ? session?.section[0]?.services[0].image
                                    : "https://ucarecdn.com/2a7d2727-a6ec-43e1-8af7-dcc8511a35aa/-/quality/lighter/-/format/webp/"
                            }
                            alt="product img"
                            className="w-[2rem] h-[2rem] sm:w-[4rem] sm:h-[4rem] object-cover overflow-hiden rounded-lg"
                        />
                        <div className="text-[0.6rem] sm:text-[0.9rem] h-full flex flex-col items-start justify-center">
                            <div className="text-center font-[600]">
                                {session?.section[0]?.services &&
                                session?.section[0]?.services.length > 0
                                    ? session?.section[0]?.services[0].name
                                    : ""}
                            </div>
                            <div>
                                <span className="font-[600] text-center text-[#bc2449]">
                                    {session?.section[0]?.services &&
                                    session?.section[0]?.services.length > 0
                                        ? formatNumberWithCommas(
                                              session?.section[0]?.services[0]
                                                  .price
                                          )
                                        : ""}{" "}
                                    đ
                                </span>{" "}
                                <span className="text-[#B9BDC1] line-through">
                                    {session?.section[0]?.services &&
                                    session?.section[0]?.services.length > 0
                                        ? formatNumberWithCommas(
                                              session?.section[0]?.services[0]
                                                  .price
                                          )
                                        : ""}{" "}
                                    đ
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="text-white bg-[#bc2449] w-[1.5rem] h-[1.5rem] rounded-lg flex justify-center items-center">
                        <AiOutlinePlus />
                    </div>
                </div>
            </div>

            <div className="h-auto w-full mt-5 px-2 pb-[8px]">
                <p className="font-[700] two-lines-truncate h-[60px] w-full text-[1.3rem] text-[#bc2449]">
                    {(session?.section && session?.section[0]?.name) ||
                        session.name ||
                        (session?.staff_id && session.staff_id[0].name)}
                </p>
                <div className="flex justify-between">
                    <span className="text-[#36383A] text-[0.9rem]">
                        @{session?.staff_id && session.staff_id[0].name}
                    </span>
                    <span className="text-[#36383A] text-[0.9rem]">
                        {session?.created_at
                            ? new Date(session?.created_at).toLocaleDateString()
                            : new Date().toLocaleDateString()}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ReelCard;
