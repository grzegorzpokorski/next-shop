import type { ComponentProps, ReactNode } from "react";
import { Heading } from "@/components/ui/Heading/Heading";

type Props = {
  children: ReactNode;
  titleId: string;
};

export const PageHeader = ({ children, titleId }: Props) => {
  return (
    <header
      className="flex flex-col gap-4 justify-between pt-16 pb-12 max-w-3xl"
      aria-labelledby={titleId}
    >
      {children}
    </header>
  );
};

type PageHeaderTitleProps = ComponentProps<typeof Heading>;

export const PageHeaderTitle = ({
  children,
  as,
  size,
  id,
}: PageHeaderTitleProps) => {
  return (
    <Heading as={as} size={size} id={id}>
      {children}
    </Heading>
  );
};

type PageHeaderDescriptionProps = {
  children: ReactNode;
};

export const PageHeaderDescription = ({
  children,
}: PageHeaderDescriptionProps) => {
  return <p>{children}</p>;
};
