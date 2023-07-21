/* eslint-disable @next/next/no-img-element */
const CustomerSaidVideo = () => {
  return (
    <>
      <div className="customer-said-container lg:relative">
        <div className="relative flex items-center justify-center z-100">
          <img
            src={
              'https://ucarecdn.com/d5d55773-18dc-434c-854f-42f81ef4b85c/-/quality/lightest/-/format/webp/'
            }
            alt={'text-customer'}
            className="w-[300px] mt-[16px] mr-[40px] md:w-auto md:h-[208px] md:mt-[47px] z-50 md:mb-[20px]"
          />
        </div>

        <section className="max-w-[360px] md:max-w-[660px] mt-[5px] lg:mt-0 lg:max-w-[980px] mx-auto relative  w-full z-50">
          <div className="pt-[56.25%] relative">
            {/* <iframe
                src="https://www.youtube.com/embed/mfZ-KSP_iA4?&autoplay=1&loop=1&rel=0&showinfo=0&color=white&iv_load_policy=3&playlist=mfZ-KSP_iA4"
                className="absolute rounded-[40px] bg-black top-0 left-0 w-full h-full object-contain"
              /> */}
            <iframe
              src="https://www.youtube.com/embed/mfZ-KSP_iA4?color=red"
              title="Aura Video"
              allow="accelerometer;clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="absolute rounded-[40px] bg-black top-0 left-0 w-full h-full object-contain"
              allowFullScreen
            />
          </div>
        </section>

        <img
          src={
            'https://ucarecdn.com/ae813e5a-99e3-4c9d-9c2d-f8671a02b73c/-/preview/-/quality/lightest/-/format/webp/'
          }
          alt="ribbon-img"
          className="hidden lg:flex lg:absolute top-0 z-10 lg:w-full object-contain"
        />
      </div>
    </>
  );
};
//
export default CustomerSaidVideo;
