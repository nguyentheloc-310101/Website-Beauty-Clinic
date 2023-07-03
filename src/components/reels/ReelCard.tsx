import React from 'react';
import ProductImg from '../../statics/images/product_img.png';
import Image from 'next/image';
import ProductsCarousel from './ProductsCarousel';
import {AiOutlinePlus} from 'react-icons/ai';


const ReelCard = () => {
     return (  
          <div className="flex flex-col rounded-lg overflow-hidden w-[20vw] h-[45vh]">
               <div className="relative w-full h-[95%] overflow-hidden">
                    <ProductsCarousel/>
                    <div className="product-container bottom-[1rem] p-1 bg-[rgba(255,255,255,0.5)] overflow-hidden rounded-lg absolute z-100 w-full flex justify-between items-end">
                         <div className="flex-1 h-full flex gap-1">
                              <Image src={ProductImg} alt="product img" className="w-[3rem] h-[3rem] object-cover overflow-hiden rounded-lg"/>
                              <div className="text-[0.9rem]">
                                   <p className="font-[600]">Tên sản phẩm</p>
                                   <p><span className="font-[600] text-[#bc2449]">$12.99</span>   <span className="text-[#B9BDC1] line-through">$14.97</span></p>
                              </div>
                         </div>
                         <div className="text-white bg-[#bc2449] w-[1.5rem] h-[1.5rem] rounded-lg flex justify-center items-center">
                              <AiOutlinePlus/>
                         </div>
                    </div>
               </div>

               <div className="h-auto w-full mt-5 px-2">
                    <p className="font-[700] two-lines-trancate w-full text-[1.3rem] text-[#bc2449]">Tên của Reels có thể dài được 2 hàng</p>
                    <div className="flex justify-between">
                         <span className="text-[#36383A] text-[0.9rem]">@username</span>
                         <span className="text-[#36383A] text-[0.9rem]">09/05/2000</span>
                    </div>
               </div>
          </div>
     );
}
 
export default ReelCard;