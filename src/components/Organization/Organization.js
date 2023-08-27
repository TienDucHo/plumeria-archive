import Image from "next/image";

const Organization = ({ club, imgSource }) => {
  return (
    <div className="relative">
      <div className="grid grid-cols-2 grid-rows-4 mx-4 gap-x-8 sm:mx-8 lg:mx-12 md:min-h-[260px] lg:min-h-[310px]">
        <div className="relative w-full h-full col-start-1 lg:max-w-4xl row-span-4">
          <Image
            className="object-cover z-[-1]"
            src={imgSource}
            fill
            alt="Event image"
          ></Image>
          <div className="absolute top-0 right-[-2rem] flex flex-col items-end w-full h-full">
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
        <div className="col-start-2 row-start-2 flex items-end mb-4 w-full">
          <h1 className="text-celestialBlue font-semibold bg-white w-full md:text-2xl lg:text-3xl">
            {club}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Organization;
