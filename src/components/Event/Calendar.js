"use client";

import { MdLocationOn, MdAccessTime } from "react-icons/md";
import { twMerge } from "tailwind-merge";

const Calendar = ({ club, time, date, month, location, className }) => {
  const iconInfo = [
    {
      icon: MdLocationOn,
      info: location,
    },

    {
      icon: MdAccessTime,
      info: time,
    },
  ];

  return (
    <div className={twMerge("flex gap-x-4", className)}>
      {/* calendar */}
      <div className="border-2 border-celestialBlue70 border-opacity-0 flex flex-col items-center justify-center gap-y-1 p-4 md:p-5 lg:p-9">
        <p className="text-aetroBlue font-bold text-2xl md:text-celestialBlue md:text-3xl lg:text-4xl">
          {date}
        </p>
        <p className="italic font-bold text-white opacity-100 text-xs md:text-sm md:opacity-70 md:text-black">
          {month}
        </p>
      </div>

      {/* other info */}
      <div className="flex flex-col gap-y-1">
        <p className="text-aetroBlue font-semibold text-base md:text-celestialBlue md:opacity-80 md:text-xl lg:text-2xl">
          {club}
        </p>
        {iconInfo.map((elem, index) => {
          return (
            <span
              className="flex items-center gap-x-2 font-semibold text-sm text-white md:opacity-80 md:text-black lg:text-base"
              key={index}
            >
              <elem.icon size={18} />
              {elem.info}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
