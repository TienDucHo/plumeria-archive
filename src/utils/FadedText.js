"use client";
import { Fade } from "react-awesome-reveal";

export default function FadedText({ styling, text }) {
  return (
    <Fade triggerOnce>
      <p className={styling}>{text}</p>
    </Fade>
  );
}
