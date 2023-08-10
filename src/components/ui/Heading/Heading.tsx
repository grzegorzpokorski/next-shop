import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { cn } from "@/utils/cn";

type HeadingProps = {
  as: keyof Pick<
    JSX.IntrinsicElements,
    "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  >;
  children: ReactNode;
  variant?: "default";
  size?: "default" | "xl" | "2xl" | "3xl" | "4xl";
  id?: string;
  hidden?: boolean;
};

const baseStyles = twMerge("font-bold");

const variants = {
  default: "font-bold",
} as const;

const sizes = {
  default: "",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
} as const;

export const Heading = ({
  as: Tag,
  children,
  variant = "default",
  size,
  id,
  hidden,
}: HeadingProps) => {
  return (
    <Tag
      className={cn(
        baseStyles,
        variant && variants[variant],
        size && sizes[size],
        hidden && "sr-only",
      )}
      id={id}
    >
      {children}
    </Tag>
  );
};
