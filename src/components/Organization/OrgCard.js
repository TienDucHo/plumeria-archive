import Image from "next/image";

const OrgCard = () => {
  return (
    <div className="flex flex-col items-center w-80 gap-y-2">
      <div className="relative w-full h-80 pt-32">
        <Image
          src="/pic1.jpg"
          alt="Organization Image"
          fill
        ></Image>
      </div>
      <h1 className="font-playfair text-2xl font-semibold">To Phat Thanh</h1>
      <div className="flex gap-x-8">
        <p className="bg-celestialBlue px-2 text-white font-semibold">Media</p>
        <p className="bg-celestialBlue px-2 text-white font-semibold">Events</p>
      </div>
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur. Condimentum phasellus eleifend
        diam viverra ornare metus id eleifend. Eget facilisi fusce{" "}
      </p>
    </div>
  );
};

export default OrgCard;
