import Calendar from "./Calendar";
import Link from "next/link";
import Image from "next/image";

export default function Event({ clubName, date, month, location, time }) {
  return (
    <div className="grid grid-cols-2 grid-rows-auto mx-16">
      <h1 className="text-4xl font-playfair font-semibold">
        Lorem ipsum dolor sit amet consectetur.
      </h1>
      <Link
        href=""
        className="justify-self-end"
      >
        See more events
      </Link>
      <p className="opacity-70 self-center">
        Lorem ipsum dolor sit amet consectetur. Tincidunt platea vulputate
        egestas eu.
      </p>

      <div className="row-start-3">
        <Calendar
          clubName={clubName}
          date={date}
          month={month}
          location={location}
          time={time}
        ></Calendar>
      </div>
      <button className="row-start-4 bg-celestialBlue text-white">
        Register
      </button>
      <div className="col-start-2 row-span-3 justify-self-center relative w-full h-full">
        <Image
          className=" object-cover "
          src="/pic1.jpg"
          alt=""
          fill
        ></Image>
      </div>
    </div>
  );
}
