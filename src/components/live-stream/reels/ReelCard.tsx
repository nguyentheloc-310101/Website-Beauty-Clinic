/* eslint-disable @next/next/no-img-element */
import { AiOutlinePlus } from 'react-icons/ai';
import ProductsCarousel from './ProductsCarousel';

interface Props {
  title: string;
  author: string;
  date: string;
}
const ReelCard = ({ title, author, date }: Props) => {
  return (
    <div className="flex flex-col rounded-lg overflow-hidden w-[40vw] h-[40vh] sm:min-w-[260px] sm:w-[20vw] sm:h-[55vh]">
      <div className="relative w-full h-[95%]">
        <ProductsCarousel />
        <div className="product-container absolute bottom-[2.5rem] p-1 bg-[rgba(255,255,255,0.5)] overflow-hidden rounded-lg z-100 flex justify-between items-end">
          <div className="flex-1 h-full flex items-center gap-1">
            <img
              src={
                'https://ucarecdn.com/2a7d2727-a6ec-43e1-8af7-dcc8511a35aa/-/quality/lighter/-/format/webp/'
              }
              alt="product img"
              className="w-[2rem] h-[2rem] sm:w-[4rem] sm:h-[4rem] object-cover overflow-hiden rounded-lg"
            />
            <div className="text-[0.6rem] sm:text-[0.9rem] h-full flex flex-col items-center justify-center">
              <div className="text-center font-[600]">Tên sản phẩm</div>
              <div>
                <span className="font-[600] text-center text-[#bc2449]">
                  $12.99
                </span>{' '}
                <span className="text-[#B9BDC1] line-through">$14.97</span>
              </div>
            </div>
          </div>
          <div className="text-white bg-[#bc2449] w-[1.5rem] h-[1.5rem] rounded-lg flex justify-center items-center">
            <AiOutlinePlus />
          </div>
        </div>
      </div>

      <div className="h-auto w-full mt-5 px-2 py-0">
        <p className="font-[700] two-lines-truncate w-full text-[1.3rem] text-[#bc2449]">
          {title}
        </p>
        <div className="flex justify-between">
          <span className="text-[#36383A] text-[0.9rem]">{author}</span>
          <span className="text-[#36383A] text-[0.9rem]">{date}</span>
        </div>
      </div>
    </div>
  );
};

export default ReelCard;
