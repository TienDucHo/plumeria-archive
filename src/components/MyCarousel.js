"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";

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

export default function MyCarousel({ items, indicator, fade = false }) {
  let [currentIndex, setCurrentIndex] = useState(0);
  let numItems = [0, 0, 0];

  return (
    <Fade triggerOnce>
      <div>
        <Carousel
          {...getConfigurableProps()}
          animationHandler={fade === true ? "fade" : ""}
          onChange={(currentIndex) => {
            setCurrentIndex(currentIndex);
          }}
          selectedItem={currentIndex}
        >
          {items}
        </Carousel>

        {indicator === true ? (
          <div id="indicator-container">
            <div className=" grid grid-cols-3 gap-x-6">
              {numItems.map((_elem, index) => {
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
        ) : null}
      </div>
    </Fade>
  );
}
