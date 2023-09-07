"use client";
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
  const data = [
    {
      image: Banner,
      head: "Banner Making",
      text: "Eye-Catching Banners for Every Occasion",
    },
    {
      image: card,
      head: "Complementary Card Printing",
      text: "Custom Complementary Card Printing",
    },
    {
      image: brand,
      head: "Brand Consultancy",
      text: "Strategic Brand Consultancy Services",
    },
    {
      image: letter,
      head: "Letterhead Printing",
      text: "Professional Letterhead Printing Services",
    },
  ];

  const dataElem = data.map((item, index) => {
    return (
      <div
        key={index}
        className="holder w-full flex md:flex-row flex-col p-3 items-center bg-white "
      >
        <div className="name flex flex-col items-center lg:items-start gap-4">
          <h2
            className={`${staatliches.className} text-2xl text-black w-[unset]`}
          >
            {item.head}
          </h2>
          <p className={`${manrope.className} text-sm font-semibold`}>
            {item.text}
          </p>
        </div>
        <div className="image">
          <Image src={item.image} className="w-[200px]" />
        </div>
      </div>
    );
  });

  return (
    <section id="services" className="w-full bg-greywhite">
      <div className="services w-full max-w-5xl mx-auto p-5">
        <h1
          className={`${staatliches.className} text-4xl text-lightgreen text-start`}
        >
          Services
        </h1>
        <div className="service-cards mt-4  gap-4 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-auto">
          {dataElem}
        </div>
      </div>
    </section>
  );
};

export default Services;
