import Herotext from "@/components/Herotext";
import GallerySection from "@/components/GallerySection";
import NewSect from "@/components/NewSect";
import Squiggle from "@/components/Squiggle";
import Services from "@/components/Services";
import Carousel from "@/components/Carousel";
import CarouselText from "@/components/CarouselText";
import CarouselSection from "@/components/CarouselSection";

export default function Home() {
  return (
    <main className="my-0 mx-auto">
      <Herotext />
      <Services />
      <GallerySection />
      <div className="w-full bg-black">
        <NewSect />
      </div>
      <div className="w-full bg-black">
       <CarouselSection />
      </div>
      <Squiggle />
    </main>
  );
}
