"use client";

import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { twMerge } from "tailwind-merge";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// components
import Event from "../Event/Event";

const EventCarousel = ({ items }) => {
  const [swiperRef, setSwiperRef] = useState();
  const [curIndex, setCurIndex] = useState(0);
  return (
    <Fade triggerOnce>
      <div>
        <Swiper
          onSwiper={(swiper) => setSwiperRef(swiper)}
          onSlideChange={(swiper) => {
            setCurIndex(swiper.realIndex);
          }}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={false}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
        >
          {items.map((elem, index) => {
            return (
              <SwiperSlide key={index}>
                <Event
                  title={elem.title}
                  subTitle={elem.subTitle}
                  club={elem.club}
                  time={elem.time}
                  date={elem.date}
                  month={elem.month}
                  location={elem.location}
                  imgSource={elem.imgSource}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="test-classes flex flex-col mx-4 sm:mx-8 md:grid md:grid-cols-2 md:gap-x-4">
          <div className="flex mt-1 justify-between gap-x-2 md:col-start-1 md:ml-0 lg:ml-4 lg:max-w-4xl">
            {items.map((_elem, index) => {
              return (
                <div
                  key={index}
                  className={twMerge(
                    "h-2 flex-grow bg-black opacity-90 cursor-pointer",
                    curIndex === index ? "bg-saffronYellow" : "bg-black"
                  )}
                  onClick={() => {
                    swiperRef.slideTo(index);
                  }}
                >
                  &nbsp;
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default EventCarousel;
