import type { ReactNode } from "react";
import LinkNext from "next/link";
import { twMerge } from "tailwind-merge";

type LinkVariant = "default" | "logo";

const baseStyles = twMerge("flex flex-row");
const transitionStyles = "transition-colors motion-reduce:transition-none";

const linkVariants = {
  default: twMerge(
    "text-slate-800 hover:text-indigo-500",
    "hover:underline underline-offset-2",
    "dark:text-neutral-400 dark:hover:text-indigo-300",
  ),
  logo: twMerge(
    "text-lg font-bold",
    "text-slate-800 hover:text-indigo-500",
    "dark:text-neutral-200 dark:hover:text-indigo-300",
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
