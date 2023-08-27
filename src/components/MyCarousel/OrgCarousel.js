"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// components
import Organization from "../Organization/Organization";

// utils
import GradientLink from "@/utils/GradientLink/GradientLink";

const OrgCarousel = ({ items }) => {
  return (
    <div className="relative">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        loop={true}
        modules={[EffectFade, Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
      >
        {items.map((elem, index) => {
          return (
            <SwiperSlide key={index}>
              <Organization
                club={elem.club}
                imgSource={elem.imgSource}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="absolute top-0 left-0 w-full grid grid-cols-2 grid-rows-4 gap-x-8 md:min-h-[260px] lg:min-h-[310px]">
        <div className="row-start-1 row-span-4">&nbsp;</div>
        <h1 className="col-start-2 row-start-1 font-playfair font-semibold text-3xl lg:text-4xl">
          Choose your Organization
        </h1>
        <p className="col-start-2 row-start-2 flex items-center mt-12 row-span-2 text-base opacity-80 lg:text-xl">
          With over 20 organizations, there are endless possibilities for you to
          find the best environment to grow and become yourself.
        </p>
        <div className="col-start-2 row-start-4 flex gap-x-16 items-end z-10">
          <button
            id="choose-org-button"
            className="btn btn-primary rounded-none border-none capitalize text-white md:px-4 md:text-base lg:py-2 lg:px-12 lg:text-xl"
          >
            Find your Organization
          </button>
          <GradientLink className="text-celestialBlue">View all</GradientLink>
        </div>
      </div>
    </div>
  );
};

export default OrgCarousel;
