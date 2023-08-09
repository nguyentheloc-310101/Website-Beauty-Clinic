/* eslint-disable @next/next/no-img-element */
interface CardCustomerProps {
  customer_name: string;
  clinic: string;
  message: string;
  signed: string;
  image: any;
}
export const CardCustomer = (props: CardCustomerProps) => {
  const { customer_name, message, signed, image, clinic } = props;
  return (
    <div className="card-customer lg:overflow-hidden">
      <div className="flex md:relative md:ml-[55px] flex-col w-[286px] h-full md:w-[260px] items-center lg:justify-center lg:ml-[56px]">
        <div className="text-[#B24B64] text-center lg:text-[20px] mt-[190px]  font-[600]">
          {customer_name} - {clinic}
        </div>
        <div className="text-[#B24B64] w-[316px] lg:w-[286px]  lg:h-[123px] lg:text-[18px] lg:font-[500] text-justify lg:my-[17px]">
          {message}
        </div>
        <div className="font-service-card hidden md:flex text-[#B24B64B3] font-[400] lg:mb-[140px] lg:text-[68px] lg:tracking-[-0.18px]">
          {signed}
        </div>
      </div>
      <div className="lg:flex lg:mr-[20px]">
        <img
          src={image}
          alt={'image-customer'}
          className="w-auto h-[273px] left-[55px] top-[-90px] lg:top-0 lg:bottom-[10px] lg:h-[406px] lg:w-auto absolute lg:relative"
        />
      </div>
    </div>
  );
};
