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
      className={`z-[1000] fixed top-0 left-0 w-full h-full bg-black/20 p-[40px] ${
        hidden && 'hidden'
      }`}>
      <div
        className={`flex justify-center items-center rounded-lg h-full w-full`}>
        <div
          className={`flex flex-col relative overflow-hidden bg-gradient-to-t from-[#bf264b]  to-[#4d0523] rounded-[29px] w-[${width}] h-[${height}]`}
          style={{ height: `${height}` }}>
          <div className="relative  h-auto">
            <img
              src="https://ucarecdn.com/f0067f8a-e6d2-47ab-80df-129476142768/-/quality/lightest/-/format/auto/"
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

// interface BottomButtonEdit {
//   note?: string;
//   titleBtLeft: string;
//   titleBtRight: string;
//   onOk?: any;
//   onCancel?: any;
//   typeBt?: 'button' | 'submit' | 'reset';
// }
// const BottomButtonEdit = ({
//   note,
//   titleBtLeft,
//   titleBtRight,
//   onOk,
//   onCancel,
//   typeBt = 'button',
// }: BottomButtonEdit) => {
//   return (
//     <>
//       <div className="grid grid-cols-2 gap-6 mt-6">
//         {note ? (
//           <div className="flex gap-1 items-start">
//             {/* <ExclamationCircleIcon className="w-5 h-5 text-[#767A7F] " /> */}
//             <p className="text-[14px] text-[#767A7F] font-[400] leading-[20px] text-start font-['Inter']">
//               {note}
//             </p>
//           </div>
//         ) : (
//           <div></div>
//         )}
//         <div className="grid grid-cols-2 gap-x-6">
//           <ButtonDefault
//             titleBt={titleBtLeft}
//             borderBt="1px solid #5A68ED"
//             bgColor="white"
//             textColor="#5A68ED"
//             heightBt="44px"
//             typeBt="button"
//             onclick={onCancel}
//           />
//           <ButtonDefault
//             onclick={onOk}
//             titleBt={titleBtRight}
//             heightBt="44px"
//             typeBt={typeBt}
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export { BottomButtonEdit };
