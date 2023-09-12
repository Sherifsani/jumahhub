import { Staatliches } from "next/font/google";
import { Manrope } from "next/font/google";

const staatliches = Staatliches({ subsets: ["latin"], weight: "400" });
const manrope = Manrope({ subsets: ["latin"], weight: ["400", "600", "700"] });

const CarouselText = () => {
  return (
    // <div className="w-full bg-black md:w-[50%]">
    //   <h2 className={`${staatliches.className} text-white text-xl`}>
    //     OUR WORKS
    //   </h2>
    //   <p
    //     className={`${manrope.className} text-white text-center text-sm md:text-lg`}
    //   >
    //     Discover our diverse portfolio of design and printing excellence. We
    //     blend creativity and precision to deliver top-quality projects across
    //     industries. Explore our success stories and let's create something
    //     extraordinary together.
    //   </p>
    // </div>
    <div
      className={`${manrope.className} text flex flex-col gap-4  sm:items-start`}
    >
      <h2
        className={`${staatliches.className} text-white  uppercase font-bold text-center text-3xl lg:text-start`}
      >
        OUR WORKS
      </h2>
      <p className="textt text-white">
        Discover our diverse portfolio of design and printing excellence. We
        blend creativity and precision to deliver top-quality projects across
        industries. Explore our success stories and let's create something
        extraordinary together.
      </p>
    </div>
  );
};

export default CarouselText;
