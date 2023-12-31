import React from "react";
// import HeroGallery from "./HeroGallery";

const Header = () => {
  return (
    <header className="flex flex-col items-center bg-black w-full">
      <div className="flex items-center flex-col sm:flex-row w-full  lg:justify-between">
        <h1 className="text-[4rem] text-white  sm:text-[9rem]">JUMAHUB</h1>
        <p className="text-center text-white p-3 lg:w-[50%] sm:text-lg sm:text-start">
          Unleash your imagination and step into a world of innovation. Discover
          Jumahub’s incredible range of cutting-edge printing and graphic design
          solutions.
        </p>
      </div>
      {/* <HeroGallery /> */}
    </header>
  );
};

export default Header;
