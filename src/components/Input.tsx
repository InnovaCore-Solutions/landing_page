import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";


export const Input = (
  props: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) => {
  return (
    <input
      {...props}
      className={twMerge(
        "px-4 py-3 border rounded-lg placeholder-gray-400 dark:placeholder-gray-600 bg-strong first-line:border-gray-200 text-strong",
        props.className
      )}
    />
  );
};
