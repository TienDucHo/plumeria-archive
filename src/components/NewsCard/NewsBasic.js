import { twMerge } from "tailwind-merge";

const NewsBasic = ({ club, time, title, subTitle, className }) => {
  return (
    <div className={twMerge("z-10 flex flex-col gap-y-2", className)}>
      <div className="relative gap-x-2">
        <p className="text-aetroBlue font-semibold self-center">{club}</p>
        <p className="absolute top-0 right-0 opacity-60 text-sm justify-self-end">
          {time}
        </p>
      </div>
      <h1 className="font-playfair font-semibold md:text-xl lg:text-2xl">
        {title}
      </h1>
      <p className="opacity-70 md:text-sm">{subTitle}</p>
    </div>
  );
};

export default NewsBasic;
