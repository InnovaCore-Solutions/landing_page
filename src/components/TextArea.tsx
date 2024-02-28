import { DetailedHTMLProps, TextareaHTMLAttributes, useState } from "react";
import { twMerge } from "tailwind-merge";

export const TextArea = (
  props: DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >
) => {
  const [letterCount, setLetterCount] = useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = event.target.value;
    setLetterCount(text.length);
  };

  return (
    <div className="relative">
      <textarea
        {...props}
        className={twMerge(
          "px-4 py-3 border rounded-lg placeholder-gray-400 dark:placeholder-gray-600 bg-strong first-line:border-gray-200 dark:border-gray-600 text-strong",
          props.className
        )}
        maxLength={250}
        // onChange={handleChange}
        style={{ maxWidth: "100%", height: "200px", maxHeight: "200px", minHeight: "200px", resize: "vertical" }}
      />
      <span className="absolute bottom-2 right-2 text-sm text-gray-400">{letterCount}/250</span>
    </div>
  );
};
