import Link from "next/link";
import { FaFacebook, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 grid grid-cols-2 gap-y-4">
      <div className="col-span-2 justify-self-center self-end text-2xl flex space-x-6">
        <Link
          href="https://www.facebook.com/MEO.5tud1o"
          target="_blank"
        >
          <FaFacebook></FaFacebook>
        </Link>
        <Link
          href="https://www.youtube.com/@meostudios388"
          target="_blank"
        >
          <FaYoutube></FaYoutube>
        </Link>
      </div>

      <h1 className="row-start-2 col-span-2 font-semibold text-3xl text-center self-center">
        MEO Studio
      </h1>

      <p className="row-start-3 col-start-1 col-span-2 text-center mx-24 opacity-50 max-w-1/2">
        Lorem ipsum dolor sit amet consectetur. Vitae vestibulum turpis sapien
        venenatis vitae adipiscing. Mauris odio sit malesuada donec elit
        gravida. Amet blandit proin augue eu morbi faucibus viverra nibh
        scelerisque. Non tincidunt at aliquam fermentum.
      </p>

      <div className="row-start-4 col-span-2 justify-self-center self-center text-xl flex space-x-4 font-semibold">
        <Link href="/pages/aboutus">About Us</Link>
        <Link href="/pages/contact">Contact</Link>
      </div>
    </footer>
  );
}
