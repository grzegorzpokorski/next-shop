import type { ReactNode } from "react";
import { Link } from "@/components/ui/Link/Link";

type Props = {
  children: ReactNode;
  href: string;
};

export const HeaderMenuItem = ({ children, href }: Props) => {
  return (
    <li>
      <Link href={href}>{children}</Link>
    </li>
  );
};
