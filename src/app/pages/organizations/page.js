// components
import OrgCardList from "@/components/Organization/OrgCardList";

const Organizations = () => {
  const orgInfo = [
    {
      club: "Harmonica PTNK Club",
      char1: "Music",
      char2: "Instrument",
      content: "Lorem ipsum dolor!",
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
    <div className="transition ease-in-out mx-4 mb-16 grid gap-y-[2rem] grid-cols-1 gap-x-[4%] sm:mx-8 sm:grid-cols-2 md:grid-cols-3 sm:gap-y-[4rem] lg:gap-y-[8rem] lg:mx-12 lg:grid-cols-4">
      <OrgCardList
        className="hidden sm:flex"
        items={orgInfo}
      />
      <OrgCardList
        className="flex sm:hidden"
        items={orgInfo}
        mobile={true}
      />
    </div>
  );
};

export default Organizations;
