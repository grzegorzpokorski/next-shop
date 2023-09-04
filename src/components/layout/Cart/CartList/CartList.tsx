import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const CartList = ({ children }: Props) => {
  return (
    <ul className="list-none flex flex-col" role="list">
      {children}
    </ul>
  );
};
