import type { JSX, ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { cn } from "@/utils/cn";

const headingVariants = cva("font-bold", {
  variants: {
    size: {
      default: "",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

type Props = {
  as: keyof Pick<
    JSX.IntrinsicElements,
    "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  >;
  children: ReactNode;
  id?: string;
  hidden?: boolean;
} & VariantProps<typeof headingVariants>;

export const Heading = ({ size, as: Tag, children, id, hidden }: Props) => {
  return (
    <Tag className={cn(headingVariants({ size }), hidden && "sr-only")} id={id}>
      {children}
    </Tag>
  );
};
