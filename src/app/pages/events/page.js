import Event from "@/components/Event/Event";
import RotatedEvent from "@/components/Event/RotatedEvent";

const Events = () => {
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
    <div className="flex flex-col mb-16 gap-y-12 lg:gap-y-24">
      {eventsInfo.map((elem, index) => {
        return index % 2 === 0 ? (
          <RotatedEvent
            key={index}
            title={elem.title}
            subTitle={elem.subTitle}
            club={elem.club}
            time={elem.time}
            date={elem.date}
            month={elem.month}
            location={elem.location}
            imgSource={elem.imgSource}
          />
        ) : (
          <Event
            key={index}
            title={elem.title}
            subTitle={elem.subTitle}
            club={elem.club}
            time={elem.time}
            date={elem.date}
            month={elem.month}
            location={elem.location}
            imgSource={elem.imgSource}
          />
        );
      })}
    </div>
  );
};

export default Events;
