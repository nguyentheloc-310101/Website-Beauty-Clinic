import { ReactNode } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ExclamationCircleIcon } from '@heroicons/react/24/solid';
import ButtonDefault from '../buttons/ButtonDefault';
import { CloseCircleOutlined } from '@ant-design/icons';

interface Props {
  title: string;
  onCancel?: any;
  height?: string;
  onOk?: any;
  children: ReactNode;
  hidden?: boolean;
  width?: string;
}

function ModalGeneral({
  title,
  onCancel,
  height,
  children,
  onOk,
  hidden,
  width = '920px',
}: Props) {
  return (
    <div
      className={`z-[1000] fixed top-0 left-0 w-full h-full bg-black/20 p-8 ${
        hidden && 'hidden'
      }`}>
      <div className={`flex justify-center items-center h-full w-full`}>
        <div
          className={`flex flex-col relative overflow-y-visible bg-white rounded-lg overflow-hidden w-[${width}] h-[${height}]`}
          style={{ height: `${height}` }}>
          <div className="sticky flex items-center justify-center h-[72px]  px-6 bg-white">
            <h4 className="text-[24px] text-center text-black leading-[50px] font-[500]">
              {title}
            </h4>
            <CloseCircleOutlined
              className="w-6 h-6 z-50 absolute top-7 right-4 text-black cursor-pointer"
              onClick={onCancel}
            />
          </div>
          <div className="flex-1 px-6 py-3  overflow-y-auto">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default ModalGeneral;

interface BottomButtonEdit {
  note?: string;
  titleBtLeft: string;
  titleBtRight: string;
  onOk?: any;
  onCancel?: any;
  typeBt?: 'button' | 'submit' | 'reset';
}
const BottomButtonEdit = ({
  note,
  titleBtLeft,
  titleBtRight,
  onOk,
  onCancel,
  typeBt = 'button',
}: BottomButtonEdit) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-6 mt-6">
        {note ? (
          <div className="flex gap-1 items-start">
            <ExclamationCircleIcon className="w-5 h-5 text-[#767A7F] " />
            <p className="text-[14px] text-[#767A7F] font-[400] leading-[20px] text-start font-['Inter']">
              {note}
            </p>
          </div>
        ) : (
          <div></div>
        )}
        <div className="grid grid-cols-2 gap-x-6">
          <ButtonDefault
            titleBt={titleBtLeft}
            borderBt="1px solid #5A68ED"
            bgColor="white"
            textColor="#5A68ED"
            heightBt="44px"
            typeBt="button"
            onclick={onCancel}
          />
          <ButtonDefault
            onclick={onOk}
            titleBt={titleBtRight}
            heightBt="44px"
            typeBt={typeBt}
          />
        </div>
      </div>
    </>
  );
};

export { BottomButtonEdit };
