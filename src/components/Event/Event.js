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
    <div className="relative flex flex-col justify-center mx-12 sm:mx-28 md:mx-0 md:px-12 md:grid md:grid-cols-2 md:gap-x-4">
      <div className="md:flex md:flex-col md:items-end md:col-start-2 md:row-start-1 md:min-h-[200px] lg:min-h-[310px]">
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
        <div className="md:relative md:w-full md:h-full md:min-h-[200px] lg:min-h-[310px]">
          <Image
            className="object-cover z-[-1]"
            src="/pic1.jpg"
            fill
            alt="Event image"
          ></Image>
          <div className="absolute top-0 left-0 w-full h-full hidden md:block ">
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
      <div className="flex flex-col  gap-y-2 md:col-start-1">
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
