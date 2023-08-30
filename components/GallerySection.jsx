import Image from "next/image";
import { Staatliches } from "next/font/google";
import { Manrope } from "next/font/google";

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
            <Image
              src="/assets/vert.jpg"
              width={100}
              height={100}
              className="w-full"
              alt="shs"
            />
          </div>
          <div className="image-holder w-[100%]">
            <Image
              width={100}
              height={100}
              src="/assets/horizontal.jpg"
              className="w-full"
              alt="shs"
            />
          </div>
          <div className="image-holder w-[100%]">
            <Image
              width={100}
              height={100}
              src="/assets/horizontal.jpg"
              className="w-full"
              alt="shs"
            />
          </div>
          <div className="image-holder  w-[100%]">
            <Image
              src="/assets/vert.jpg"
              width={100}
              height={100}
              className="w-full"
              alt="shs"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
