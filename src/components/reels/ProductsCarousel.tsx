import React from 'react';
import Thumb from '../../statics/images/live-commerce/20230703-134150.png';
import Product1 from '../../statics/images/live-commerce/product_1.png';
import Product2 from '../../statics/images/live-commerce/product_2.png';
import Product3 from '../../statics/images/live-commerce/product_3.png';
import Slideshow from '../commons/SlideShow';

function shuffle(array: any[]) {
     let currentIndex = array.length,  randomIndex;
   
     // While there remain elements to shuffle.
     while (currentIndex != 0) {
   
       // Pick a remaining element.
       randomIndex = Math.floor(Math.random() * currentIndex);
       currentIndex--;
   
       // And swap it with the current element.
       [array[currentIndex], array[randomIndex]] = [
         array[randomIndex], array[currentIndex]];
     }
   
     return array;
}

const ProductsCarousel = () => {
     const listImages = [Thumb, Product1, Product2, Product3]
     return (
          <div className="w-full h-full absolute top-0 left-0">
               <Slideshow
                    listImages={shuffle(listImages)}
               />
          </div>
     );
}
 
export default ProductsCarousel;