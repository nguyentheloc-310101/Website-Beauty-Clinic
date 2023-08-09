/* eslint-disable @next/next/no-img-element */

interface CardHoverProps {
  name: string;
  address: string;
  image: any;
  open: string;
  closed: string;
}

const CardCampusHover = ({
  name,
  address,
  image,
  open,
  closed,
}: CardHoverProps) => {
  return (
    <div className="w-[380px] h-[542px] rounded-[40px] shadow-lg p-[6px] bg-gradient-to-r from-[#BF264B] to-[#DF4B6E] text-white lg:mb-[60px]">
      <img
        src={image}
        alt="cover-img"
        className="scale-10 h-[288px] w-[380px] rounded-t-[40px]"
        style={{ objectFit: 'cover' }}
      />
      <div className="px-6 mt-2 w-full">
        <div className="mb-2 font-[800] leading-[140%] text-[25px] ">
          {name}
        </div>
        <p className="text-neutral-ng-0 text-white font-[400] leading-[140%] text-[16px]">
          {address}
        </p>
        <p className="text-neutral-ng-0 text-white font-[400] leading-[140%] text-[16px] mt-[12px]">
          {open} - {closed}
        </p>
      </div>
      <div className="flex w-full h-[55px] item-center px-6 mt-[20px]">
        <div className="w-[128px] h-[36px]  hover:h-[36.5px] bg-[#fff] hover:bg-[#F9F9F1] rounded-[8px] cursor-pointer border-[#BC2449]">
          <p className="text-[#BF264B] h-full font-[600] text-center flex items-center justify-center">
            Đặt dịch vụ
          </p>
        </div>
        <div className="w-[128px] h-[36px] hover:w-[129px] hover:h-[37px] rounded-[8px] cursor-pointer bg-[#BC2449] hover:bg-[#fff] text-[#fff] hover:text-[#BC2449] ml-[24px]">
          <p className="h-full font-[600] text-center flex items-center justify-center">
            Gọi ngay
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardCampusHover;
