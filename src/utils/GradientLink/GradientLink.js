"use client";

import { MdArrowForwardIos } from "react-icons/md";
import { useState } from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

// utils
import GradientIcon from "../GradientIcon/GradientIcon";

const GradientLink = ({ children, className }) => {
  const [hoverLink, setHoverLink] = useState(false);
  return (
    <Link
      onMouseEnter={() => setHoverLink(true)}
      onMouseLeave={() => setHoverLink(false)}
      className={twMerge("shiny-link flex items-center", className)}
      href="/pages/events"
    >
      {children}
      {hoverLink ? (
        <GradientIcon
          icon={MdArrowForwardIos}
          size={12}
        />
      ) : (
        <MdArrowForwardIos size={12} />
      )}
    </Link>
  );
};

export default GradientLink;
