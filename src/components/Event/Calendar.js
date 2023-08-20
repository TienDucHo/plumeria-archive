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
      <div className="border-2 border-celestialBlue border-opacity-0 flex flex-col w-[9rem] items-center justify-center gap-y-1 py-9">
        <p className="text-celestialBlue font-bold text-4xl">{date}</p>
        <p className="italic font-bold opacity-70">{month}</p>
      </div>

      {/* other info */}
      <div className="flex flex-col gap-y-1">
        <p className="text-celestialBlue font-semibold text-2xl opacity-80">
          {club}
        </p>
        {iconInfo.map((elem, index) => {
          return (
            <span
              className="flex items-center gap-x-2 font-semibold opacity-80"
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
