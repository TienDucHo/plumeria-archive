"use client";

import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { twMerge } from "tailwind-merge";

const NewsCard = ({ className, title, subTitle, club, time, imgSource }) => {
  return (
    <Fade triggerOnce>
      <div
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
        <div className="z-10 flex flex-col gap-y-2">
          <div className="relative gap-x-2">
            <p className="text-aetroBlue font-semibold self-center">{club}</p>
            <p className="absolute top-0 right-0 opacity-60 text-sm justify-self-end">
              {time}
            </p>
          </div>
          <h1 className="font-playfair font-semibold md:text-xl lg:text-2xl">
            {title}
          </h1>
          <p className="opacity-70 text-sm">{subTitle}</p>
        </div>
      </div>
    </Fade>
  );
};

export default NewsCard;
