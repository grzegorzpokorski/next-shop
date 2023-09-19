import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Main = ({ children }: Props) => {
  return (
    <main id="main" className="flex-grow">
      {children}
    </main>
  );
};
