import React from "react";
import Image from "next/image";

const Squiggle = () => {
  return (
    <div className="squiggle w-full bg-black pt-[150px]">
      <div className="w-full grid grid-cols-2 sm:grid-cols-6 p-10 gap-10 max-w-7xl mx-auto">
        <Image
          className="w-full"
          src="/assets/squiggle 1.webp"
          alt="squiggle"
          width={100}
          height={100}
        />
        <Image
          className="w-full"
          src="/assets/squiggle 2.webp"
          alt="squiggle"
          width={100}
          height={100}
        />
        <Image
          className="w-full"
          src="/assets/squiggle 3.webp"
          alt="squiggle"
          width={100}
          height={100}
        />
        <Image
          className="w-full"
          src="/assets/squiggle 4.webp"
          alt="squiggle"
          width={100}
          height={100}
        />
        <Image
          className="w-full"
          src="/assets/squiggle 5.webp"
          alt="squiggle"
          width={100}
          height={100}
        />
        <Image
          className="w-full"
          src="/assets/squiggle 6.webp"
          alt="squiggle"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default Squiggle;
