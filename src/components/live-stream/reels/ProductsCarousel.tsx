import { TService } from "@/interfaces/stream/session-stream";
import Slideshow from "../slide-show/SlideShow";

type Props = {
    services: TService[];
};
const ProductsCarousel = ({ services }: Props) => {
    return (
        <div className="w-full h-full absolute top-0 left-0">
            <Slideshow
                listImages={
                    services ? services.map((service) => service.image) : []
                }
            />
        </div>
    );
};

export default ProductsCarousel;
