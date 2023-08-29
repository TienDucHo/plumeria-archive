import Image from "next/image";

const Organization = ({ club, imgSource }) => {
  return (
    <div className="relative w-full h-full pt-60 md:pt-0">
      <div className="md:grid md:grid-cols-2 md:grid-rows-4 md:gap-x-8 md:min-h-[260px] lg:min-h-[310px]">
        {/* filter */}
        <div className="absolute w-full h-full opacity-70 bg-black md:hidden"></div>
        <div className="md:relative w-full h-full md:col-start-1 md:row-span-4 lg:max-w-4xl">
          <Image
            className="object-cover z-[-1]"
            src={imgSource}
            fill
            alt="Event image"
          ></Image>
          <div className="hidden absolute top-0 right-[-2rem] flex-col items-end w-full h-full md:flex">
            {["w-[16%]", "w-[8%]", "w-[16%]", "w-[7%]", "w-[24%]"].map(
              (elem, index) => (
                <div
                  className={`bg-white h-1/5 ${elem}`}
                  key={index}
                ></div>
              )
            )}
          </div>
        </div>
        <div className="flex items-end py-2 md:p-0 md:mb-4 md:w-full md:col-start-2 md:row-start-2">
          <h1 className="z-10 text-aetroBlue font-semibold w-full text-center md:text-celestialBlue md:text-left md:bg-white text-lg md:text-2xl lg:text-3xl">
            {club}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Organization;
