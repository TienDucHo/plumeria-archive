"use client";

import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

// local components
import NewsBasic from "./NewsBasic";

const NewsCard = ({ className, title, subTitle, club, time, imgSource }) => {
  return (
    <Fade
      triggerOnce
      className="flex-grow w-full"
    >
      <Link
        href="/pages/news"
        className={twMerge(
          "relative flex flex-col min-w-[18rem] text-white px-4 pt-32 pb-4",
          className
        )}
      >
        {/* filter */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <Image
          className="object-cover z-[-1]"
          src={imgSource}
          alt="News Image"
          fill
        ></Image>
        <NewsBasic
          club={club}
          time={time}
          title={title}
          subTitle={subTitle}
        />
      </Link>
    </Fade>
  );
};

export default NewsCard;
