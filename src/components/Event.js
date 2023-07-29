import { MdLocationPin } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import Image from "next/image";

export default function Event({ clubName, date, month, location, time }) {
  return (
    <div className="grid grid-cols-3 grid-rows-auto">
      <h1 className="font-playfair font-semibold text-4xl col-span-2">
        Lorem ipsum dolor sit amet consectetur.
      </h1>
      <p className="text-lg opacity-70 row-start-2 col=span-2">
        Lorem ipsum dolor sit amet consectetur. Tincidunt platea vulputate
        egestas eu.
      </p>

      <div className="border-2 border-celestialBlue border-opacity-10 row-start-3 row-span-2">
        <p id="date">{date}</p>
        <p id="month">{month}</p>
      </div>
      <div className="row-start-3 row-span-2 col-start-2">
        <p>{clubName}</p>
        <p>
          <AiOutlineClockCircle className="inline"></AiOutlineClockCircle>
          {location}
        </p>
        <p>
          <MdLocationPin className="inline"></MdLocationPin>
          {time}
        </p>
      </div>
      <button className="row-start-5 col-span-2">Register</button>
      <Image
        className="col-start-3 row-span-5"
        src="/pic1.jpg"
        alt="An image"
        width={400}
        height={400}
      ></Image>
    </div>
  );
}
