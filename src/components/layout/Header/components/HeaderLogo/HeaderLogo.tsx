"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Heading } from "@/components/ui/Heading/Heading";
import { Link } from "@/components/ui/Link/Link";

type Props = {
  children: ReactNode;
};

export const HeaderLogo = ({ children }: Props) => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <Link href={isHome ? "#" : "/"} variant="logo">
      {isHome ? (
        <Heading as="h1" variant="default">
          {children}
        </Heading>
      ) : (
        children
      )}
    </Link>
  );
};
