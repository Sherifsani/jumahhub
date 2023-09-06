import Banner from "../public/assets/social/banner.jpeg";
import brand from "../public/assets/social/brand.jpeg";
import card from "../public/assets/social/card.jpeg";
import flier from "../public/assets/social/flier.png";
import letter from "../public/assets/social/letterhead.jpeg";
import Image from "next/image";
import Link from "next/link";
import { Staatliches } from "next/font/google";
import { Manrope } from "next/font/google";

const staatliches = Staatliches({ subsets: ["latin"], weight: "400" });
const manrope = Manrope({ subsets: ["latin"], weight: ["400", "600", "700"] });

const Services = () => {
  return (
    <section id="services" className="w-full bg-greywhite">
      <div className="services w-full max-w-5xl mx-auto p-5">
        <h1
          className={`${staatliches.className} text-2xl text-black bg-lightgreen w-[unset]`}
        >
          Services
        </h1>
        <div className="service-cards mt-4  gap-4 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-auto">
          <div className="holder w-full flex flex-col p-3 items-center bg-white">
            <div className="name flex flex-col items-center">
              <h2
                className={`${staatliches.className} text-2xl text-black bg-lightgreen w-[unset]`}
              >
                Banner Making
              </h2>
              <p className={`${manrope.className} text-sm`}>
                Eye-Catching Banners for Every Occasion
              </p>
            </div>
            <div className="image">
              <Image src={Banner} className="w-[200px]" />
            </div>
          </div>
          <div className="holder w-full flex flex-col p-3 items-center bg-white">
            <div className="name flex flex-col items-center">
              <h2
                className={`${staatliches.className} text-2xl text-black bg-lightgreen w-[unset]`}
              >
                LetterHead Printing
              </h2>
              <p className={`${manrope.className} text-sm`}>
                Professional Letterhead Printing Services
              </p>
            </div>
            <div className="image">
              <Image src={letter} className="w-[200px]" />
            </div>
          </div>
          <div className="holder w-full flex flex-col p-3 items-center bg-white">
            <div className="name flex flex-col items-center">
              <h2
                className={`${staatliches.className} text-2xl text-black bg-lightgreen w-[unset]`}
              >
                Flier Printing
              </h2>
              <p className={`${manrope.className} text-sm`}>
                Vibrant Flyer Printing for Your Promotions
              </p>
            </div>
            <div className="image">
              <Image src={flier} className="w-[200px]" />
            </div>
          </div>
          <div className="holder w-full flex flex-col p-3 items-center bg-white">
            <div className="name flex flex-col items-center">
              <h2
                className={`${staatliches.className} text-2xl text-black bg-lightgreen w-[unset]`}
              >
                Complementary Card Printing
              </h2>
              <p className={`${manrope.className} text-sm`}>
                Custom Complementary Card Printing
              </p>
            </div>
            <div className="image">
              <Image src={card} className="w-[200px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
