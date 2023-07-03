import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Thumb from '../../statics/images/Live Video.png';
import Image from 'next/image';

const ReelCard = () => {
     return (  
          <div className="rounded-lg">
               
               <div>
                    
               </div>

               <div>
                    <span>Tên của Reels có thể dài được 2 hàng</span>
                    <div>
                         <span>@username</span>
                         <span>09/05/2000</span>
                    </div>
               </div>
          </div>
     );
}
 
export default ReelCard;