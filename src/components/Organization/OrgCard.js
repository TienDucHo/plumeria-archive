import Image from "next/image";
import Link from "next/link";

const OrgCard = ({ club, content, imgSource, char1, char2 }) => {
  return (
    <Link
      href="/pages/organizations"
      className="grid grid-cols-2  gap-x-4 place-items-center sm:flex flex-col items-center w-full gap-y-2 md:gap-y-4 group"
    >
      <div className="relative w-full aspect-square row-span-2">
        <Image
          className="object-cover"
          src={imgSource}
          alt="Organization Image"
          fill
        ></Image>
      </div>
      <div className="row-span-2 h-full sm:h-auto relative flex flex-col w-full self-start sm:items-center gap-y-2 transition ease-in-out">
        <h1 className="font-playfair text-lg md:text-xl font-semibold group-hover:text-aetroBlue">
          {club}
        </h1>
        <p className="sm:hidden text-sm md:text-base">{content}</p>
        <div className="absolute bottom-0 left-0 flex gap-x-8 items-center sm:static">
          <p className="bg-celestialBlue px-2 h-6 text-white flex items-center font-semibold text-sm md:text-base">
            {char1}
          </p>
          <p className="bg-celestialBlue px-2 h-6 text-white font-semibold flex items-center">
            {char2}
          </p>
        </div>
        <p className="hidden sm:flex text-center text-sm md:text-base">
          {content}
        </p>
      </div>
    </Link>
  );
};

export default OrgCard;
