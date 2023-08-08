/* eslint-disable @next/next/no-img-element */
import { ReactNode } from 'react';
import { CloseCircleOutlined } from '@ant-design/icons';

interface Props {
  onCancel?: any;
  height?: string;
  children: ReactNode;
  hidden?: boolean;
  width?: string;
}

function ModalFormAdvisory({
  onCancel,
  height,
  children,
  hidden,
  width = '920px',
}: Props) {
  return (
    <div
      className={`z-[1000] fixed top-0 transition-transform duration-500 translate-y-0 left-0 w-full h-full bg-black/20 p-[40px] ${
        hidden && 'hidden'
      }`}>
      <div
        className={`flex justify-center items-center rounded-lg h-full w-full`}>
        <div
          className={`flex flex-col relative overflow-hidden bg-gradient-to-t from-[#bf264b]  to-[#4d0523] rounded-[29px] w-[${width}] h-[${height}]`}
          style={{ height: `${height}` }}>
          <div className="relative  h-auto">
            <img
              src="https://ucarecdn.com/f0067f8a-e6d2-47ab-80df-129476142768/-/preview/628x565/-/quality/lightest/-/format/auto/"
              alt="cover-img"
              className="lg:w-[450px] lg:h-[350px] "
              style={{ objectFit: 'cover' }}
            />

            <CloseCircleOutlined
              className="w-6 h-6 z-50 absolute top-3 right-3 text-white cursor-pointer"
              onClick={onCancel}
            />
          </div>
          <div className="flex items-center justify-center mb-[20px]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalFormAdvisory;
