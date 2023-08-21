import { twMerge } from "tailwind-merge";

const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={twMerge(
        "bg-celestialBlue text-white text-2xl font-semibold py-1 lg:py-2",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
