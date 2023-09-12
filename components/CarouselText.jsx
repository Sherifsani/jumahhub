import { Staatliches } from "next/font/google";
import { Manrope } from "next/font/google";

const staatliches = Staatliches({ subsets: ["latin"], weight: "400" });
const manrope = Manrope({ subsets: ["latin"], weight: ["400", "600", "700"] });

const CarouselText = () => {
  return (
    <div className="w-full bg-black">
      <p className={`${manrope.className} text-white text-center`}>
        Discover our diverse portfolio of design and printing excellence. We
        blend creativity and precision to deliver top-quality projects across
        industries. Explore our success stories and let's create something
        extraordinary together.
      </p>
    </div>
  );
};

export default CarouselText;
