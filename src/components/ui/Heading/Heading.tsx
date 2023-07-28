import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type HeadingProps = {
  as: keyof Pick<
    JSX.IntrinsicElements,
    "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  >;
  children: ReactNode;
  variant?: "default";
  size?: "default";
  id?: string;
};

const baseStyles = twMerge("font-bold");

const variants = {
  default: "font-bold",
} as const;

const sizes = {
  default: "",
} as const;

export const Heading = ({
  as: Tag,
  children,
  variant = "default",
  size,
  id,
}: HeadingProps) => {
  return (
    <Tag
      className={twMerge(
        baseStyles,
        variant && variants[variant],
        size && sizes[size],
      )}
      id={id}
    >
      {children}
    </Tag>
  );
};
