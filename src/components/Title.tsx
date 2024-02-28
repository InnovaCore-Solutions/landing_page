import { DetailedHTMLProps, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

// Built with Vivid (https://vivid.lol) ⚡️

export const Title = (
  props: DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > & { size: "lg" | "md" | "xs" }
) => {
  const { size, className = "", ...htmlProps } = props;

  const headingProps = {
    ...htmlProps,
    "data-aos": "zoom-y-out",
  };

  return size === "lg" ? (
    <h1
      {...headingProps}
      className={twMerge(
        "font-bold leading-tight tracking-tighter title-lg",
        className
      )}
    />
  ) : size === "md" ? (
    <h2
      {...headingProps}
      className={twMerge(
        "font-bold leading-tight tracking-tighter title-md",
        className
      )}
    />
  ) : (
    <h2
      {...headingProps}
      className={twMerge(
        "font-bold leading-tight tracking-tighter title-xs",
        className
      )}
    />
  );
};
