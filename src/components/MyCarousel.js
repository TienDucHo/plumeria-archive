"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { useRouter } from "next/navigation";

const getConfigurableProps = () => ({
  showArrows: ("showArrows", false),
  showStatus: ("showStatus", false),
  showIndicators: ("showIndicators", false),
  infiniteLoop: ("infiniteLoop", true),
  autoPlay: ("autoPlay", true),
  emulateTouch: ("emulateTouch", true),
  autoFocus: ("autoFocus", false),
  showThumbs: ("showThumbs", false),
  interval: ("interval", 4000),
  transitionTime: ("transitionTime", 1000),
});

export default function MyCarousel({
  items,
  indicator,
  fade = false,
  stopOnHover = false,
}) {
  let [currentIndex, setCurrentIndex] = useState(0);
  let numItems = [0, 0, 0];
  const router = useRouter();

  return (
    <Fade triggerOnce>
      <div>
        <Carousel
          {...getConfigurableProps()}
          animationHandler={fade === true ? "fade" : ""}
          swipeable={fade === true ? false : true}
          stopOnHover={stopOnHover === true ? true : false}
          onChange={(currentIndex) => {
            setCurrentIndex(currentIndex);
          }}
          selectedItem={currentIndex}
          onSwipeStart={(event) => {
            console.log(event);
            if (event.target.id === "event-register-button") {
              router.push("/pages/events");
            }
            if (event.target.id === "text-gradient") {
              router.push("/pages/events");
            }
          }}
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
