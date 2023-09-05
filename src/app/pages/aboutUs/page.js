import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center gap-y-8 md:gap-y-16 mx-4 mb-16">
      <h1 className="font-playfair text-celestialBlue text-3xl sm:text-4xl md:text-5xl">
        About Us
      </h1>
      <div className="grid items-center grid-rows-auto grid-cols-1 sm:grid-cols-2 w-[80%] lg:w-[60%]">
        <div className="relative  aspect-square">
          <Image
            className="object-cover row-start-1 col-start-1 "
            src="/pic5.png"
            alt="About Image 1"
            fill
          />
        </div>
        <p className="text-sm mt-4 mb-24 text-center sm:my-0 sm:text-start sm:row-start-1 sm:col-start-2 sm:pl-4 md:text-base">
          Lorem ipsum dolor sit amet consectetur. Pulvinar posuere sagittis sed
          convallis nibh. Suspendisse pulvinar morbi pulvinar elementum
          adipiscing. Egestas elit aenean et eget sed bibendum vitae tempor.
          Porttitor curabitur ipsum donec natoque feugiat vitae integer.
        </p>

        <p className="text-sm mt-4 mb-24 text-center sm:my-0 sm:text-start row-start-4 sm:row-start-2 sm:col-start-1 sm:pr-4 md:text-base">
          Lorem ipsum dolor sit amet consectetur. Pulvinar posuere sagittis sed
          convallis nibh. Suspendisse pulvinar morbi pulvinar elementum
          adipiscing. Egestas elit aenean et eget sed bibendum vitae tempor.
          Porttitor curabitur ipsum donec natoque feugiat vitae integer.
        </p>
        <div className="relative aspect-square">
          <Image
            className="object-cover row-start-3 md:row-start-2 md:col-start-2"
            src="/pic6.png"
            alt="About Image 1"
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
