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
      <div className="flex lg:relative md:ml-[35px] flex-col justify-end py-[20px] w-[286px] h-full md:w-[260px] lg:w-[350px] lg:items-start  lg:justify-center lg:ml-[40px]">
        <div className="text-[#B24B64] text-center lg:text-[20px] mt-[40px] font-[700]">
          {customer_name} - {clinic}
        </div>
        <div className="text-[#B24B64] w-[316px] lg:h-auto lg:w-full lg:text-[16px] lg:font-[400] lg:leading-[22px] text-left lg:my-[17px]">
          {message}
        </div>
        <div className="font-service-card hidden md:flex lg:w-full lg:mt-[40px] text-[#BC2449] font-[400] lg:mb-[80px] lg:text-[68px] lg:tracking-[-0.18px]">
          {signed}
        </div>
      </div>
      <div className="lg:flex ">
        <img
          src={image}
          alt={'image-customer'}
          className="w-auto h-[273px] left-[55px] top-[-120px] lg:-left-[-30px] lg:top-0 lg:bottom-[10px] object-cover lg:h-[406px] lg:w-auto absolute lg:relative"
        />
      </div>
    </div>
  );
};
