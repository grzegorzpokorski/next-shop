import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Main = ({ children }: Props) => {
  return (
    <main className="pt-20" id="main">
      {children}
    </main>
  );
};
