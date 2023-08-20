"use client";

import Image from "next/image";

// components
import Button from "../Button/Button";

// local components
import Calendar from "./Calendar";

const Event = ({ club, time, date, month, location }) => {
  return (
    <div className="grid grid-cols-2 h-full gap-x-4 px-12">
      {/* picture styling */}
      <div className="relative col-start-2 row-start-1">
        <Image
          src="/pic1.jpg"
          fill
          alt="Event image"
        ></Image>

        <div className="absolute top-0 left-0 w-full h-full">
          {["w-[16%]", "w-[8%]", "w-[16%]", "w-[0]", "w-[24%]", "w-[32%]"].map(
            (elem, index) => (
              <div
                className={`bg-white h-1/6 ${elem}`}
                key={index}
              ></div>
            )
          )}
        </div>
      </div>

      {/* text styling */}
      <div className="flex flex-col mx-4 gap-y-2 col-start-1">
        <h1 className="font-playfair text-5xl font-semibold">
          Lorem ipsum dolor sit amet consectetur.
        </h1>
        <p className="opacity-70 text-lg">
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
          className="register-button"
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
