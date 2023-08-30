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
      <div className="grid gap-y-4 md:gap-x-4 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:gap-x-4">
        <SpecialNewsCard className="hidden md:flex row-span-2 lg:col-span-2" />
        <SideNews className="hidden lg:grid col-start-2 lg:col-start-3 lg:col-span-2" />
        <SideNews className="hidden lg:grid col-start-2 row-start-2 lg:col-start-3 lg:col-span-2" />
        <NewsCard
          club="Harmonica"
          time="20 mintues ago"
          title="Lorem ipsum dolor sit amet consectetur."
          subTitle="Lorem ipsum dolor sit amet consectetur. Pretium laoreet est vel aliquet mauris senectus sed. Lorem ipsum dolor sit amet consectetur."
          imgSource="/pic1.jpg"
        />
        <NewsCard
          club="Harmonica"
          time="20 mintues ago"
          title="Lorem ipsum dolor sit amet consectetur."
          subTitle="Lorem ipsum dolor sit amet consectetur. Pretium laoreet est vel aliquet mauris senectus sed. Lorem ipsum dolor sit amet consectetur."
          imgSource="/pic1.jpg"
        />
      </div>
    </div>
  );
};

export default News;
