import React from "react";

const HeroGallery = () => {
  return (
    <div className="w-[90%] sm:h-[500px] h-[200px] grid place-items-center overflow-hidden rounded-lg">
      <div className="second-holder grid w-[140%] rounded-lg h-[150%] overflow-hidden -rotate-[20deg] sm:h-[200%]">
        <div className="bg-yellow-400 rounded-md"></div>
        <div className="bg-yellow-400 rounded-md col-span-2"></div>
        <div className="bg-yellow-400 rounded-md col-span-2"></div>
        <div className="bg-yellow-400 rounded-md"></div>
      </div>
    </div>
  );
};

export default HeroGallery;
