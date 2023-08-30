// components
import SpecialNewsCard from "@/components/NewsCard/SpecialNewsCard";
import SideNews from "@/components/NewsCard/SideNews";

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
    <div className="flex flex-col mb-16">
      <div className="grid grid-cols-4 grid-rows-2 gap-x-4 gap-y-4 lg:mx-12">
        <SpecialNewsCard className="row-span-2 col-span-2" />
        <SideNews className="col-span-2 col-start-3" />
        <SideNews className="col-span-2 col-start-3 row-start-2" />
      </div>
    </div>
  );
};

export default News;
