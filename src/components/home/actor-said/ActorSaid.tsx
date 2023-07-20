/* eslint-disable @next/next/no-img-element */

const ActorSaid = () => {
  return (
    <div className="grid grid-cols-2 lg:px-[107px] sm:mt-[80px] lg:mt-[100px] sm:h-fit">
      <div className="col-span-1 md:w-[555px] md:h-[891px]">
        <img
          src={
            'https://ucarecdn.com/19ef73bc-b2a0-4361-933f-b52840c62fd4/-/quality/smart/-/format/webp/'
          }
          alt="actor-img"
          className="scale-10"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="col-span-1 lg:mt-[66px]">
        <img
          src={
            'https://ucarecdn.com/ca937c1c-edcb-4dda-8091-9909d65f62a8/-/preview/576x189/-/quality/lightest/-/format/webp/'
          }
          alt="cover-img"
          className="lg:w-[582px] lg:h-[191px] md:w-[370px] md:h-auto w-[150px] mr-[20px] h-auto"
          style={{ objectFit: 'cover' }}
        />
        <div className="lg:ml-[30px] text-right">
          <div className="text-[10px] font-[400] lg:ml-[40px] w-[150px] text-[#414141]  md:w-[350px] md:text-[18px] lg:w-[508px] lg:h-[264px] lg:text-[22px] lg:font-[300]">
            &quot;Cơ địa và nội tiết tố thay đổi sau khi sinh con đã từng khiến
            mình rất stress mỗi khi soi gương, da thâm nám dày và vùng da bụng
            chảy xệ. Nhưng thật may vì đã tìm được TMV Aura, chăm sóc toàn diện
            tại đây chính là quyết định đúng đắn nhất của mình.&quot;
          </div>
          <div className="w-full text-center h-[40px]">
            <div className="text-[#4f4f4f] mt-[5px] italic sm:font-[300] text-[9px] uppercase ms:text-[12px] md:text-[18px] lg:font-[100] lg:text-[27px]">
              diễn viên
            </div>
            <div className="font-[600] italic sm:text-[21px] text-transparent bg-clip-text bg-gradient-to-r from-[#BF264B] to-[#DF4B6E] md:text-[30px] lg:font-[600] lg:text-[61px]">
              {'LÊ BÊ LA'}
            </div>
            <div className=" sm:font-[500] text-transparent bg-clip-text bg-gradient-to-r from-[#BF264B] to-[#DF4B6E] mr-[20px] text-[8px] md:text-[18px] lg:text-[24px] lg:font-[500]">
              Sạch thâm nám sau 2 liệu trình
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActorSaid;
