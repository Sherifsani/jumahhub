import Carousel from "./Carousel";
import CarouselText from "./CarouselText";

const CarouselSection = () => {
  return (
    <section>
      <div className="w-full flex flex-col md:flex-row">
        <CarouselText />
        <Carousel />
      </div>
    </section>
  );
};

export default CarouselSection;
