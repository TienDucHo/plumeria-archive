import Image from "next/image";
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";
import { twMerge } from "tailwind-merge";

// local components
import NewsBasic from "./NewsBasic";

const SpecialNewsCard = ({ className }) => {
  return (
    <div
      className={twMerge(
        "relative pt-32 pb-8 mr-[2rem] min-w-[20rem] flex flex-col justify-end",
        className
      )}
    >
      <div className="absolute w-full h-full top-0 left-[2rem]">
        <Image
          className="object-cover z-[-1]"
          src="/pic1.jpg"
          fill
          alt="Special News Image"
        />
      </div>
      <div className="text-white bg-black max-w-[24rem] px-4 py-4">
        <NewsBasic
          club="Harmonica"
          time="20 mintues ago"
          title="Lorem ipsum dolor sit amet consectetur."
          subTitle="Lorem ipsum dolor sit amet consectetur. Pretium laoreet est vel aliquet mauris senectus sed. Lorem ipsum dolor sit amet consectetur."
        />
        <div className="flex justify-between items-end pt-4">
          <p className="opacity-70">January 05, 2023</p>
          <Link
            className="flex items-center z-10 text-whote"
            href="/"
          >
            Read more <MdArrowForwardIos size={12} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SpecialNewsCard;
