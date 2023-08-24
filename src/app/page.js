// components
import Hero from "@/components/Hero/Hero";
import MyCarousel from "@/components/MyCarousel/MyCarousel";

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

  return (
    <div className="flex flex-col justify-between gap-y-8">
      <section id="hero-section">
        {/* hero section */}
        <Hero />
      </section>
      <section
        id="events-section"
        className="flex flex-col mb-20"
      >
        {/* event carousel */}
        <MyCarousel items={eventsInfo}></MyCarousel>
      </section>
    </div>
  );
};

export default Page;
