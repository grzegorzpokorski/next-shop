import type { AriaAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  children: ReactNode;
  as: keyof Pick<
    JSX.IntrinsicElements,
    "div" | "section" | "header" | "article"
  >;
  id?: string;
  hidden?: boolean;
} & Pick<AriaAttributes, "aria-labelledby">;

export const Container = ({ as: As, children, hidden, ...props }: Props) => {
  return (
    <As
      className={twMerge("container mx-auto px-3 lg:px-6", hidden && "sr-only")}
      {...props}
    >
      {children}
    </As>
  );
};
