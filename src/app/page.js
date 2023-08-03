import EventCarousel from "@/components/EventCarousel";
import NewsCard from "@/components/NewsCard";
import Link from "next/link";
import GradientRightArrow from "@/components/GradientEffectIcon";
import { AiOutlineRight } from "react-icons/ai";

export default function Home() {
  let events = [
    {
      title: "Lorem ipsum dolor sit amet consectetur.",
      subTitle:
        "Lorem ipsum dolor sit amet consectetur. Tincidunt platea vulputate egestas eu.",
      date: "05",
      month: "January",
      clubName: "Harmonica PTNK Club",
      location: "825 34 Ave Street",
      time: "9:00",
      sourcePicture: "/pic1.jpg",
    },

    {
      title: "Lorem ipsum dolor sit amet consectetur.",
      subTitle:
        "Lorem ipsum dolor sit amet consectetur. Tincidunt platea vulputate egestas eu.",
      date: "25",
      month: "January",
      clubName: "TPT",
      location: "1234 56 Ave Street",
      time: "17:00",
      sourcePicture: "/pic1.jpg",
    },

    {
      title: "Lorem ipsum dolor sit amet consectetur.",
      subTitle:
        "Lorem ipsum dolor sit amet consectetur. Tincidunt platea vulputate egestas eu.",
      date: "25",
      month: "June",
      clubName: "Just Media",
      location: "1234 56 Ave Street",
      time: "20:00",
      sourcePicture: "/pic1.jpg",
    },
  ];

  let news = [
    {
      writer: "MIB",
      title: "Lorem ipsum dolor sit amet consectetur.",
      subTitle:
        "Lorem ipsum dolor sit amet consectetur. Ut viverra faucibus lobortis turpis nullam dignissim in arcu magna.",
      imageSource: "/pic2.jpg",
      createdAt: new Date("2023-08-02T21:40:25.051+07:00"),
      newsLink: "/",
    },
    {
      writer: "Just Media",
      title: "Lorem ipsum dolor sit amet consectetur.",
      subTitle:
        "Lorem ipsum dolor sit amet consectetur. Ut viverra faucibus lobortis turpis nullam dignissim in arcu magna.",
      imageSource: "/pic3.jpg",
      createdAt: new Date("2023-08-02T21:40:25.051+07:00"),
      newsLink: "/",
    },
    {
      writer: "TPT",
      title: "Lorem ipsum dolor sit amet consectetur.",
      subTitle:
        "Lorem ipsum dolor sit amet consectetur. Ut viverra faucibus lobortis turpis nullam dignissim in arcu magna.",
      imageSource: "/pic4.jpg",
      createdAt: new Date("2023-08-02T21:40:25.051+07:00"),
      newsLink: "/",
    },
  ];

  let latestNews = news.slice(news.length - 3, news.length + 1);
  return (
    <main className="px-16 my-16">
      {/* Event Section */}
      <EventCarousel items={events}></EventCarousel>

      {/* News Section */}
      <div className="grid grid-cols-2">
        <h1
          id="latest-news"
          className="font-playfair text-4xl font-semibold text-left mb-8"
        >
          Latest News
        </h1>
        <Link
          href="/pages/events"
          className="self-center flex justify-end items-center gap-x-0.5"
          id="text-gradient"
        >
          See more
          <GradientRightArrow></GradientRightArrow>
          <AiOutlineRight
            className="cursor-pointer"
            style={{ fill: "url(#blue-gradient)" }}
          />
        </Link>
      </div>
      <div className="grid grid-cols-3 self-center gap-x-14">
        {latestNews.map((elem, index) => {
          return (
            <NewsCard
              key={index}
              writer={elem.writer}
              title={elem.title}
              subTitle={elem.subTitle}
              imageSource={elem.imageSource}
              createdAt={elem.createdAt}
              newsLink={elem.newsLink}
            ></NewsCard>
          );
        })}
      </div>
    </main>
  );
}
