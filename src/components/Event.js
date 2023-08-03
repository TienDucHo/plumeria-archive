import Calendar from "./Calendar";
import Link from "next/link";
import Image from "next/image";
import GradientRightArrow from "./GradientEffectIcon";
import { AiOutlineRight } from "react-icons/ai";

export default function Event({
  title,
  subTitle,
  clubName,
  date,
  month,
  location,
  time,
  sourcePicture,
}) {
  return (
    <div id="event-component">
      <h1 className="text-5xl font-playfair font-semibold text-left">
        {title}
      </h1>
      <div
        className="justify-self-end flex self-center"
        id="text-gradient"
      >
        <Link
          href="/pages/events"
          className="flex justify-center items-center gap-x-0.5"
        >
          See more events
          <GradientRightArrow></GradientRightArrow>
          <AiOutlineRight
            className="cursor-pointer"
            style={{ fill: "url(#blue-gradient)" }}
          />
        </Link>
      </div>
      <p className="col-start-1 text-xl opacity-70 self-center text-left">
        {subTitle}
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
      <div className="row-start-4 self-center">
        <button className="bg-celestialBlue text-white text-xl font-semibold py-2 w-full">
          Register
        </button>
      </div>
      <div className="col-start-2 row-span-3 relative w-full h-full">
        <Image
          className="object-cover"
          src={sourcePicture}
          alt="A club image"
          fill
        ></Image>
        <div className="absolute top-0 left-0 w-full h-full">
          {["w-1/4", "w-1/6", "w-0", "w-3/12", "w-1/6", "w-1/3"].map(
            (elem, index) => (
              <div
                key={index}
                className={`${elem} masked-box`}
              ></div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
