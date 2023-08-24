// components
import MyCarousel from "@/components/MyCarousel/MyCarousel";

const Page = () => {
  const eventsInfo = [
    {
      club: "Harmonica PTNK Club",
      time: "17:00",
      date: "25",
      month: "December",
      location: "125 Nguyen Chi Thanh",
      imgSource: "/pic1.jpg",
    },
    {
      club: "TPT",
      time: "20:00",
      date: "20",
      month: "November",
      location: "125 Nguyen Chi Thanh",
      imgSource: "/pic2.jpg",
    },
    {
      club: "FZone",
      time: "14:00",
      date: "16",
      month: "May",
      location: "125 Nguyen Chi Thanh",
      imgSource: "/pic3.jpg",
    },
  ];

  return (
    <div>
      <section id="events-section">
        <MyCarousel items={eventsInfo}></MyCarousel>
      </section>
    </div>
  );
};

export default Page;
