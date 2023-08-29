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
    <div className="relative mx-4 sm:mx-8 lg:mx-12">
      <div className="md:absolute md:top-0 md:left-0 md:w-full md:grid md:grid-cols-2 md:grid-rows-4 md:gap-x-8 md:min-h-[260px] lg:min-h-[310px]">
        <div className="md:row-start-1 md:row-span-4">&nbsp;</div>
        <h1 className="font-playfair font-semibold text-3xl mb-4 md:m-0 md:col-start-2 md:row-start-1 lg:text-4xl">
          Choose your Organization
        </h1>
        <p className="flex items-center text-base opacity-80 mb-4 md:m-0 md:row-span-2 md:col-start-2 md:row-start-2 md:mt-12 lg:text-lg">
          With over 20 organizations, there are endless possibilities for you to
          find the best environment to grow and become yourself.
        </p>
        <div className="z-10 md:col-start-2 md:row-start-4 md:gap-x-16 md:items-end md:flex">
          <button
            id="choose-org-button"
            className="hidden btn btn-primary rounded-none border-none capitalize text-white md:block md:px-4 md:text-base lg:py-2 lg:px-12 lg:text-xl"
          >
            Find your Organization
          </button>
          <GradientLink className="absolute top-[7%] right-0 text-celestialBlue md:static">
            View all
          </GradientLink>
        </div>
      </div>
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
      <button
        id="choose-org-button-1"
        className="btn btn-primary w-full rounded-none border-none capitalize text-white md:hidden md:px-4 text-base lg:py-2 lg:px-12 lg:text-xl"
      >
        Find your Organization
      </button>
    </div>
  );
};

export default OrgCarousel;
