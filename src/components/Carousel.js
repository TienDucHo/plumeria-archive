"use client";
import { useState } from "react";
import Event from "./Event";

export default function Carousel({ items }) {
  let indicatorNum = items.slice(items.length - 3, items.length + 1);

  return (
    <div>
      <div>
        {items.map((elem, index) => {
          return (
            <Event
              key={index}
              title={elem.title}
              subTitle={elem.subTitle}
              date={elem.date}
              month={elem.month}
              clubName={elem.clubName}
              location={elem.location}
              time={elem.time}
              sourcePicture={elem.sourcePicture}
            ></Event>
          );
        })}
      </div>
      <div className="flex gap-x-1">
        {indicatorNum.map((elem, index) => {
          return (
            <div
              key={index}
              className="carousel-indicator"
            ></div>
          );
        })}
      </div>
    </div>
  );
}
