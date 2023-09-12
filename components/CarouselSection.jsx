import Carousel from "./Carousel";
import CarouselText from "./CarouselText";

const CarouselSection = () => {
  return (
    <section id="portfolio" className="py-[100px] bg-black max-w-5xl mx-auto">
      <div className="w-full flex flex-col md:flex-row gap-5 items-center">
        <CarouselText />
        <Carousel />
      </div>
    </section>
  );
};

export default CarouselSection;
