import type { ReactNode } from "react";
import LinkNext from "next/link";
import { twMerge } from "tailwind-merge";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { cn } from "@/utils/cn";

const linkVariants = cva(
  "flex flex-row transition-colors motion-reduce:transition-none",
  {
    variants: {
      variant: {
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
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

type Props = {
  href: string;
  children: ReactNode;
  onClick?: () => void;
} & VariantProps<typeof linkVariants>;

export const Link = (props: Props) => {
  const isInternal = ["#", "/"].some((item) => props.href.startsWith(item))
    ? true
    : false;

  if (isInternal) {
    return (
      <LinkNext
        href={props.href}
        onClick={props.onClick}
        className={cn(linkVariants({ variant: props.variant }))}
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
      className={cn(linkVariants({ variant: props.variant }))}
    >
      {props.children}
    </a>
  );
};
