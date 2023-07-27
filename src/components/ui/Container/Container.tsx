import type { AriaAttributes, ReactNode } from "react";

type Props = {
  children: ReactNode;
  as: keyof Pick<JSX.IntrinsicElements, "div" | "section" | "header">;
  id?: string;
} & Pick<AriaAttributes, "aria-labelledby">;

export const Container = ({ as: As, children, ...props }: Props) => {
  return (
    <As className="container mx-auto px-3 lg:px-6" {...props}>
      {children}
    </As>
  );
};
