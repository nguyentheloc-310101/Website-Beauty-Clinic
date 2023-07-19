/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';

const CustomerSaidVideo = () => {
  const [isMobile, setIsMobile] = useState(true); // Set initial value to true
  const [loadingVideo, setLoadingVideo] = useState(false);

  useEffect(() => {
    setLoadingVideo(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize(); // Capture initial browser size

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      setLoadingVideo(false);
    };
  }, []);

  return (
    <>
      <div className="customer-said-container">
        <div className="relative flex items-center justify-center z-100">
          <img
            src={
              'https://ucarecdn.com/d5d55773-18dc-434c-854f-42f81ef4b85c/-/preview/-/quality/lightest/-/format/webp/'
            }
            alt={'text-customer'}
            className="w-[300px] mt-[16px] mr-[40px] md:w-auto md:h-[208px] md:mt-[47px] md:mb-[20px]"
          />
        </div>
        {!isMobile ? (
          <section className="max-w-[980px] mx-auto relative w-full  z-50">
            <div className="pt-[56.25%] relative">
              <iframe
                // src="https://www.youtube.com/embed/mfZ-KSP_iA4?&autoplay=1&loop=1&rel=0&showinfo=0&color=white&iv_load_policy=3&playlist=mfZ-KSP_iA4"
                src=""
                className="absolute rounded-[40px] bg-black top-0 left-0 w-full h-full object-contain"
                allowFullScreen
              />
            </div>
          </section>
        ) : (
          <section className="max-w-[360px] mx-auto relative w-full mt-[5px]  z-50">
            <div className="pt-[56.25%] relative">
              <iframe
                // src="https://www.youtube.com/embed/mfZ-KSP_iA4?&autoplay=1&loop=1&rel=0&showinfo=0&color=white&iv_load_policy=3&playlist=mfZ-KSP_iA4"
                src=""
                className="absolute rounded-[40px] bg-black top-0 left-0 w-full h-full object-contain"
                allowFullScreen
              />
            </div>
          </section>
        )}

        <img
          src={
            'https://ucarecdn.com/ae813e5a-99e3-4c9d-9c2d-f8671a02b73c/-/preview/-/quality/lightest/-/format/webp/'
          }
          alt="ribbon-img"
          className="relative z-10 top-[-150px] lg:top-[-700px] object-contain"
          width={2000}
        />
      </div>
    </>
  );
};
//
export default CustomerSaidVideo;
