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
        className={isActive == false ? "text-black" : "text-celestialBlue"}
        key={index}
        href={Object.keys(elem)[0]}
      >
        {Object.values(elem)[0].toUpperCase()}
      </Link>
    );
  });

  return (
    <div className="flex flex-row justify-between font-semibold">
      {/* filter */}
      <div
        className={twMerge(
          "absolute left-0 top-0 w-[100%] h-[100%] bg-black opacity-0 transition md:hidden",
          displayMenu ? "opacity-40" : "opacity-0"
        )}
      ></div>

      {/* logo */}
      <Link
        className="font-playfair italic whitespace-nowrap  text-2xl lg:text-3xl px-4 pt-4"
        href="/"
      >
        <span className="text-celestialBlue">Plumeria </span>
        <span>Archive</span>
      </Link>

      {/* Navigation bar styling for desktop */}
      <div className="items-center hidden lg:flex lg:gap-x-16 lg:text-base md:flex md:gap-x-8 md:text-sm mr-8">
        {myNavList}
      </div>

      {/* Navigation bar styling for mobile */}
      <div
        id="mobile-nav-bar"
        className="relative w-[16rem] pt-4 pr-4 h-[100vh] bg-white md:hidden"
      >
        <div className="flex justify-end">
          <button onClick={() => setDisplayMenu(!displayMenu)}>
            {displayMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
        <div className="flex flex-col mt-16 pl-4 gap-y-6">{myNavList}</div>
      </div>
    </div>
  );
};

export default NavBar;
