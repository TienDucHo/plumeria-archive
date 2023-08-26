import Image from "next/image";

// utils
import GradientLink from "@/utils/GradientLink/GradientLink";

const Organization = ({ club, imgSource }) => {
  return (
    <div className="relative">
      <div className="grid grid-cols-2 grid-rows-4 mx-4 gap-x-4 sm:mx-8 lg:mx-12 md:min-h-[260px] lg:min-h-[310px]">
        <div className="relative w-full h-full col-start-1 lg:max-w-4xl row-span-4">
          <Image
            className="object-cover z-[-1]"
            src={imgSource}
            fill
            alt="Event image"
          ></Image>
          <div className=" flex flex-col items-end w-full h-full">
            {["w-[16%]", "w-[8%]", "w-[16%]", "w-[0]", "w-[24%]"].map(
              (elem, index) => (
                <div
                  className={`bg-white h-1/5 ${elem}`}
                  key={index}
                ></div>
              )
            )}
          </div>
        </div>
        <div className="col-start-2 row-start-2 flex items-end mb-4">
          <h1 className="gradient-text text-3xl font-semibold">{club}</h1>
        </div>
      </div>
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

export default Organization;
