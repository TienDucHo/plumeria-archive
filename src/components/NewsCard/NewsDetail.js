"use client";

import Image from "next/image";
import Link from "next/link";
import { BsFillShareFill } from "react-icons/bs";

const NewsDetails = ({ newsImgSource, clubImgSource, club, time, title }) => {
  return (
    <div className="relative w-full pt-40 sm:pt-48 md:pt-80 px-4 pb-4 md:px-8 md:pb-8">
      {/* filter */}
      <div className="absolute top-0 left-0 w-full h-full z-[-1] filter-background"></div>
      <Image
        className="object-cover z-[-2]"
        src="/pic1.jpg"
        alt="News Image"
        fill
      />

      {/* club info */}
      <div className="flex gap-x-4 w-full">
        <div className="relative w-[4rem] md:w-[6rem] aspect-square">
          <Image
            className="object-cover"
            src="/pic3.jpg"
            alt="Club Image"
            fill
          />
        </div>
        <div className="relative flex flex-col justify-end text-start w-full">
          <p className="text-base md:text-2xl font-playfair font-semibold text-white">
            PTNK Harmonica Club
          </p>
          <p className="text-celestialBlue">10 minutes ago</p>
          <Link
            href="/"
            className="md:text-lg lg:text-xl text-white absolute bottom-2 right-0 md:right-8 hover:text-saffronYellow transition ease-in-out"
          >
            <BsFillShareFill />
          </Link>
        </div>
      </div>
      <p className="text-white font-playfair mt-8 font-semibold opacity-90 text-xl md:text-4xl lg:text-5xl">
        Lorem ipsum dolor sit amet consectetur. Nulla convallis et ut
        consectetur velit vel nunc.
      </p>
    </div>
  );
};

export default NewsDetails;
