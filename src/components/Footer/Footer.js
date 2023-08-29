import { FaFacebook, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-4 bg-black py-4 text-white">
      <div className="flex gap-x-8">
        <Link
          className="hover:text-saffronYellow transition ease-in-out duration-300"
          target="_blank"
          href="https://www.facebook.com/MEO.5tud1o"
        >
          <FaFacebook className="text-xl lg:text-2xl" />
        </Link>
        <Link
          className="hover:text-saffronYellow transition ease-in-out duration-300"
          target="_blank"
          href="https://www.youtube.com/channel/UCO9GLAVuo3m6s8ftVEKVv_w"
        >
          <FaYoutube className="text-xl lg:text-2xl" />
        </Link>
      </div>
      <h1 className="font-semibold text-xl lg:text-2xl">MEO Studio</h1>
      <p className="text-sm text-center mx-[2rem] sm:mx-[4rem] md:mx-[8rem] lg:mx-[16rem] md:text-base">
        Lorem ipsum dolor sit amet consectetur. Vitae vestibulum turpis sapien
        venenatis vitae adipiscing. Mauris odio sit malesuada donec elit
        gravida. Amet blandit proin augue eu morbi faucibus viverra nibh
        scelerisque. Non tincidunt at aliquam fermentum.
      </p>
      <div className="flex gap-x-12 text-xl font-semibold">
        <Link
          className="hover:text-saffronYellow transition ease-in-out duration-300"
          href="/pages/aboutus"
        >
          About Us
        </Link>
        <Link
          className="hover:text-saffronYellow transition ease-in-out duration-300"
          href="/pages/contact"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Footer;
