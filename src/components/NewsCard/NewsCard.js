import Image from "next/image";

const NewsCard = () => {
  return (
    <div className="relative flex flex-col w-[24rem] text-white px-2 pt-32 pb-2">
      {/* filter */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

      <Image
        className="object-cover z-[-1]"
        src="/pic3.jpg"
        alt="News Image"
        fill
      ></Image>

      <div className="z-10">
        <div className="flex gap-x-12">
          <p className="text-aetroBlue font-semibold">Harmonica</p>
          <p className="opacity-60 text-sm">10 minutes ago</p>
        </div>
        <h1 className=" text-2xl font-playfair">
          Lorem ipsum dolor sit amet consectetur.
        </h1>
        <p className="opacity-70 text-sm">
          Lorem ipsum dolor sit amet consectetur. Ut viverra faucibus lobortis
          turpis nullam dignissim in arcu magna.
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
