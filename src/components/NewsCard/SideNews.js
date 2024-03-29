"use client";

import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

// local components
import NewsBasic from "./NewsBasic";

const SideNews = ({
  className,
  club,
  time,
  title,
  subTitle,
  relevant,
  imgSource,
}) => {
  return (
    <Fade
      className={className}
      triggerOnce
    >
      <Link
        href="/pages/news"
        className="grid gap-x-4 grid-cols-2 group"
      >
        <div className="relative">
          <Image
            className="object-cover"
            src={imgSource}
            alt="Side News Image"
            fill
          />
        </div>
        <NewsBasic
          relevant={relevant}
          className="col-start-2"
          side={true}
          club={club}
          time={time}
          title={title}
          subTitle={subTitle}
        />
      </Link>
    </Fade>
  );
};

export default SideNews;
