import Image from "next/image";
import { Staatliches } from "next/font/google";
import { Manrope } from "next/font/google";
import vert from "../public/assets/vert.jpg";
import horizontal from "../public/assets/horizontal.jpg";
import new1 from "../public/assets/new1.jpg";
import new2 from "../public/assets/new2.jpg";

const staatliches = Staatliches({ subsets: ["latin"], weight: "400" });
const manrope = Manrope({ subsets: ["latin"], weight: ["400", "600", "700"] });

const GallerySection = () => {
  return (
    <section className="w-full bg-black">
      <div className="gallery flex flex-col gap-6 w-full p-4 pt-8 max-w-5xl mx-auto py-10">
        <h1
          className={`${manrope.className} text-lightgreen uppercase text-md font-bold w-full text-start sm:text-3xl lg:5xl sm:text-start sm:no-underline `}
        >
          VISUAL SYMPHONY
        </h1>
        <div className="images">
          <div className="image-holder w-[100%]">
            <Image src={vert} className="w-full" alt="shs" quality={100} />
          </div>
          <div className="image-holder w-[100%]">
            <Image src={horizontal} className="w-full" alt="shs" />
          </div>
          <div className="image-holder w-[100%]">
            <Image src={new1} className="w-full" alt="shs" />
          </div>
          <div className="image-holder  w-[100%]">
            <Image src={new2} className="w-full" alt="shs" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
