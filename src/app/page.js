import Image from "next/image";

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
      <section id="hero-section">
        {/* hero section */}
        <div
          id="hero-image-container"
          className="relative"
        >
          <Image
            id="hero-image"
            className="object-cover z-[-1]"
            src="/plumeria_background.webp"
            fill
            alt="Plumeria Archive Hero Section Image"
          ></Image>
          <div
            id="hero-section-text"
            className="py-16 text-center flex flex-col gap-y-8  sm:py-24 md:py-32"
          >
            <span className="text-white font-playfair font-bold italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Plumeria <span className="text-saffronYellow">Archive</span>
            </span>

            <span className="text-white opacity-80 text-lg sm:text-xl md:text-2xl lg:text-4xl">
              Dive into the endless archive of possibilities
            </span>
          </div>
        </div>
      </section>

      <section id="events-section">
        {/* event carousel */}
        {/* <MyCarousel items={eventsInfo}></MyCarousel> */}
      </section>
    </div>
  );
};

export default Page;
