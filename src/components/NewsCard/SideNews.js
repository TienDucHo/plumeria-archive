"use client";

import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

// local components
import NewsBasic from "./NewsBasic";

const SideNews = ({ className }) => {
  return (
    <Fade
      className={className}
      triggerOnce
    >
      <Link
        href="/pages/news"
        className="grid gap-x-4 grid-cols-2"
      >
        <div className="relative">
          <Image
            className="object-cover"
            src="/pic1.jpg"
            alt="Side News Image"
            fill
          />
        </div>
        <NewsBasic
          className="col-start-2"
          club="Harmonica"
          time="20 mintues ago"
          title="Lorem ipsum dolor sit amet consectetur."
          subTitle="Lorem ipsum dolor sit amet consectetur. Pretium laoreet est vel aliquet mauris senectus sed. Lorem ipsum dolor sit amet consectetur."
        />
      </Link>
    </Fade>
  );
};

export default SideNews;
