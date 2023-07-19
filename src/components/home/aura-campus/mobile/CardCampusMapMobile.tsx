/* eslint-disable @next/next/no-img-element */
import { CloseCircleFilled } from '@ant-design/icons';
import { Modal } from 'antd';

interface CardCampusMapMobile {
  image: any;
  showCampusMapMobile: boolean;
  setShowCampusMapMobile: (e: boolean) => void;
}
const CardCampusMapMobile = (props: CardCampusMapMobile) => {
  const { image, showCampusMapMobile, setShowCampusMapMobile } = props;
  return (
    <Modal
      open={showCampusMapMobile}
      footer={false}
      centered={true}
      className={'modalStyleMobile'}
      width={780}
      closeIcon={<CloseCircleFilled />}
      onOk={() => setShowCampusMapMobile(false)}
      onCancel={() => setShowCampusMapMobile(false)}>
      <div className="relative flex justify-center overflow-hidden">
        <img
          src={image}
          alt="cover-img"
          className="h-[466px] w-[361px] rounded-[20px]"
          style={{ objectFit: 'contain' }}
        />

        <div className="absolute bottom-2 w-[320px] h-[34px] py-[8px] rounded-[8px] cursor-pointer bg-[#BC2449] mr-[7px] text-[#fff] ml-[10px]">
          <p className="h-full font-[600] text-center flex items-center justify-center text-[12px]">
            Chi tiết clinic
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default CardCampusMapMobile;
