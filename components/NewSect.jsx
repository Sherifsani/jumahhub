import Image from "next/image";
import { Staatliches } from "next/font/google";
import { Manrope } from "next/font/google";
import new6 from "../public/assets/new6.jpg";
import new8 from "../public/assets/new8.jpg";

const staatliches = Staatliches({ subsets: ["latin"], weight: "400" });
const manrope = Manrope({ subsets: ["latin"], weight: ["400", "600", "700"] });

const NewSect = () => {
  return (
    <section className="flex flex-col gap-[100px] max-w-5xl mx-auto py-10 pt-[150px]">
      <div className="flex justify-between p-3 flex-col gap-10 bg-black sm:flex-row items-center">
        <div className="img w-full rounded-lg p-4">
          <Image
            src={new6}
            quality={100}
            alt={`ejjf`}
            className="w-full max-h-[500px] rounded-[20px]"
          />
        </div>
        <div
          className={`${manrope.className} text flex flex-col gap-4  sm:items-start`}
        >
          <h2
            className={`${staatliches.className} text-white  uppercase font-bold text-center text-3xl lg:text-start`}
          >
            Soaring High with Ingenious Design Solutions
          </h2>
          <p className=" text-white">
            JumaHub's repertoire of design genius ranges from illustrious
            branding to dynamic animations that capture the spirit of creativity
            and innovation.
          </p>
        </div>
      </div>
      <div className="flex justify-between p-3 flex-col-reverse gap-10 bg-black sm:flex-row-reverse items-center">
        <div className="img w-full rounded-lg p-4">
          <Image
            src={new8}
            alt={`ejjf`}
            quality={100}
            className="w-full max-h-[500px] rounded-[20px]"
          />
        </div>
        <div
          className={`${manrope.className} text flex flex-col gap-4  sm:items-start`}
        >
          <h2
            className={`${staatliches.className} text-white text-3xl uppercase font-bold text-center lg:text-start`}
          >
            A Cascade of Dazzling Visuals
          </h2>
          <p className=" text-white">
            Our diverse portfolio boasts stunning artwork and masterful designs
            that embody the vibrancy of JumaHub’s creations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewSect;
