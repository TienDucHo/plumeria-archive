"use client";

import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";

// uitls
import GradientIcon from "@/utils/GradientIcon/GradientIcon";

const Hero = () => {
  return (
    <div>
      <div
        id="hero-image-container"
        className="relative"
      >
        <Image
          id="hero-image"
          className="object-cover z-[-1]"
          src="/plumeria_background.webp"
          fill
          alt="Plumeria Archive Hero Section Image"
        ></Image>
        <div
          id="hero-section-text"
          className="py-16 text-center flex flex-col gap-y-8  sm:py-24 md:py-32"
        >
          <span className="text-white font-playfair font-bold italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Plumeria <span className="text-saffronYellow">Archive</span>
          </span>

          <span className="text-white opacity-80 text-lg sm:text-xl md:text-2xl lg:text-4xl">
            Dive into the endless archive of possibilities
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center py-4 sm:py-16 md:py-26 lg:py-28">
        <GradientIcon
          id="scroll-button"
          className="cursor-pointer opacity-80 invisible md:visible md:text-2xl lg:text-5xl"
          icon={MdKeyboardArrowDown}
          onClick={() => {
            document
              .getElementById("events-section")
              .scrollIntoView({ behavior: "smooth" });
          }}
        />
      </div>
    </div>
  );
};

export default Hero;
