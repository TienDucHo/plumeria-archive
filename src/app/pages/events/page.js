"use client";
import Lottie from "lottie-react";
import * as sick from "/public/sick.json";

// components
import Event from "@/components/Event/Event";
import RotatedEvent from "@/components/Event/RotatedEvent";

const Events = () => {
  const eventsInfo = [
    {
      title: "Lorem ipsum dolor sit amet consectetur.",
      subTitle:
        "Lorem ipsum dolor sit amet consectetur. Tincidunt platea vulputate egestas eu.",
      club: "Harmonica PTNK Club",
      time: "17:00",
      date: "25",
      month: "December",
      location: "125 Nguyen Chi Thanh",
      imgSource: "/pic1.jpg",
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur.",
      subTitle:
        "Lorem ipsum dolor sit amet consectetur. Tincidunt platea vulputate egestas eu.",
      club: "TPT",
      time: "20:00",
      date: "20",
      month: "November",
      location: "125 Nguyen Chi Thanh",
      imgSource: "/pic2.jpg",
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur.",
      subTitle:
        "Lorem ipsum dolor sit amet consectetur. Tincidunt platea vulputate egestas eu.",
      club: "FZone",
      time: "14:00",
      date: "16",
      month: "May",
      location: "125 Nguyen Chi Thanh",
      imgSource: "/pic3.jpg",
    },
  ];

  return (
    <div className="flex flex-col mb-16 gap-y-12 md:gap-y-24 lg:gap-y-52">
      {eventsInfo.length > 0 ? (
        eventsInfo.map((elem, index) => {
          return index % 2 === 0 ? (
            <RotatedEvent
              key={index}
              title={elem.title}
              subTitle={elem.subTitle}
              club={elem.club}
              time={elem.time}
              date={elem.date}
              month={elem.month}
              location={elem.location}
              imgSource={elem.imgSource}
            />
          ) : (
            <Event
              inEventPage={true}
              key={index}
              title={elem.title}
              subTitle={elem.subTitle}
              club={elem.club}
              time={elem.time}
              date={elem.date}
              month={elem.month}
              location={elem.location}
              imgSource={elem.imgSource}
            />
          );
        })
      ) : (
        <div className="relative flex flex-col items-center font-semibold text-2xl opacity-70">
          <div className="w-[24rem]">
            <Lottie
              animationData={sick}
              loop={true}
            />
          </div>
          <p className="absolute bottom-10">Nothing is going on...</p>
        </div>
      )}
    </div>
  );
};

export default Events;
