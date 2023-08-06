import MyCarousel from "@/components/MyCarousel";
import NewsCard from "@/components/NewsCard";
import OrgDisplay from "@/components/OrgDisplay";
import Event from "@/components/Event";
import FadedLink from "@/utils/FadedLink";
import FadedText from "@/utils/FadedText";
import Link from "next/link";

export default function Home() {
  const organizations = [
    {
      orgName: "Harmonica",
      orgPic: "/pic3.jpg",
    },
    {
      orgName: "TPT",
      orgPic: "/pic1.jpg",
    },
    {
      orgName: "Just Media",
      orgPic: "/pic2.jpg",
    },
  ];

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
  let latestEvents = events.slice(events.length - 3, events.length + 1);

  return (
    <main className="grid grid-rows-auto grid-cols-1 mx-16 gap-y-64 my-28">
      {/* Event Section */}
      <section
        id="home-event-section"
        className="relative"
      >
        <MyCarousel
          indicator={true}
          fade={false}
          items={latestEvents.map((elem, index) => {
            return (
              <Event
                key={index}
                title={elem.title}
                subTitle={elem.subTitle}
                date={elem.date}
                month={elem.month}
                clubName={elem.clubName}
                location={elem.location}
                time={elem.time}
                sourcePicture={elem.sourcePicture}
              ></Event>
            );
          })}
        ></MyCarousel>
        <div className="absolute top-10 right-0">
          <div className="flex items-center">
            <FadedLink
              link="/pages/events"
              content="See more events"
              icon={true}
            ></FadedLink>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="home-news-section">
        <div className="grid grid-cols-2">
          <FadedText
            text="Latest News"
            styling="font-playfair text-4xl font-semibold text-left mb-8"
          ></FadedText>
          <div className="self-center flex justify-end items-center gap-x-0.5">
            <FadedLink
              link="/pages/events"
              content="See more"
              icon={true}
            ></FadedLink>
          </div>
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
      </section>

      {/* Organization Section */}
      <section id="home-organizations-section">
        <div className="relative">
          <div className="absolute w-1/2 top-0 right-0 pl-16">
            <FadedText
              text="Choose Your Organization"
              styling="font-playfair text-4xl font-semibold text-left"
            ></FadedText>
            <div className="absolute top-40">
              <FadedText
                text="With over 20 organizations, there are endless possibilities for
                you to find the best environment to grow and become yourself."
                styling="opacity-70 w-2/3 text-lg mb-8"
              ></FadedText>
              <div className="grid grid-cols-2 w-3/4">
                <FadedLink
                  link="/pages/organizations"
                  content="Find your organization"
                  linkStyling="bg-black text-white text-xl font-semibold px-4 py-2 text-center"
                ></FadedLink>
                <div className="justify-self-center self-center pl-8">
                  <div className="flex items-center">
                    <FadedLink
                      link="/pages/organizations"
                      content="View all"
                      icon={true}
                    ></FadedLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-72 right-50"></div>
          </div>
          <MyCarousel
            indicator={false}
            fade={true}
            items={organizations.map((elem, index) => {
              return (
                <OrgDisplay
                  key={index}
                  orgName={elem.orgName}
                  orgPic={elem.orgPic}
                ></OrgDisplay>
              );
            })}
          ></MyCarousel>
        </div>
      </section>
    </main>
  );
}
