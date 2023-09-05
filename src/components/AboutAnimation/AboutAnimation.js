"use client";

import { Fade } from "react-awesome-reveal";
import Image from "next/image";

const AboutAnimation = ({ className }) => {
  return (
    <div className={className}>
      <div className="flex flex-col items-center gap-y-8 md:gap-y-16 mx-4 mb-16 sm:mx-8 lg:mx-12">
        <div className="grid items-center grid-rows-auto grid-cols-1 sm:grid-cols-2 w-full mb-16">
          <Fade
            delay={500}
            duration={2000}
            triggerOnce
          >
            <div className="relative w-full h-full pt-64">
              <Image
                className="object-cover row-start-1 col-start-1"
                src="/pic5.png"
                alt="About Image 1"
                fill
              />
            </div>
          </Fade>
          <Fade
            delay={1300}
            duration={2000}
            triggerOnce
          >
            <p className="text-sm mt-4 mb-24 text-center sm:my-0 sm:text-start sm:row-start-1 sm:col-start-2 sm:pl-4 md:text-base">
              Lorem ipsum dolor sit amet consectetur. Pulvinar posuere sagittis
              sed convallis nibh. Suspendisse pulvinar morbi pulvinar elementum
              adipiscing. Egestas elit aenean et eget sed bibendum vitae tempor.
              Porttitor curabitur ipsum donec natoque feugiat vitae integer.
            </p>
          </Fade>
          <Fade
            delay={1700}
            duration={2000}
            triggerOnce
          >
            <p className="text-sm mt-4 mb-24 text-center sm:my-0 sm:text-start row-start-4 sm:row-start-2 sm:col-start-1 sm:pr-4 md:text-base">
              Lorem ipsum dolor sit amet consectetur. Pulvinar posuere sagittis
              sed convallis nibh. Suspendisse pulvinar morbi pulvinar elementum
              adipiscing. Egestas elit aenean et eget sed bibendum vitae tempor.
              Porttitor curabitur ipsum donec natoque feugiat vitae integer.
            </p>
          </Fade>
          <Fade
            className="row-start-3 md:row-start-2 md:col-start-2"
            delay={900}
            duration={2000}
            triggerOnce
          >
            <div className="relative w-full h-full pt-64">
              <Image
                className="object-cover"
                src="/pic6.png"
                alt="About Image 1"
                fill
              />
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default AboutAnimation;
