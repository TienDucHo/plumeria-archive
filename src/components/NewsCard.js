"use client";

import Image from "next/image";
import moment from "moment";
import Link from "next/link";
import { Fade, AttentionSeeker } from "react-awesome-reveal";

export default function NewsCard({
  writer,
  title,
  subTitle,
  imageSource,
  createdAt,
  newsLink,
}) {
  const timeAgo = moment(createdAt).fromNow();

  return (
    <Fade
      direction="up"
      triggerOnce
    >
      <div
        id="news-card"
        className="relative text-white"
      >
        <Link href={newsLink}>
          <Image
            src={imageSource}
            alt="A club image"
            fill
          ></Image>
          <div className="masked-filter"></div>
          <div className="absolute bottom-6 left-4">
            <div className="flex gap-x-4">
              <p className="text-xl self-center font-bold text-aetroBlue">
                {writer}
              </p>
              <p className="self-center opacity-60 text-sm">{timeAgo}</p>
            </div>
            <p className="text-2xl mb-2 font-semibold font-playfair">{title}</p>
            <p className="opacity-60 text-sm">{subTitle}</p>
          </div>
        </Link>
      </div>
    </Fade>
  );
}
