import Image from "next/image";
import SideNews from "@/components/NewsCard/SideNews";

// components
import NewsDetails from "@/components/NewsCard/NewsDetail";

const page = () => {
  let newsInfo = {
    newsImgSource: "/pic1.jpg",
    clubImgSource: "/pic3.jpg",
    club: "Harmonica PTNK Club",
    time: "10 minutes ago",
    title:
      "Lorem ipsum dolor sit amet consectetur. Nulla convallis et ut consectetur velit vel nunc.",
    paragraphs: [
      "Lorem ipsum dolor sit amet consectetur. Malesuada aliquet velit inhabitant fermentum porttitor. Enim scelerisque condimentum sodales tellus ultrices amet ullamcorper lectus mi. Augue a dui montes id nam. Imperdiet eget tellus consectetur malesuada tellus nulla. Imperdiet mauris eros nulla fermentum id auctor tempus. Turpis enim turpis phasellus egestas id mi. Nisi dictum lectus elit eget eu sed dui turpis. Facilisi platea neque molestie dignissim ridiculus tincidunt. Tellus placerat convallis tincidunt vulputate massa enim sollicitudin dui lorem. Donec sed faucibus odio pellentesque in egestas quis feugiat elit. Mollis non vel donec dignissim sagittis. Lorem commodo lectus nibh tellus aliquet eu. Nec aliquam a facilisi amet id non donec.",
      "Lorem ipsum dolor sit amet consectetur. Malesuada aliquet velit inhabitant fermentum porttitor. Enim scelerisque condimentum sodales tellus ultrices amet ullamcorper lectus mi. Augue a dui montes id nam. Imperdiet eget tellus consectetur malesuada tellus nulla. Imperdiet mauris eros nulla fermentum id auctor tempus. Turpis enim turpis phasellus egestas id mi. Nisi dictum lectus elit eget eu sed dui turpis. Facilisi platea neque molestie dignissim ridiculus tincidunt. Tellus placerat convallis tincidunt vulputate massa enim sollicitudin dui lorem. Donec sed faucibus odio pellentesque in egestas quis feugiat elit. Mollis non vel donec dignissim sagittis. Lorem commodo lectus nibh tellus aliquet eu. Nec aliquam a facilisi amet id non donec.",
    ],
    extraImg: "/pic4.jpg",
  };

  let relevantNews = [
    {
      club: "TPT",
      time: "1 week ago",
      title:
        "Lorem ipsum dolor sit amet consectetur. Nulla convallis et ut consectetur velit vel nunc.",
      imgSource: "/pic2.jpg",
    },
    {
      club: "NKX",
      time: "2 weeks ago",
      title:
        "Lorem ipsum dolor sit amet consectetur. Nulla convallis et ut consectetur velit vel nunc.",
      imgSource: "/pic3.jpg",
    },
  ];

  return (
    <div className="mx-4 sm:mx-8 lg:mx-12 mb-16">
      {/* The details of the news */}
      <NewsDetails
        newsImgSource={newsInfo.newsImgSource}
        clubImgSource={newsInfo.clubImgSource}
        club={newsInfo.club}
        time={newsInfo.time}
        title={newsInfo.title}
      />
      <div className="flex flex-col lg:flex-row gap-x-8 mt-8 md:mt-16 mb-8 gap-y-24 md:gap-y-32">
        <div className="flex flex-col gap-y-4 md:gap-y-8">
          <p className="text-base md:text-xl">{newsInfo.paragraphs[0]}</p>
          {newsInfo.extraImg != "" ? (
            <div className="relative w-full pt-80">
              <Image
                className="object-cover"
                src={newsInfo.extraImg}
                alt="News Image"
                fill
              />
            </div>
          ) : (
            <></>
          )}
          <p className="text-base md:text-xl">{newsInfo.paragraphs[1]}</p>
        </div>

        {/* Relevant news section  */}
        <div className="md:min-w-[28rem] lg:min-w-[36rem] flex flex-col gap-y-8">
          <p className="font-playfair text-xl md:text-2xl font-semibold">
            Relevant News
          </p>
          {relevantNews.map((elem, index) => {
            return (
              <SideNews
                key={index}
                relevant={true}
                club={elem.club}
                time={elem.time}
                title={elem.title}
                imgSource={elem.imgSource}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
