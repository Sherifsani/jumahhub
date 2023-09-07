import { Staatliches } from "next/font/google";
import { Manrope } from "next/font/google";
const staatliches = Staatliches({ subsets: ["latin"], weight: "400" });
const manrope = Manrope({ subsets: ["latin"], weight: ["400", "600", "700"] });

const Herotext = () => {
  return (
    <section className="w-full bg-white">
      <div className="flex flex-col w-full  py-6 px-4 gap-7 sm:gap-9 sm:py-[120px] sm:w-[80%] mx-auto max-w-5xl ">
        <h1
          className={`${staatliches.className} text-black uppercase text-2xl underline font-bold w-full text-center sm:text-3xl lg:5xl sm:text-start sm:no-underline `}
        >
          unleash the creative genius
        </h1>
        <div className="flex flex-col gap-7 sm:flex-row sm:gap-8 justify-center ">
          <p
            className={`${manrope.className} text-black text-sm font-semibold sm:text-lg`}
          >
            Welcome to JumaHub, the utopia of graphic design wonders where every
            pixel is tailored to perfection. Our visionaries channel the raw
            power of imagination, molding it into design masterpieces that defy
            boundaries and captivate the senses.
          </p>
          <p
            className={`${manrope.className} text-black text-sm font-semibold sm:text-lg`}
          >
            JumaHub renders an artistic realm where colorful dreams seamlessly
            blend with innovative design elements, forging a visual experience
            that leaves a lasting impression. We bring concepts to life,
            transcending the ordinary and breathing life into the extraordinary.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Herotext;
