import { twMerge } from "tailwind-merge";

const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={twMerge(
        "bg-celestialBlue uppercase text-white text-xl font-semibold py-3",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
