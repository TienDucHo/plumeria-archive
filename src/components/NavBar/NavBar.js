"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { twMerge } from "tailwind-merge";

const NavBar = () => {
  const currentPath = usePathname();
  const [displayMenu, setDisplayMenu] = useState(false);

  const navList = [
    { "/": "home" },
    { "/pages/news": "news" },
    { "/pages/events": "events" },
    { "/pages/organizations": "organizations" },
    { "/pages/aboutus": "about" },
    { "/pages/contact": "contact" },
  ];

  const myNavList = navList.map((elem, index) => {
    const isActive = currentPath === Object.keys(elem)[0];

    return (
      <Link
        className={
          isActive == false ? "text-black nav-link" : "gradient-text nav-link"
        }
        key={index}
        href={Object.keys(elem)[0]}
      >
        {Object.values(elem)[0].toUpperCase()}
      </Link>
    );
  });

  return (
    <div className="relative flex flex-row justify-between font-semibold mb-12 md:mb-28">
      {/* logo */}
      <Link
        className={twMerge(
          "group font-playfair italic whitespace-nowrap text-2xl pr-4 mt-8 ml-4 sm:ml-8 lg:ml-12 lg:text-3xl",
          displayMenu ? "z-0" : "z-10"
        )}
        href="/"
      >
        <span className="text-celestialBlue group-hover:text-aetroBlue transition duration-300 ease-in-out">
          Plumeria{" "}
        </span>
        <span className="text-black">Archive</span>
      </Link>
      {/* filter */}
      <div
        className={twMerge(
          "absolute left-0 top-0 w-full h-[100vh] bg-black opacity-0 transition ease-in-out md:hidden",
          displayMenu ? "opacity-40 z-40 fixed" : "opacity-0 z-[-1]"
        )}
      ></div>
      {/* Navigation bar styling for desktop */}
      <div className="mt-8 items-center hidden lg:gap-x-12 lg:text-base md:flex md:gap-x-8 md:text-sm md:mr-8 lg:mr-12">
        {myNavList}
      </div>
      {/* Navigation bar styling for mobile */}
      <button
        className={`z-50 mr-4 sm:mr-8 md:hidden ${
          displayMenu ? "fixed top-10 right-0" : "bottom-2 right-0 absolute"
        }`}
        onClick={() => setDisplayMenu(!displayMenu)}
      >
        {displayMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>
      <div
        className={twMerge(
          "absolute top-0 right-0 block z-40 transition ease-linear duration-750 w-[16rem] pr-12 h-[100vh] bg-white md:hidden",
          displayMenu ? "translate-x-0 fixed" : "translate-x-full fixed"
        )}
      >
        <div
          id="slidebar"
          className="flex flex-col mt-28 pl-4 gap-y-6"
        >
          {myNavList}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
