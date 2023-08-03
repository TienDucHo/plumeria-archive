"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Event from "./Event";
import { useState } from "react";

const getConfigurableProps = () => ({
  showArrows: ("showArrows", false),
  showStatus: ("showStatus", false),
  showIndicators: ("showIndicators", false),
  infiniteLoop: ("infiniteLoop", true),
  autoPlay: ("autoPlay", true),
  stopOnHover: ("stopOnHover", true),
  swipeable: ("swipeable", true),
  emulateTouch: ("emulateTouch", true),
  autoFocus: ("autoFocus", false),
  showThumbs: ("showThumbs", false),
  transitionTime: ("transitionTime", 1000),
});

export default function EventCarousel({ items }) {
  let [currentIndex, setCurrentIndex] = useState(0);
  let latestEvents = items.slice(items.length - 3, items.length + 1);

  return (
    <div>
      <Carousel
        {...getConfigurableProps()}
        onChange={(currentIndex) => {
          setCurrentIndex(currentIndex);
        }}
        selectedItem={currentIndex}
      >
        {latestEvents.map((elem, index) => {
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
      </Carousel>

      <div id="indicator-container">
        <div className=" grid grid-cols-3 gap-x-6">
          {latestEvents.map((_elem, index) => {
            return (
              <div
                key={index}
                className={
                  currentIndex === index
                    ? "bg-saffronYellow carousel-indicator"
                    : "bg-black carousel-indicator"
                }
                onClick={() => setCurrentIndex(index)}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
