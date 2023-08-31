// components
import SpecialNewsCard from "@/components/NewsCard/SpecialNewsCard";
import SideNews from "@/components/NewsCard/SideNews";
import NewsCard from "@/components/NewsCard/NewsCard";

const News = () => {
  const newsInfo = [
    {
      title: "Lorem ipsum dolor sit amet consectetur.",
      subTitle:
        "Lorem ipsum dolor sit amet consectetur. Tincidunt platea vulputate egestas eu.",
      club: "Harmonica PTNK Club",
      time: "10 minutes ago",
      imgSource: "/pic1.jpg",
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur.",
      subTitle:
        "Lorem ipsum dolor sit amet consectetur. Tincidunt platea vulputate egestas eu.",
      club: "MIB",
      time: "1 hour ago",
      imgSource: "/pic2.jpg",
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur.",
      subTitle:
        "Lorem ipsum dolor sit amet consectetur. Tincidunt platea vulputate egestas eu.",
      club: "Doi Van Nghe",
      time: "3 days ago",
      imgSource: "/pic3.jpg",
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur.",
      subTitle:
        "Lorem ipsum dolor sit amet consectetur. Tincidunt platea vulputate egestas eu.",
      club: "Define Magic Club",
      time: "1 hour ago",
      imgSource: "/pic2.jpg",
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur.",
      subTitle:
        "Lorem ipsum dolor sit amet consectetur. Tincidunt platea vulputate egestas eu.",
      club: "PTNK Art Club",
      time: "3 days ago",
      imgSource: "/pic3.jpg",
    },
  ];

  return (
    <div className="flex flex-col mb-16 mx-4 sm:mx-8 lg:mx-12">
      {/* Special News Display Desktop */}
      <div className="hidden md:grid gap-y-4 md:gap-x-4 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:gap-x-4">
        <SpecialNewsCard
          className="hidden md:flex row-span-2 lg:col-span-2"
          club={newsInfo[0].club}
          time={newsInfo[0].time}
          title={newsInfo[0].title}
          subTitle={newsInfo[0].subTitle}
        />

        {/* Desktop Side News */}
        {newsInfo.slice(1, 3).map((elem, index) => {
          return (
            <SideNews
              key={index}
              className={`hidden lg:grid col-start-2 ${
                index === 1
                  ? "lg:col-start-3 lg:col-span-2"
                  : "row-start-2 lg:col-start-3 lg:col-span-2"
              }`}
              club={elem.club}
              time={elem.time}
              title={elem.title}
              subTitle={elem.subTitle}
            />
          );
        })}

        {/* Medium Desktop Side News */}
        {newsInfo.slice(1, 3).map((elem, index) => {
          return (
            <NewsCard
              key={index}
              className="grid lg:hidden"
              club={elem.club}
              time={elem.time}
              title={elem.title}
              subTitle={elem.subTitle}
              imgSource={elem.imgSource}
            />
          );
        })}
      </div>

      {/* The Remaining News */}
      <div className="hidden grid-cols-2 md:mt-16 md:gap-4 md:grid lg:mt-28 lg:gap-8">
        {newsInfo.slice(3, newsInfo.length).map((elem, index) => {
          return (
            <NewsCard
              key={index}
              club={elem.club}
              wobble={true}
              time={elem.time}
              title={elem.title}
              subTitle={elem.subTitle}
              imgSource={elem.imgSource}
            />
          );
        })}
      </div>

      {/* Mobile News */}
      <div className="container2 grid gap-y-4 grid-cols-1 md:hidden">
        {newsInfo.map((elem, index) => {
          return (
            <NewsCard
              wobble={true}
              key={index}
              club={elem.club}
              time={elem.time}
              title={elem.title}
              subTitle={elem.subTitle}
              imgSource={elem.imgSource}
            />
          );
        })}
      </div>
    </div>
  );
};

export default News;
