// components
import Hero from "@/components/Hero/Hero";
import MyCarousel from "@/components/MyCarousel/EventCarousel";
import Event from "@/components/Event/Event";
import NewsCard from "@/components/NewsCard/NewsCard";

const Page = () => {
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

  const cases = () => {
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

  return (
    <div className="flex flex-col justify-between gap-y-8">
      {/* hero section */}
      <section id="hero-section">
        <Hero />
      </section>

      {/* event section */}
      <section
        id="events-section"
        className="flex flex-col mb-20"
      >
        {cases()}
      </section>

      {/* news section */}
      <section>
        <NewsCard />
      </section>
    </div>
  );
};

export default Page;
