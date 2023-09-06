// components
import ContactHero from "@/components/Hero/ContactHero";

const Contact = () => {
  const inputs = ["Name", "Email"];
  return (
    <div className="mb-16">
      <ContactHero />
      <div className="flex flex-col items-center my-16">
        <p className="text-celestialBlue text-4xl font-semibold font-playfair mb-12">
          How can we help?
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
                  className="font-playfair text-celestialBlue text-xl pr-4 font-semibold"
                >
                  {elem}
                </label>
                <input
                  className="custom-input w-96"
                  type="text"
                  name={elem}
                  id={elem}
                />
              </div>
            );
          })}
          <label
            for="Message"
            className="font-playfair text-celestialBlue text-xl pr-4 font-semibold"
          >
            Message
          </label>
          <textarea
            maxLength={110}
            type="text"
            name="Message"
            id="message"
            cols={28}
            rows={2}
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
