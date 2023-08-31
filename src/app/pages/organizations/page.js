// components
import OrgCard from "@/components/Organization/OrgCard";

const Organizations = () => {
  const orgInfo = [
    {
      club: "Harmonica PTNK Club",
      char1: "Music",
      char2: "Instrument",
      content:
        "Lorem ipsum dolor sit amet consectetur. Condimentum phasellus eleifend diam viverra ornare metus id eleifend. Eget facilisi fusce",
      imgSource: "/pic1.jPg",
    },
    {
      club: "TPT",
      char1: "Events",
      char2: "News",
      content:
        "Lorem ipsum dolor sit amet consectetur. Condimentum phasellus eleifend diam viverra ornare metus id eleifend. Eget facilisi fusce",
      imgSource: "/pic2.jpg",
    },
    {
      club: "Define Magic Club",
      char1: "Magic",
      char2: "Tricks",
      content:
        "Lorem ipsum dolor sit amet consectetur. Condimentum phasellus eleifend diam viverra ornare metus id eleifend. Eget facilisi fusce",
      imgSource: "/pic3.jpg",
    },
    {
      club: "MIB",
      char1: "Dance",
      char2: "Music",
      content:
        "Lorem ipsum dolor sit amet consectetur. Condimentum phasellus eleifend diam viverra ornare metus id eleifend. Eget facilisi fusce",
      imgSource: "/pic1.jpg",
    },
    {
      club: "FZone",
      char1: "Dance",
      char2: "Music",
      content:
        "Lorem ipsum dolor sit amet consectetur. Condimentum phasellus eleifend diam viverra ornare metus id eleifend. Eget facilisi fusce",
      imgSource: "/pic2.jpg",
    },
  ];
  return (
    <div className="mx-4 mb-16 grid gap-y-[2rem] sm:mx-8 sm:gap-x-[2%] sm:grid-cols-2 sm:gap-y-[4rem] lg:gap-y-[8rem] lg:mx-12 lg:grid-cols-3">
      {orgInfo.map((elem, index) => {
        return (
          <OrgCard
            key={index}
            club={elem.club}
            content={elem.content}
            imgSource={elem.imgSource}
            char1={elem.char1}
            char2={elem.char2}
          />
        );
      })}
    </div>
  );
};

export default Organizations;
