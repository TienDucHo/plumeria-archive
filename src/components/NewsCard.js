import Image from "next/image";

export default function NewsCard({ items }) {
  return (
    <div
      id="news-card"
      className="relative w-80 h-72 mb-16"
    >
      <Image
        src="/pic2.jpg"
        alt="A club image"
        fill
      ></Image>
    </div>
  );
}
