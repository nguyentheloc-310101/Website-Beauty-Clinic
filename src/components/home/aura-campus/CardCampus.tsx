/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import { CampusItem } from './AuraCampus';
import CardCampusDetails from './CardCampusDetails';
import CardCampusHover from './CardCampusHover';
import CardCampusMapMobile from './mobile/CardCampusMapMobile';
import { IClinic } from '@/interfaces/clinic/clinic';

interface CardCampusProps {
  item: IClinic;
  setClinicSelected?: any;
  where?: 'contact' | 'home' | '';
}

const CardCampus = (props: CardCampusProps) => {
  const { item, where, setClinicSelected } = props;
  const [hoveredCards, setHoveredCards] = useState(false);
  const [isDetails, setIsDetails] = useState(false);

  const [showCampusMapMobile, setShowCampusMapMobile] =
    useState<boolean>(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize: any = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize(); // Call it initially
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const onDetails = () => {
    setClinicSelected(item.id);
    setIsDetails(!isDetails);
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      setHoveredCards(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setHoveredCards(false);
    }
  };

  return (
    <div>
      <div
        onClick={onDetails}
        className="cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        {hoveredCards ? (
          <CardCampusHover
            name={item?.name}
            address={item?.address}
            image={item?.background}
            open={item?.open}
            closed={item?.closed}
            where={where}
          />
        ) : (
          <div className="w-[237px] rounded-[20px] lg:w-[380px]  mb-[60px] lg:h-[542px] lg:rounded-[40px] shadow-lg text-[#bf264b] bg-white">
            <img
              src={item?.background}
              alt="cover-img"
              className="w-[237px] h-[237px] rounded-t-[20px] lg:h-[380px] lg:w-[380px] lg:rounded-t-[40px]"
              style={{ objectFit: 'cover' }}
            />
            <div className="px-[16px] py-[24px] lg:px-6 lg:py-4">
              <div className="mb-2 font-[800] leading-[140%] text-[16px] lg:text-[25px] ">
                {item?.name}
              </div>
              <p className="text-base text-[#36383A]">{item?.short_address}</p>
              <span className="w-[] h-[]"></span>
            </div>
          </div>
        )}
      </div>
      {isDetails && (
        <CardCampusDetails
          setIsDetails={setIsDetails}
          isDetails={isDetails}
          image={item?.background}
          name={item?.name}
          address={item?.address}
          open={item?.open}
          close={item?.closed}
          map={
            'https://ucarecdn.com/c66dc76a-4fb0-43af-ae49-877102625a89/-/preview/625x625/-/quality/lightest/-/format/webp/'
          }
          isMobile={isMobile}
          setShowCampusMapMobile={setShowCampusMapMobile}
          image_list={[]}
        />
      )}
      {showCampusMapMobile && (
        <CardCampusMapMobile
          showCampusMapMobile={showCampusMapMobile}
          setShowCampusMapMobile={setShowCampusMapMobile}
          image={
            'https://ucarecdn.com/c66dc76a-4fb0-43af-ae49-877102625a89/-/preview/625x625/-/quality/lightest/-/format/webp/'
          }
        />
      )}
    </div>
  );
};

export default CardCampus;
