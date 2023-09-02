import Social from "./Social";
import Contact from "./Contact";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <div id="footer" className="w-full h-screen flex flex-col items-center justify-center bg-black">
      <div className=" w-full flex flex-col items-center justify-center gap-4 md:gap-16 lg:gap-32 bg-black px-4 max-w-5xl mx-auto h-full">
        <Contact />
        <div className="flex flex-col items-center gap-4 mt-12 sm:flex-row sm:justify-between  w-full">
          <Social />
          <Copyright />
        </div>
      </div>
    </div>
  );
};

export default Footer;
