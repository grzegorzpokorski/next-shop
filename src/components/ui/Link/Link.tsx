import type { ReactNode } from "react";
import LinkNext from "next/link";
import { twMerge } from "tailwind-merge";

type LinkVariant = "default" | "logo" | "indigo";

const baseStyles = twMerge("flex flex-row");
const transitionStyles = "transition-colors motion-reduce:transition-none";

const linkVariants = {
  default: twMerge(
    "text-neutral-600 hover:text-neutral-800",
    "hover:underline underline-offset-2",
    "dark:text-neutral-100 dark:hover:text-neutral-400",
  ),
  indigo: twMerge(
    "text-indigo-600",
    "hover:underline underline-offset-2",
    "dark:text-indigo-400",
  ),
  logo: twMerge(
    "font-bold",
    "text-neutral-600 hover:text-neutral-800",
    "dark:text-neutral-100 dark:hover:text-neutral-400",
    "whitespace-nowrap",
  ),
} as const;

export type LinkProps = {
  href: string;
  children: ReactNode;
  onClick?: () => void;
  variant?: LinkVariant;
};

export const Link = ({ variant = "default", ...props }: LinkProps) => {
  const isInternal = ["#", "/"].some((item) => props.href.startsWith(item))
    ? true
    : false;

  if (isInternal) {
    return (
      <LinkNext
        href={props.href}
        onClick={props.onClick}
        className={twMerge(
          transitionStyles,
          baseStyles,
          variant && linkVariants[variant],
        )}
      >
        {props.children}
      </LinkNext>
    );
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={props.href}
      onClick={props.onClick}
      className={twMerge(variant && linkVariants[variant])}
    >
      {props.children}
    </a>
  );
};
