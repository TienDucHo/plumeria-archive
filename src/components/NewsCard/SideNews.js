import Image from "next/image";
import { twMerge } from "tailwind-merge";

// local components
import NewsBasic from "./NewsBasic";

const SideNews = ({ className }) => {
  return (
    <div className={twMerge("grid gap-x-4 grid-cols-2", className)}>
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
    </div>
  );
};

export default SideNews;
