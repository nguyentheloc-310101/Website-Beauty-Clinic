import { Spin } from 'antd';

import Lottie from 'lottie-react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ReactNode } from 'react';
import ButtonPopConfirm from '../../buttons/ButtonPopConfirm';

type PopUpConfirmProps = {
  title: string;
  description: string | ReactNode;
  highlight?: string;
  color: string;
  lottie: any;
  onCancel: any;
  onOk: any;
  loading?: boolean;
  btnLeftTitle?: string;
  btnRightTitle?: string;
};
const PopUpConfirm = ({
  title,
  description,
  highlight,
  color,
  lottie,
  onCancel,
  onOk,
  loading,
  btnLeftTitle = 'Tiếp tục chỉnh sửa',
  btnRightTitle = 'Xác nhận',
}: PopUpConfirmProps) => {
  return (
    <>
      <div className="z-[1000] fixed top-0 left-0 w-full h-full bg-black/20 p-8">
        <div className="overflow-auto h-full">
          <div className="flex justify-center items-center h-full">
            <div className="flex flex-col relative  overflow-auto bg-white rounded-2xl">
              <Spin spinning={loading}>
                <div className="p-6 flex flex-col relative  overflow-auto bg-white rounded-2xl w-[448px] h-[553px]">
                  <div className="flex items-center justify-center w-full relative">
                    <h4
                      className={`text-[34px] text-[${color}] font-[600] font-['Be Vietnam Pro']`}>
                      {title}
                    </h4>
                    <XMarkIcon
                      className="w-6 h-6 absolute right-6 text-[#8F9499] cursor-pointer hover:text-[#464749]"
                      onClick={onCancel}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-center items-center">
                      <Lottie
                        animationData={lottie}
                        loop={true}
                        className="w-[400px] h-[300px] object-cover"
                      />
                    </div>
                    <p className="text-center text-[16px]">
                      {description}{' '}
                      <p className="text-[#5A68ED]">{highlight}</p>
                    </p>
                  </div>
                  <div>
                    <div className="grid grid-cols-2 gap-6">
                      <ButtonPopConfirm
                        titleBt={btnLeftTitle}
                        borderBt={`1px solid ${color}`}
                        bgColor="white"
                        textColor={color}
                        heightBt="44px"
                        typeBt="button"
                        onclick={onCancel}
                      />
                      <ButtonPopConfirm
                        titleBt={btnRightTitle}
                        heightBt="44px"
                        typeBt="button"
                        onclick={onOk}
                        bgColor={color}
                        isLoading={loading}
                      />
                    </div>
                  </div>
                </div>
              </Spin>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUpConfirm;
