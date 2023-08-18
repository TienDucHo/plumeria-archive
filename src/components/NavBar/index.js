"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const currentPath = usePathname();

  const navList = [
    { "/": "home" },
    { "/pages/news": "news" },
    { "/pages/events": "events" },
    { "/pages/organizations": "organizations" },
    { "/pages/aboutus": "about" },
    { "/pages/contact": "contact" },
  ];

  return (
    <div className="flex flex-row items-center justify-between font-semibold">
      <Link
        className="font-playfair text-3xl italic"
        href="/"
      >
        <span className="text-celestialBlue">Plumeria </span>
        <span>Archive</span>
      </Link>
      <div className="flex gap-x-16 items-center">
        {navList.map((elem, index) => {
          const isActive = currentPath === Object.keys(elem)[0];

          return (
            <Link
              className={
                isActive == false ? "text-black" : "text-celestialBlue"
              }
              key={index}
              href={Object.keys(elem)[0]}
            >
              {Object.values(elem)[0].toUpperCase()}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NavBar;
