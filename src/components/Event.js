import { MdLocationPin } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import Image from "next/image";

export default function Event({ clubName, date, month, location, time }) {
  return (
    <div className="flex gap-x-3">
      <div
        id="month-date-calendar"
        className="flex text-center"
      >
        <div className="border-2 border-celestialBlue p-8">
          <p className="text-4xl font-bold italic text-celestialBlue">{date}</p>
          <p className="opacity-70 font-bold italic">{month}</p>
        </div>
      </div>
      <div
        id="location-time-display"
        className="font-semibold"
      >
        <h1 className="text-3xl text-celestialBlue">{clubName}</h1>
        <p className="flex items-center gap-x-2">
          <MdLocationPin></MdLocationPin>
          {location}
        </p>
        <p className="flex items-center gap-x-2">
          <AiOutlineClockCircle></AiOutlineClockCircle>
          {time}
        </p>
      </div>
    </div>
  );
}
