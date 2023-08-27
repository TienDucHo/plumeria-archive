"use client";

import Carousel from "react-multi-carousel";
import React from "react";
import {
  getOriginalIndexLookupTableByClones,
  getOriginalCounterPart,
} from "react-multi-carousel/lib/utils/clones";

// components
import Organization from "../Organization/Organization";

// utils
import GradientLink from "@/utils/GradientLink/GradientLink";

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
const OrgCarousel = ({ items }) => {
  let orgRef = null;
  return (
    <div className="relative">
      <Carousel
        responsive={responsive}
        ref={(elem) => {
          orgRef = elem;
        }}
        infinite
        autoPlay={true}
        autoPlaySpeed={4600}
        arrows={false}
        itemClass="fade-in"
        additionalTransfrom={0}
        transitionDuration={1}
        customTransition="transform 1ms"
        beforeChange={(nextSlide, { currentSlide }) => {
          let children = React.Children.toArray(orgRef.props.children);
          let cloneTable = getOriginalIndexLookupTableByClones(
            orgRef.state.slidesToShow,
            React.Children.toArray(orgRef.props.children)
          );
          let currentIndex = cloneTable[currentSlide];
          let clonedChild = React.cloneElement(children[currentIndex], {
            ...children[currentIndex].props,
            className: "fade-out",
          });
          children[currentIndex] = clonedChild;
        }}
      >
        {items.map((elem, index) => {
          return (
            <Organization
              key={index}
              club={elem.club}
              imgSource={elem.imgSource}
            />
          );
        })}
      </Carousel>
      <div className="absolute top-0 left-0 w-full grid grid-cols-2 grid-rows-4 gap-x-4 md:min-h-[260px] lg:min-h-[310px]">
        <div className="row-start-1 row-span-4">&nbsp;</div>
        <h1 className="col-start-2 row-start-1 font-playfair text-4xl font-semibold">
          Choose your Organization
        </h1>
        <p className="col-start-2 row-start-3 text-xl opacity-80">
          With over 20 organizations, there are endless possibilities for you to
          find the best environment to grow and become yourself.
        </p>
        <div className="col-start-2 row-start-4 flex gap-x-16 items-end">
          <button
            id="choose-org-button"
            className="btn btn-primary rounded-none border-none capitalize text-xl py-2 px-12 text-white"
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
