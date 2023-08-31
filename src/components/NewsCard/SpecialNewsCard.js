"use client";

import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { Fade } from "react-awesome-reveal";

// local components
import NewsBasic from "./NewsBasic";

const SpecialNewsCard = ({ className }) => {
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
            club="Harmonica"
            time="20 mintues ago"
            title="Lorem ipsum dolor sit amet consectetur."
            subTitle="Lorem ipsum dolor sit amet consectetur. Pretium laoreet est vel aliquet mauris senectus sed. Lorem ipsum dolor sit amet consectetur."
          />
        </div>
      </Link>
    </Fade>
  );
};

export default SpecialNewsCard;
