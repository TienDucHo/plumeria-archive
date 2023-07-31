"use client";

import Calendar from "./Calendar";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineRight } from "react-icons/ai";

export default function Event({
  title,
  subTitle,
  clubName,
  date,
  month,
  location,
  time,
}) {
  return (
    <div className="grid grid-cols-2 grid-rows-auto m-16 gap-y-3">
      <h1 className="text-4xl font-playfair font-semibold">{title}</h1>
      <div
        className="justify-self-end flex self-center"
        id="text-gradient"
      >
        <Link
          href=""
          className="text-gradientBlue45"
        >
          See more events
        </Link>
        <svg
          width="0"
          height="0"
        >
          <linearGradient
            id="icon-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              stopColor="#058ed9"
              offset="0%"
            />
            <stop
              stopColor="#40bbda"
              offset="100%"
            />
          </linearGradient>
        </svg>
        <div className="flex items-center">
          <AiOutlineRight style={{ fill: "url(#icon-gradient)" }} />
        </div>
      </div>
      <p className="text-xl opacity-70 self-center">{subTitle}</p>

      <div className="row-start-3">
        <Calendar
          clubName={clubName}
          date={date}
          month={month}
          location={location}
          time={time}
        ></Calendar>
      </div>
      <button className="row-start-4 bg-celestialBlue text-white text-xl font-semibold py-2 mr-4 max-w-2xl">
        Register
      </button>
      <div className="col-start-2 row-span-3 justify-self-center relative w-full h-full">
        <Image
          className="object-cover pl-16"
          src="/pic1.jpg"
          alt="A club image"
          fill
        ></Image>
      </div>
    </div>
  );
}
