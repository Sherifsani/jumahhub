import React from "react";
import Image from "next/image";

const HeroGallery = () => {
  return (
    <div className="w-[100%] px-3 sm:h-[500px] h-[200px] grid place-items-center overflow-hidden rounded-lg">
      <div className="second-holder grid w-[140%] rounded-lg h-[150%] overflow-hidden -rotate-[20deg] sm:h-[200%]">
        <div className="rounded-md w-full h-full">
          <Image
            src="/assets/horizontal.jpg"
            width={100}
            height={100}
            className="w-full h-full "
          />
        </div>
        <div className="rounded-md col-span-2 w-full h-full">
          <Image
            src="/assets/horizontal-2.jpg"
            width={100}
            height={100}
            className="w-full h-full "
          />
        </div>
        <div className="rounded-md col-span-2 w-full h-full">
          <Image
            src="/assets/horizontal.jpg"
            width={100}
            height={100}
            className="w-full h-full "
          />
        </div>
        <div className="rounded-md w-full h-full">
          <Image
            src="/assets/horizontal.jpg"
            width={100}
            height={100}
            className="w-full h-full "
          />
        </div>
      </div>
    </div>
  );
};

export default HeroGallery;
