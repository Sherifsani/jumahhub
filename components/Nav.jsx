import React from "react";
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
    <div
      className="
    "
    >
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-black">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2">
              <Image
                src="/assets/logo1.png"
                width={100}
                height={100}
                href="/"
              />
            </div>
            <div className="flex-none hidden lg:block">
              {/* Navbar menu content here */}
              <ul className="menu menu-horizontal">
                <li className="text-lightgreen">
                  <Link href="/" className="text-lightgreen">
                    Home
                  </Link>
                </li>
                <li className="text-lightgreen">
                  <Link href="/services">Services</Link>
                </li>
                <li className="text-lightgreen">
                  <Link href="/portfolio">Portfolio</Link>
                </li>
                <li className="text-lightgreen">
                  <Link href="/contact">contact</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Page content here */}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200">
            {/* Sidebar content here */}
            <li className="text-lightgreen">
              <Link href="/">Home</Link>
            </li>
            <li className="text-lightgreen">
              <Link href="/services">Services</Link>
            </li>
            <li className="text-lightgreen">
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li className="text-lightgreen">
              <Link href="/contact">contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
