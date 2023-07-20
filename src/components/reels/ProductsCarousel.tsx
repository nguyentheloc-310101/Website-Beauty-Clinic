import Slideshow from '../commons/SlideShow';

const Product1 =
  'https://ucarecdn.com/b22bd7c0-c0e3-45b0-954b-bd8cbb51b3b7/-/quality/smart/-/format/auto/';
const Product2 =
  'https://ucarecdn.com/773651e6-61d7-4439-8c2d-1c0d80053f78/-/quality/smart/-/format/auto/';
const Product3 =
  'https://ucarecdn.com/c4094d26-9690-4356-bbce-e6d044d51157/-/quality/smart/-/format/auto/';
const Thumb =
  'https://ucarecdn.com/b1ad3872-ba34-4ddd-8539-dfd04252331e/-/quality/smart/-/format/auto/';

function shuffle(array: any[]) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

const ProductsCarousel = () => {
  const listImages = [Thumb, Product1, Product2, Product3];
  return (
    <div className="w-full h-full absolute top-0 left-0">
      <Slideshow listImages={shuffle(listImages)} />
    </div>
  );
};

export default ProductsCarousel;
