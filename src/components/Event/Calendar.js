"use client";

import { MdLocationOn, MdAccessTime } from "react-icons/md";

const Calendar = ({ club, time, date, month, location }) => {
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
    <div className="flex gap-x-4">
      {/* calendar */}
      <div className="border-2 border-celestialBlue border-opacity-0 flex flex-col items-center justify-center gap-y-1 p-6 lg:p-9">
        <p className="text-celestialBlue font-bold text-3xl lg:text-4xl">
          {date}
        </p>
        <p className="italic font-bold opacity-70">{month}</p>
      </div>

      {/* other info */}
      <div className="flex flex-col gap-y-1">
        <p className="text-celestialBlue font-semibold opacity-80 text-xl lg:text-2xl">
          {club}
        </p>
        {iconInfo.map((elem, index) => {
          return (
            <span
              className="flex items-center gap-x-2 font-semibold opacity-80 text-sm lg:text-base"
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
