"use client";

import Image from "next/image";
import { Fade } from "react-awesome-reveal";

// components
import AboutAnimation from "@/components/AboutAnimation/AboutAnimation";

const AboutUs = () => {
  return (
    <div>
      <div className="md:hidden flex flex-col items-center gap-y-8 md:gap-y-16 mx-4 mb-16 sm:mx-8 lg:mx-12">
        <Fade
          delay={500}
          triggerOnce
        >
          <div className="grid items-center grid-rows-auto grid-cols-1 md:grid-cols-2 w-full">
            <div className="relative w-full h-full pt-64">
              <Image
                className="object-cover row-start-1 col-start-1"
                src="/pic5.svg"
                alt="About Image 1"
                fill
              />
            </div>
            <p className="text-sm mt-4 mb-12 md:mb-24 text-center md:my-0 md:text-start md:row-start-1 md:col-start-2 md:pl-4 md:text-base">
              Lorem ipsum dolor sit amet consectetur. Pulvinar posuere sagittis
              sed convallis nibh. Suspendisse pulvinar morbi pulvinar elementum
              adipiscing. Egestas elit aenean et eget sed bibendum vitae tempor.
              Porttitor curabitur ipsum donec natoque feugiat vitae integer.
            </p>
            <p className="text-sm mt-4 mb-12 md:mb-24 text-center md:my-0 md:text-start row-start-4 md:row-start-2 md:col-start-1 md:pr-4 md:text-base">
              Lorem ipsum dolor sit amet consectetur. Pulvinar posuere sagittis
              sed convallis nibh. Suspendisse pulvinar morbi pulvinar elementum
              adipiscing. Egestas elit aenean et eget sed bibendum vitae tempor.
              Porttitor curabitur ipsum donec natoque feugiat vitae integer.
            </p>
            <div className="relative w-full h-full pt-64 row-start-3 md:row-start-2 md:col-start-2">
              <Image
                className="object-cover"
                src="/pic6.svg"
                alt="About Image 2"
                fill
              />
            </div>
          </div>
        </Fade>
      </div>
      <AboutAnimation className="hidden md:block" />
      <Fade
        triggerOnce
        duration={2000}
        cascade
        className="w-full flex flex-col items-center mb-8 md:mb-12"
      >
        <p className="sm:text-xl opacity-70">Now...</p>
        <p className="sm:text-xl opacity-70">How about...</p>
        <button
          id="lightened-button"
          className="btn btn-primary text-white capitalize sm:text-lg md:text-xl flex px-[20%] rounded-none"
        >
          Buy Us A Coffee?
        </button>
      </Fade>
    </div>
  );
};

export default AboutUs;
