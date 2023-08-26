// components
import Hero from "@/components/Hero/Hero";
import MyCarousel from "@/components/MyCarousel/EventCarousel";
import Event from "@/components/Event/Event";
import NewsCard from "@/components/NewsCard/NewsCard";
import { PiNewspaperClipping } from "react-icons/pi";

// utils
import GradientLink from "@/utils/GradientLink/GradientLink";

const Page = () => {
  // IMPORTANT: Newsest information should be added to the beginning of the array (unshift)
  const eventsInfo = [
    {
      title: "Lorem ipsum dolor sit amet consectetur.",
      subTitle:
        "Lorem ipsum dolor sit amet consectetur. Tincidunt platea vulputate egestas eu.",
      club: "Harmonica PTNK Club",
      time: "17:00",
      date: "25",
      month: "December",
      location: "125 Nguyen Chi Thanh",
      imgSource: "/pic1.jpg",
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur.",
      subTitle:
        "Lorem ipsum dolor sit amet consectetur. Tincidunt platea vulputate egestas eu.",
      club: "TPT",
      time: "20:00",
      date: "20",
      month: "November",
      location: "125 Nguyen Chi Thanh",
      imgSource: "/pic2.jpg",
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur.",
      subTitle:
        "Lorem ipsum dolor sit amet consectetur. Tincidunt platea vulputate egestas eu.",
      club: "FZone",
      time: "14:00",
      date: "16",
      month: "May",
      location: "125 Nguyen Chi Thanh",
      imgSource: "/pic3.jpg",
    },
  ];

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
  ];

  const eventCasesHandler = () => {
    switch (eventsInfo.length) {
      default:
        return <MyCarousel items={eventsInfo}></MyCarousel>;
      case 0:
        return <div></div>;
      case 1:
        return (
          <Event
            title={eventsInfo[0].title}
            subTitle={eventsInfo[0].subTitle}
            club={eventsInfo[0].club}
            time={eventsInfo[0].time}
            date={eventsInfo[0].date}
            month={eventsInfo[0].month}
            location={eventsInfo[0].location}
            imgSource={eventsInfo[0].imgSource}
          />
        );
    }
  };

  const newsCasesHandler = () => {
    switch (newsInfo.length) {
      case 0:
        return (
          <div className="flex flex-col justify-center items-center opacity-70">
            <PiNewspaperClipping className="text-5xl md:text-7xl" />
            <div className="text-2xl md:text-3xl">No news yet</div>
            <div className="text-lg md:text-xl">
              It seems that we are having a lot of exams going on...
            </div>
          </div>
        );
      case 1:
      case 2:
        return newsInfo.slice(0, newsInfo.length).map((elem, index) => {
          return (
            <NewsCard
              key={index}
              className="news-card"
              title={elem.title}
              subTitle={elem.subTitle}
              club={elem.club}
              time={elem.time}
              imgSource={elem.imgSource}
            />
          );
        });
      default:
        return newsInfo.slice(0, 3).map((elem, index) => {
          return (
            <NewsCard
              key={index}
              className="news-card"
              title={elem.title}
              subTitle={elem.subTitle}
              club={elem.club}
              time={elem.time}
              imgSource={elem.imgSource}
            />
          );
        });
    }
  };

  return (
    <div className="flex flex-col justify-between gap-y-8 mb-32">
      {/* hero section */}
      <section id="hero-section">
        <Hero />
      </section>

      {/* event section */}
      <section
        id="events-section"
        className="flex flex-col mb-20"
      >
        {eventCasesHandler()}
      </section>

      {/* news section */}
      <section>
        <div className="flex items-end justify-between mx-4 mb-4 sm:mx-8 lg:mx-12">
          <h1 className="text-3xl font-semibold font-playfair md:text-4xl md:text-left">
            Latest News
          </h1>
          <GradientLink className="text-celestialBlue">More news</GradientLink>
        </div>
        <div
          className={
            newsInfo.length > 0
              ? `grid grid-cols-1 gap-y-4 mx-4 sm:mx-8 md:gap-x-4 lg:mx-12 lg:${
                  "grid-cols-" + newsInfo.length
                }`
              : "mx-4 mt-16 sm:mx-8 md:mt-12 lg:mx-12"
          }
        >
          {newsCasesHandler()}
        </div>
      </section>
    </div>
  );
};

export default Page;
