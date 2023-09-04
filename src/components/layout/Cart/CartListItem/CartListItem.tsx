import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const CartListItem = ({ children }: Props) => {
  return (
    <li className="border-b last:border-0 p-4 lg:p-8 flex flex-col gap-4">
      {children}
    </li>
  );
};
