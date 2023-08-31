"use client";

import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { Fade } from "react-awesome-reveal";

// local components
import NewsBasic from "./NewsBasic";

const SpecialNewsCard = ({ className, club, time, title, subTitle }) => {
  return (
    <Fade
      triggerOnce
      className={twMerge(
        "relative pt-32 pb-8 mr-[2rem] min-w-[20rem] flex flex-col justify-end group",
        className
      )}
    >
      <Link href="/pages/news">
        <div className="absolute w-full h-full top-0 left-[2rem]">
          <Image
            className="object-cover z-[-1]"
            src="/pic1.jpg"
            fill
            alt="Special News Image"
          />
        </div>
        <div className="text-white bg-black max-w-[24rem] px-4 py-4">
          <NewsBasic
            spec={true}
            className="py-4"
            club={club}
            time={time}
            title={title}
            subTitle={subTitle}
          />
        </div>
      </Link>
    </Fade>
  );
};

export default SpecialNewsCard;
