import Image from "next/image";
import SideNews from "@/components/NewsCard/SideNews";

// components
import NewsDetails from "@/components/NewsCard/NewsDetail";

const page = () => {
  return (
    <div className="mx-4 sm:mx-8 lg:mx-12 mb-16">
      <NewsDetails />
      <div className="flex gap-x-8 mt-16 mb-8">
        <div className="flex flex-col gap-y-8">
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur. Malesuada aliquet velit in
            habitant fermentum porttitor. Enim scelerisque condimentum sodales
            tellus ultrices amet ullamcorper lectus mi. Augue a dui montes id
            nam. Imperdiet eget tellus consectetur malesuada tellus nulla.
            Imperdiet mauris eros nulla fermentum id auctor tempus. Turpis enim
            turpis phasellus egestas id mi. Nisi dictum lectus elit eget eu sed
            dui turpis. Facilisi platea neque molestie dignissim ridiculus
            tincidunt. Tellus placerat convallis tincidunt vulputate massa enim
            sollicitudin dui lorem. Donec sed faucibus odio pellentesque in
            egestas quis feugiat elit. Mollis non vel donec dignissim sagittis.
            Lorem commodo lectus nibh tellus aliquet eu. Nec aliquam a facilisi
            amet id non donec.
          </p>
          <div className="relative w-full pt-80">
            <Image
              className="object-cover"
              src="/pic4.jpg"
              alt="News Image"
              fill
            />
          </div>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur. Malesuada aliquet velit in
            habitant fermentum porttitor. Enim scelerisque condimentum sodales
            tellus ultrices amet ullamcorper lectus mi. Augue a dui montes id
            nam. Imperdiet eget tellus consectetur malesuada tellus nulla.
            Imperdiet mauris eros nulla fermentum id auctor tempus. Turpis enim
            turpis phasellus egestas id mi. Nisi dictum lectus elit eget eu sed
            dui turpis. Facilisi platea neque molestie dignissim ridiculus
            tincidunt. Tellus placerat convallis tincidunt vulputate massa enim
            sollicitudin dui lorem. Donec sed faucibus odio pellentesque in
            egestas quis feugiat elit. Mollis non vel donec dignissim sagittis.
            Lorem commodo lectus nibh tellus aliquet eu. Nec aliquam a facilisi
            amet id non donec.
          </p>
        </div>
        <div className="md:min-w-[36rem] flex flex-col gap-y-8">
          <SideNews
            relevant={true}
            club="TPT"
            time="1 week ago"
            title="Lorem ipsum dolor sit amet consectetur. Nulla convallis et ut consectetur velit vel nunc."
            imgSource="/pic2.jpg"
          />
          <SideNews
            relevant={true}
            club="TPT"
            time="2 weeks ago"
            title="Lorem ipsum dolor sit amet consectetur. Nulla convallis et ut consectetur velit vel nunc."
            imgSource="/pic3.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
