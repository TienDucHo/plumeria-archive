"use client";

import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";

const ContactHero = () => {
  // list of contact icons
  const contactList = [
    {
      icon: <AiOutlineInstagram />,
      link: "/",
    },
    {
      icon: <AiOutlineFacebook />,
      link: "/",
    },
    {
      icon: <AiOutlineLinkedin />,
      link: "/",
    },
    {
      icon: <AiOutlineGithub />,
      link: "/",
    },
  ];

  // add magnetic effect for buttons
  const button = document.querySelectorAll("#contact-button");
  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("mousemove", (e) => {
      let x = e.offsetX;
      let y = e.offsetY;
      let btnWidth = button[i].clientWidth;
      let btnHeight = button[i].clientHeight;
      button[i].style.transform = `translateX(${
        x - btnWidth / 10
      }px) translateY(${y - btnHeight / 10}px)`;
    });

    button[i].addEventListener("mouseout", () => {
      button[i].style.transform = "";
    });
  }

  return (
    <div>
      <div
        id="hero-image-container"
        className="relative py-12 md:py-24"
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
          className="py-12 text-center flex flex-col gap-y-8  sm:py-24 md:py-32"
        >
          <span className="text-white font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Get in touch with us
          </span>

          <span
            className="flex flex-row gap-x-8 text-white opacity-80 text-lg sm:text-xl md:text-2xl lg:text-4xl
          "
          >
            {contactList.map((elem, index) => {
              return (
                <Link
                  id="contact-button"
                  className="hover:text-saffronYellow transition ease-in-out duration-300"
                  key={index}
                  href={elem.link}
                >
                  {elem.icon}
                </Link>
              );
            })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
