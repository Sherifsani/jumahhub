import Link from "next/link";
import { Staatliches } from "next/font/google";
import { Manrope } from "next/font/google";

const staatliches = Staatliches({ subsets: ["latin"], weight: "400" });
const manrope = Manrope({ subsets: ["latin"], weight: ["400", "600", "700"] });

const Copyright = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className={`${staatliches.className} text-white`}>
      <p>&copy; {currentYear} JumaHub Designs</p>
    </div>
  );
};

export default Copyright;
