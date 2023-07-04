import React from 'react';
import Thumb from '../../statics/images/20230703-134150.png';
import Image from 'next/image';


const ProductsCarousel = () => {
     return (  
          <div className="w-full h-full">
               <div className="w-full h-full rounded-lg overflow-hidden">
                    <Image
                         src={Thumb}
                         alt="Thumb"
                         className="h-full w-full object-cover"
                    />
               </div>
          </div>
     );
}
 
export default ProductsCarousel;