import type { ReactNode } from "react";
import { Link } from "@/components/ui/Link/Link";

type Props = {
  children: ReactNode;
  href: string;
  onClick: () => void;
};

export const HeaderMenuItem = ({ children, href, onClick }: Props) => {
  return (
    <li>
      <Link href={href} onClick={onClick}>
        {children}
      </Link>
    </li>
  );
};
