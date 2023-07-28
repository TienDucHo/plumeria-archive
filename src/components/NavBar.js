import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="font-bold whitespace-nowrap grid grid-cols-2 mx-10 mt-8">
      <div className="font-playfair text-3xl text-left italic">
        <span className="text-celestialBlue">Plumeria </span>
        <span className="text-black">Archive</span>
      </div>

      <div className="justify-self-end uppercase">
        <ul className="flex gap-16">
          <li id="home">
            <Link href="/">Home</Link>
          </li>
          <li id="news">
            <Link href="/pages/news">News</Link>
          </li>
          <li id="events">
            <Link href="/pages/events">Events</Link>
          </li>
          <li id="organizations">
            <Link href="/pages/organizations">Organizations</Link>
          </li>
          <li id="aboutUs">
            <Link href="/pages/aboutUs">About Us</Link>
          </li>
          <li id="contact">
            <Link href="/pages/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
