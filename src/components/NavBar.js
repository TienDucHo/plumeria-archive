"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const colorClass = (pathname, myPath) => {
  return myPath === pathname ? "text-celestialBlue" : "text-black";
};

export default function NavBar() {
  const currentPath = usePathname();

  return (
    <nav className="font-bold whitespace-nowrap grid grid-cols-2 mx-16 mt-8 mb-24 items-center">
      <div className="font-playfair text-3xl text-left italic">
        <span className="text-celestialBlue">Plumeria </span>
        <span className="text-black">Archive</span>
      </div>

      <div className="justify-self-end uppercase">
        <ul className="flex gap-16">
          <li id="home">
            <Link
              className={colorClass(currentPath, "/")}
              href="/"
            >
              Home
            </Link>
          </li>
          <li id="news">
            <Link
              className={colorClass(currentPath, "/pages/news")}
              href="/pages/news"
            >
              News
            </Link>
          </li>
          <li id="events">
            <Link
              className={colorClass(currentPath, "/pages/events")}
              href="/pages/events"
            >
              Events
            </Link>
          </li>
          <li id="organizations">
            <Link
              className={colorClass(currentPath, "/pages/organizations")}
              href="/pages/organizations"
            >
              Organizations
            </Link>
          </li>
          <li id="aboutus">
            <Link
              className={colorClass(currentPath, "/pages/aboutus")}
              href="/pages/aboutus"
            >
              About Us
            </Link>
          </li>
          <li id="contact">
            <Link
              className={colorClass(currentPath, "/pages/contact")}
              href="/pages/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
