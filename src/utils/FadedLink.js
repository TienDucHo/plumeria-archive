"use client";
import { Fade } from "react-awesome-reveal";
import GradientEffectIcon from "@/utils/GradientEffectIcon";
import { AiOutlineRight } from "react-icons/ai";
import Link from "next/link";

export default function FadedLink({
  link,
  linkStyling,
  content,
  icon = false,
}) {
  return (
    <Fade triggerOnce>
      <Link
        href={link}
        id={icon === true ? "text-gradient" : ""}
        className={linkStyling}
      >
        {content}
      </Link>
      {icon === true ? (
        <div>
          <GradientEffectIcon></GradientEffectIcon>
          <AiOutlineRight
            className="cursor-pointer"
            style={{ fill: "url(#blue-gradient)" }}
          />
        </div>
      ) : null}
    </Fade>
  );
}
