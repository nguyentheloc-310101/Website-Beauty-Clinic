import { ReactNode } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ExclamationCircleIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

import ButtonDefault from '../buttons/ButtonDefault';

interface Props {
  title?: string;
  onCancel?: any;
  height?: string;
  onOk?: any;
  children: ReactNode;
  hidden?: boolean;
  width?: string;
}

function ModalNew({
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
      className={`z-[1000] fixed top-0 left-0 w-full h-full bg-black/20 p-8 ${hidden && 'hidden'
        }`}>
      <div
        className={`flex justify-center items-center rounded-lg h-full w-full`}>
        <div
          className={`flex flex-col relative overflow-hidden bg-gradient-to-t from-[#bf264b]  to-[#4d0523] rounded-[29px] w-[${width}] h-[${height}]`}
          style={{ height: `${height}` }}>
          <div className="relative w-[450] h-auto">
            <Image
              src={'statics/images/card-service-advisory/3girls.png'}
              alt="cover-img"
              width={400}
              style={{ objectFit: 'contain' }}
            />
            <XMarkIcon
              className="w-6 h-6 z-50 absolute top-3 right-3 text-white cursor-pointer"
              onClick={onCancel}
            />
          </div>
          <div className="flex items-center justify-center">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default ModalNew;

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
