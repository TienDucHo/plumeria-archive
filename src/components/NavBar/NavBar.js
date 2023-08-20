"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { twMerge } from "tailwind-merge";

const NavBar = ({ children }) => {
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
          isActive == false
            ? "text-black nav-link"
            : "text-celestialBlue nav-link"
        }
        key={index}
        href={Object.keys(elem)[0]}
      >
        {Object.values(elem)[0].toUpperCase()}
      </Link>
    );
  });

  return (
    <div>
      <div className="flex flex-row justify-between font-semibold">
        {/* logo */}
        <Link
          className={twMerge(
            "font-playfair italic whitespace-nowrap text-2xl lg:text-3xl px-4 mt-8",
            displayMenu ? "z-0" : "z-10"
          )}
          href="/"
        >
          <span className="text-celestialBlue">Plumeria </span>
          <span>Archive</span>
        </Link>
        {/* filter */}
        <div
          className={twMerge(
            "absolute left-0 top-0 w-[100%] h-[100%] bg-black opacity-0 transition md:hidden",
            displayMenu ? "opacity-40 z-10" : "opacity-0 z-0"
          )}
        ></div>
        {/* Navigation bar styling for desktop */}
        <div className=" mr-8 mt-8 items-center hidden lg:flex lg:gap-x-16 lg:text-base md:flex md:gap-x-8 md:text-sm">
          {myNavList}
        </div>
        {/* Navigation bar styling for mobile */}
        <div
          className={twMerge(
            "relative w-[16rem] pr-4 h-[100vh] md:hidden",
            displayMenu ? "bg-white z-10" : "z-0"
          )}
        >
          <div className="flex justify-end mt-8">
            <button onClick={() => setDisplayMenu(!displayMenu)}>
              {displayMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
          </div>
          <div
            id="slidebar"
            className={twMerge(
              "flex flex-col  mt-16 pl-4 gap-y-6 transition-all duration-750 fixed",
              displayMenu
                ? "translate-x-0 opacity-100"
                : "opacity-0 translate-x-full"
            )}
          >
            {myNavList}
          </div>
        </div>
        <div className="absolute top-[8rem] left-0 font-normal">{children}</div>
      </div>
    </div>
  );
};

export default NavBar;
