import Image from "next/image";
import Link from "next/link";

const OrgCard = ({ club, content, imgSource, char1, char2 }) => {
  return (
    <Link
      href="/pages/organizations"
      className="flex flex-col items-center w-full gap-y-2 md:gap-y-4 group"
    >
      <div className="relative w-full aspect-square">
        <Image
          className="object-cover"
          src={imgSource}
          alt="Organization Image"
          fill
        ></Image>
      </div>
      <h1 className="font-playfair text-lg md:text-xl font-semibold group-hover:text-aetroBlue transition ease-in-out">
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
    </Link>
  );
};

export default OrgCard;
