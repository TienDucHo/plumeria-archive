"use client";

// components
import Button from "../Button/Button";

// local components
import Calendar from "./Calendar";

const Event = ({ club, time, date, month, location }) => {
  return (
    <div>
      {/* left styling */}
      <div className="flex flex-col mx-4 gap-y-2">
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
          onClick={() => {
            alert("Register clicked!");
          }}
        >
          Register
        </Button>
      </div>

      {/* right styling */}
      <div></div>
    </div>
  );
};

export default Event;
