import { TService } from "@/interfaces/stream/session-stream";
import { formatNumberWithCommas } from "@/services/functions";
import { addServiceToOrder } from "@/services/stream/order-service";
import { message } from "antd";

type Props = {
    service: TService;
    setOrderServices: any;
};
const ServiceCard = ({ service, setOrderServices }: Props) => {
    return (
        <section className="w-full flex items-center gap-[8px] h-[78px]">
            <img
                src={service?.image || "/images/svg/logo.svg"}
                alt={service?.name}
                className="w-[78px] h-[78px] rounded-lg object-cover"
            />
            <div className="w-full flex-[1] flex flex-col items-start justify-between text-[14px] h-full">
                <p className="my-0 text-[#36383A]">{service?.name}</p>
                <div className="flex w-full items-center justify-between">
                    <h1 className="my-0 text-[#36383A] text-[1rem]">
                        {formatNumberWithCommas(service?.price)} đ
                    </h1>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        onClick={() => {
                            setOrderServices(addServiceToOrder(1, service));
                            message.success(
                                "Quý khách đã thêm dịch vụ " +
                                    service.name +
                                    " vào giỏ hàng."
                            );
                        }}
                    >
                        <g clipPath="url(#clip0_184_3699)">
                            <path
                                d="M11.6667 15.8333C11.6667 14.8681 11.9461 13.9236 12.4711 13.1137C12.9961 12.3037 13.7444 11.6631 14.6255 11.2691C15.5066 10.875 16.4829 10.7445 17.4366 10.8931C18.3903 11.0417 19.2806 11.4632 20 12.1067V5H15C15 3.67392 14.4732 2.40215 13.5355 1.46447C12.5979 0.526784 11.3261 0 10 0C8.67392 0 7.40215 0.526784 6.46447 1.46447C5.52678 2.40215 5 3.67392 5 5H0V17.5C0 18.163 0.263392 18.7989 0.732233 19.2678C1.20107 19.7366 1.83696 20 2.5 20H13.9025C13.2147 19.5442 12.6505 18.9251 12.2603 18.198C11.8701 17.4709 11.6662 16.6585 11.6667 15.8333ZM10 1.66667C10.8841 1.66667 11.7319 2.01786 12.357 2.64298C12.9821 3.2681 13.3333 4.11594 13.3333 5H6.66667C6.66667 4.11594 7.01786 3.2681 7.64298 2.64298C8.2681 2.01786 9.11594 1.66667 10 1.66667Z"
                                fill="#BC2449"
                            />
                            <path
                                d="M19.166 15H17.4993V13.3334H15.8327V15H14.166V16.6667H15.8327V18.3334H17.4993V16.6667H19.166V15Z"
                                fill="#BC2449"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_184_3699">
                                <rect width="20" height="20" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default ServiceCard;
