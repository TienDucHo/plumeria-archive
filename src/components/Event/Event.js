"use client";

import Image from "next/image";
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";
import { useState } from "react";

// components
import GradientIcon from "../../utils/GradientIcon/GradientIcon";

// local components
import Calendar from "./Calendar";

const Event = ({
  title,
  subTitle,
  club,
  time,
  date,
  month,
  location,
  imgSource,
}) => {
  const [hoverLink, setHoverLink] = useState(false);

  return (
    <div className="relative flex flex-col justify-center pt-32 mx-4 sm:mx-8 md:pt-0 md:grid md:grid-cols-2 md:gap-x-4 lg:mx-12">
      <div className="md:flex md:flex-col md:items-end md:col-start-2 md:row-start-1 md:min-h-[260px] lg:min-h-[310px]">
        {/* filter */}
        <div className="bg-black opacity-70 absolute top-50 left-0 w-full h-[55%] md:hidden"></div>

        {/* link styling */}
        <Link
          onMouseEnter={() => setHoverLink(true)}
          onMouseLeave={() => setHoverLink(false)}
          className="shiny-link absolute bottom-[46%] right-2 z-[11] text-aetroBlue text-sm flex items-center mb-2 md:static md:text-celestialBlue lg:text-base"
          href="/pages/events"
        >
          More events
          {hoverLink ? (
            <GradientIcon
              icon={MdArrowForwardIos}
              size={12}
            />
          ) : (
            <MdArrowForwardIos size={12} />
          )}
        </Link>

        {/* picture styling */}
        <div className="md:relative md:w-full md:h-full md:min-h-[260px] lg:min-h-[310px] lg:max-w-4xl">
          <Image
            className="object-cover z-[-1]"
            src={imgSource}
            fill
            alt="Event image"
          ></Image>
          <div className="absolute top-0 left-0 w-full h-full hidden md:block">
            {["w-[16%]", "w-[8%]", "w-[16%]", "w-[0]", "w-[24%]"].map(
              (elem, index) => (
                <div
                  className={`bg-white h-1/5 ${elem}`}
                  key={index}
                ></div>
              )
            )}
          </div>
        </div>
      </div>

      {/* text styling */}
      <div className="flex flex-col gap-y-2 z-10 md:col-start-1 lg:max-w-4xl">
        <h1 className="font-playfair font-semibold text-xl text-white mt-2 mx-4 md:mt-0 md:mx-0 md:text-black md:text-3xl lg:text-5xl">
          {title}
        </h1>
        <p className="opacity-70 text-lg hidden md:block md:text-base lg:text-lg">
          {subTitle}
        </p>
        <Calendar
          className="mx-4 mb-1 md:m-0"
          club={club}
          time={time}
          date={date}
          month={month}
          location={location}
        />
        <button
          id="register-button"
          className="btn btn-primary rounded-none border-none text-white text-xl hidden md:text-2xl md:block"
          onClick={() => {
            alert("Register clicked!");
          }}
        >
          Register
        </button>
        <button
          id="register-button-1"
          className="btn btn-primary rounded-none text-white border-none text-xl py-2 md:hidden"
          onClick={() => {
            alert("Register clicked!");
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Event;
