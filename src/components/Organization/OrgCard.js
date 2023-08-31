import Image from "next/image";

const OrgCard = ({ club, content, imgSource, char1, char2 }) => {
  return (
    <div className="flex flex-col items-center w-full gap-y-2">
      <div className="relative w-full pt-[60%] lg:pt-[80%]">
        <Image
          className="object-cover"
          src={imgSource}
          alt="Organization Image"
          fill
        ></Image>
      </div>
      <h1 className="font-playfair text-xl md:text-2xl font-semibold">
        {club}
      </h1>
      <div className="flex gap-x-8 items-center">
        <p className="bg-celestialBlue px-2 h-6 text-white flex items-center font-semibold text-sm md:text-base">
          {char1}
        </p>
        <p className="bg-celestialBlue px-2 h-6 text-white font-semibold flex items-center">
          {char2}
        </p>
      </div>
      <p className="text-center text-sm md:text-base">{content}</p>
    </div>
  );
};

export default OrgCard;
