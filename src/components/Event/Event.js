"use client";

import Image from "next/image";
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";
import { useState } from "react";

// components
import Button from "../Button/Button";
import GradientIcon from "../GradientIcon/GradientIcon";

// local components
import Calendar from "./Calendar";

const Event = ({ club, time, date, month, location }) => {
  const [hoverLink, setHoverLink] = useState(false);

  return (
    <div className="grid grid-cols-2 gap-x-4 px-12">
      <div className="md:min-h-[360px] lg:min-h-[400px]  col-start-2 row-start-1 flex flex-col items-end">
        {/* link styling */}
        <Link
          onMouseEnter={() => setHoverLink(true)}
          onMouseLeave={() => setHoverLink(false)}
          className="shiny-link items-center mb-2 text-celestialBlue hidden md:flex md:text-sm lg:text-base"
          href="/pages/events"
        >
          See more events
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
        <div className="relative w-full h-full">
          <Image
            className="object-cover"
            src="/pic1.jpg"
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
      <div className="flex flex-col justify-between col-start-1 gap-y-2 md:min-h-[360px] lg:min-h-[400px]">
        <h1 className="font-playfair text-2xl font-semibold md:text-3xl lg:text-5xl">
          Lorem ipsum dolor sit amet consectetur.
        </h1>
        <p className="opacity-70 text-lg hidden md:block md:text-base lg:text-lg">
          Lorem ipsum dolor sit amet consectetur. Tincidunt platea vulputate
          egestas eu.
        </p>
        <Calendar
          club={club}
          time={time}
          date={date}
          month={month}
          location={location}
        />
        <Button
          id="register-button"
          onClick={() => {
            alert("Register clicked!");
          }}
        >
          Register
        </Button>
      </div>
    </div>
  );
};

export default Event;
