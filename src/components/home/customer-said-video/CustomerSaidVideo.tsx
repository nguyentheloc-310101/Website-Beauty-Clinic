/* eslint-disable @next/next/no-img-element */
interface CustomerSaidVideoProps {
  videoLink: string;
}
const CustomerSaidVideo = (props: CustomerSaidVideoProps) => {
  const { videoLink } = props;
  return (
    <>
      <div className="customer-said-container  lg:relative">
        <div className="relative flex justify-center lg:flex-col gap-[10px] lg:items-start items-center text-[#FFFFFF] z-[200] w-full h-fit font-[900] lg:text-[56px] uppercase">
          <div className="font-service-card flex items-center justify-center mb-[10px] lg:mb-[18px] lg:items-start text-[30px] lg:ml-[30%] lg:my-[24px] lg:h-[120px] normal-case lg:text-[140px] font-[400] lg:leading-[148px]">
            Aura
          </div>
          <div className="lg:ml-[38%]"> phá bỏ giới hạn</div>
        </div>
        <section className="max-w-[360px] md:max-w-[660px] mt-[5px] lg:mt-0 lg:max-w-[980px] mx-auto relative  w-full z-50">
          <div className="pt-[56.25%] relative">
            <iframe
              src={videoLink}
              title="Aura Video"
              className="absolute rounded-[40px] bg-black top-0 left-0 w-full h-full object-contain"
            />
          </div>
        </section>

        <img
          src={
            'https://ucarecdn.com/ae813e5a-99e3-4c9d-9c2d-f8671a02b73c/-/preview/-/quality/lightest/-/format/webp/'
          }
          alt="ribbon-img"
          className="hidden lg:flex lg:absolute top-0 lg:w-full object-contain"
        />
      </div>
    </>
  );
};
//
export default CustomerSaidVideo;
