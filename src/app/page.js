import EventCarousel from "@/components/EventCarousel";
import NewsCard from "@/components/NewsCard";
import OrganizationDisplay from "@/components/OrganizationDisplay";
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
  return (
    <main className="px-16 my-16">
      {/* Event Section */}
      <EventCarousel items={events}></EventCarousel>

      {/* News Section */}
      <div className="grid grid-cols-2">
        <FadedText
          text="Latest News"
          styling="font-playfair text-4xl font-semibold text-left mb-8"
        ></FadedText>
        <div className="self-center flex justify-end items-center gap-x-0.5">
          <FadedLink
            link="/pages/events"
            content="See more"
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

      {/* Organization Section */}

      <div className="relative mt-56">
        <div className="absolute w-1/2 top-0 right-0 pl-16">
          <h1 className="font-playfair text-4xl font-semibold text-left">
            Choose Your Organization
          </h1>
          <div className="absolute top-40">
            <p className="opacity-70 w-2/3 text-lg mb-8">
              With over 20 organizations, there are endless possibilities for
              you to find the best environment to grow and become yourself.
            </p>
            <div className="grid grid-cols-2 w-3/4">
              <Link
                className="bg-black text-white text-xl font-semibold px-4 py-2 text-center"
                href="/pages/organizations"
              >
                Find your Organization
              </Link>
              <div className="justify-self-center self-center pl-8">
                <div className="flex items-center">
                  <FadedLink
                    link="/pages/organizations"
                    content="View all"
                  ></FadedLink>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-72 right-50"></div>
        </div>
        {organizations.map((elem, index) => {
          return (
            <OrganizationDisplay
              key={index}
              orgName={elem.orgName}
              orgPic={elem.orgPic}
            ></OrganizationDisplay>
          );
        })}
      </div>
    </main>
  );
}
