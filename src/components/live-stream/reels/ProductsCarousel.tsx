import Slideshow from '../slide-show/SlideShow';

const Product1 =
  'https://ucarecdn.com/b22bd7c0-c0e3-45b0-954b-bd8cbb51b3b7/-/quality/smart/-/format/webp/';
const Product2 =
  'https://ucarecdn.com/773651e6-61d7-4439-8c2d-1c0d80053f78/-/quality/smart/-/format/webp/';
const Product3 =
  'https://ucarecdn.com/c4094d26-9690-4356-bbce-e6d044d51157/-/quality/smart/-/format/webp/';
const Thumb =
  'https://ucarecdn.com/b1ad3872-ba34-4ddd-8539-dfd04252331e/-/quality/smart/-/format/webp/';

const ProductsCarousel = () => {
  const listImages = [Thumb, Product1, Product2, Product3];
  return (
    <div className="w-full h-full absolute top-0 left-0">
      <Slideshow listImages={listImages} />
    </div>
  );
};

export default ProductsCarousel;
