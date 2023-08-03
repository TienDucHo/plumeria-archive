import Image from "next/image";
// import moment from "moment";

export default function NewsCard({ writer, title, subTitle }) {
  // const timeago = moment(data.created_at).fromNow();

  return (
    <div
      id="news-card"
      className="relative mb-16 text-white"
    >
      <Image
        src="/pic2.jpg"
        alt="A club image"
        fill
      ></Image>

      <div className="absolute bg-black w-full h-full opacity-20"></div>
      <div className="absolute bottom-6 left-4">
        <div className="flex gap-x-4">
          <p className="text-xl self-center font-bold text-aetroBlue">
            {writer}
          </p>
          {/* Implement TIME CALCULATION */}
          <p className="self-center opacity-60 text-sm">10 minutes ago</p>
        </div>
        <p className="text-2xl mb-2 font-semibold">{title}</p>
        <p className="opacity-60 text-sm">{subTitle}</p>
      </div>
    </div>
  );
}
