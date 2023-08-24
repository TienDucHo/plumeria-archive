"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { getOriginalIndexLookupTableByClones } from "react-multi-carousel/lib/utils/clones";

// components
import Event from "../Event/Event";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const MyCarousel = ({ items, isEvent }) => {
  let carouselRef = null;
  const [slide, setSlide] = useState(0);

  return (
    <div>
      <Carousel
        ref={(el) => (carouselRef = el)}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4600}
        arrows={false}
        beforeChange={(nextSlide) => {
          if (carouselRef) {
            let cloneTable = getOriginalIndexLookupTableByClones(
              carouselRef.state.slidesToShow,
              React.Children.toArray(carouselRef.props.children)
            );
            setSlide(cloneTable[nextSlide]);
          }
        }}
      >
        {items.map((elem, index) => {
          return (
            <Event
              key={index}
              club={elem.club}
              time={elem.time}
              date={elem.date}
              month={elem.month}
              location={elem.location}
              imgSource={elem.imgSource}
            />
          );
        })}
      </Carousel>

      <div className="grid grid-cols-2 md:gap-x-4">
        <div className="col-start-1 flex gap-x-2 mt-1 ml-12 justify-center">
          {items.map((_elem, index) => {
            return (
              <div
                key={index}
                className={
                  slide === index
                    ? twMerge(
                        "h-2 bg-saffronYellow opacity-90 cursor-pointer",
                        `w-1/${items.length}`
                      )
                    : twMerge(
                        "h-2 bg-black opacity-90 cursor-pointer",
                        `w-1/${items.length}`
                      )
                }
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyCarousel;
