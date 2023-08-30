import Image from "next/image";
import { Staatliches } from "next/font/google";
import { Manrope } from "next/font/google";

const staatliches = Staatliches({ subsets: ["latin"], weight: "400" });
const manrope = Manrope({ subsets: ["latin"], weight: ["400", "600", "700"] });

const CardSect = () => {
  return (
    <div className="flex justify-between p-3 flex-col gap-5 bg-black">
      <div className="img w-full rounded-xl">
        <Image
          src="/assets/card.jpg"
          width={100}
          height={100}
          alt={`ejjf`}
          className="w-full h-[unset]"
        />
      </div>
      <div className={`${manrope.className} text`}>
        <h2 className="text-lightgreen text-xl uppercase font-bold">
          Soaring High with Ingenious Design Solutions
        </h2>
        <p className="text-sm text-lightgreen">
          JumaHub's repertoire of design genius ranges from illustrious branding
          to dynamic animations that capture the spirit of creativity and
          innovation.
        </p>
      </div>
    </div>
  );
};

export default CardSect;
