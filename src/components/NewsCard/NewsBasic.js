import { twMerge } from "tailwind-merge";

const NewsBasic = ({
  club,
  time,
  title,
  subTitle,
  className,
  spec = false,
  side = false,
  relevant = false,
}) => {
  return (
    <div className={twMerge("z-10 flex flex-col gap-y-2 group", className)}>
      <div className="relative gap-x-2">
        <p className="text-aetroBlue font-semibold self-center">{club}</p>
        <p className="absolute top-0 right-0 opacity-60 text-sm justify-self-end">
          {time}
        </p>
      </div>
      <h1
        className={`font-playfair font-semibold ${
          spec === true
            ? "transition ease-in-out group-hover:text-saffronYellow"
            : ""
        }
        ${
          side === true
            ? "transition ease-in-out group-hover:text-aetroBlue"
            : ""
        }
        
        ${
          relevant === true
            ? "min-h-[8rem] md:text-xl"
            : "md:text-xl lg:text-2xl"
        }  `}
      >
        {title}
      </h1>
      <p className="opacity-70 md:text-sm">{subTitle}</p>
    </div>
  );
};

export default NewsBasic;
