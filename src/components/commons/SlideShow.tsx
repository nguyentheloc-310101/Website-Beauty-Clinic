import Image, { StaticImageData } from 'next/image';
import React from 'react';
const delay = 2500;

interface Props {
  listImages: StaticImageData[];
}

const Slideshow = ({ listImages }: Props) => {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef<null | ReturnType<typeof setTimeout>>(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === listImages.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
        {listImages.map((src, index) => (
          <Image
            className="slide"
            alt="slide"
            key={index}
            src={src}
          />
        ))}
      </div>

      <div className="slideshowDots">
        {listImages.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? ' active' : ''}`}
            onClick={() => {
              setIndex(idx);
            }}></div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
