"use client";

import { Fade } from "react-awesome-reveal";

// components
import ContactHero from "@/components/Hero/ContactHero";

const Contact = () => {
  const inputs = ["Name", "Email"];
  return (
    <div className="mb-16">
      <ContactHero />
      <Fade duration={2000}>
        <div className="flex flex-col items-center my-16 mx-4 sm:mx-8 md:mx-12">
          <p className="text-celestialBlue text-3xl sm:text-4xl md:text-5xl font-playfair mb-4 md:mb-8">
            How can we help?
          </p>
          <p className="text-base md:text-xl mb-12 opacity-70 w-[60%] lg:w-[30%] text-center">
            Should you have any questions, feel free to contact us anytime. We
            will get back to you as soon as we can.
          </p>
          <form className="bg-white flex flex-col gap-y-8">
            {inputs.map((elem, index) => {
              return (
                <div
                  key={index}
                  className="input-fields"
                >
                  <label
                    for={elem}
                    className="font-playfair text-celestialBlue md:text-xl pr-4 "
                  >
                    {elem}
                  </label>
                  <input
                    maxLength={47}
                    className="custom-input w-96 md:text-xl"
                    type={elem === "Name" ? "text" : "email"}
                    name={elem}
                    id={elem}
                  />
                </div>
              );
            })}
            <label
              for="Message"
              className="font-playfair text-celestialBlue md:text-xl pr-4"
            >
              Message
            </label>
            <textarea
              className="md:text-xl"
              maxLength={88}
              type="text"
              name="Message"
              id="message"
              cols={28}
              rows={2}
            />
            <button
              id="lightened-button"
              onClick={() => alert("Submitted")}
              className="btn btn-primary rounded-none capitalize text-lg md:text-xl text-white border-none"
            >
              Submit
            </button>
          </form>
        </div>
      </Fade>
    </div>
  );
};

export default Contact;
