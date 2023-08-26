import Image from "next/image";

const Organization = ({ club, imgSource }) => {
  return (
    <div className=" grid grid-cols-2 grid-rows-4 mx-4 gap-x-4 sm:mx-8 lg:mx-12 md:min-h-[260px] lg:min-h-[310px]">
      <div className="relative w-full h-full col-start-1 lg:max-w-4xl row-span-4">
        <Image
          className="object-cover z-[-1]"
          src={imgSource}
          fill
          alt="Event image"
        ></Image>
        <div className="absolute top-0 right-0 flex flex-col items-end w-full h-full">
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
      <div className="col-start-2 row-start-2 flex items-center">
        <h1 className="gradient-text text-3xl font-semibold">{club}</h1>
      </div>
    </div>
  );
};

export default Organization;
