"use client";

import { Fade } from "react-awesome-reveal";

// local components
import OrgCard from "./OrgCard";

const OrgCardList = ({ items, className, mobile = false }) => {
  return (
    <Fade
      className={className}
      cascade={mobile === true ? false : true}
      delay={10}
    >
      {items.map((elem, index) => {
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
    </Fade>
  );
};

export default OrgCardList;
