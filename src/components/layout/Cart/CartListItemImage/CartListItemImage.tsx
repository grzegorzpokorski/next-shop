import Image from "next/image";
import type { ProductWithSummary } from "@/lib/types";

type Props = {
  href: string;
  image: ProductWithSummary["thumbnail"];
};

export const CartListItemImage = ({ href, image }: Props) => {
  return (
    <a
      href={href}
      className="h-20 w-20 flex-shrink-0 overflow-hidden rounded border bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900/50 dark:hover:bg-neutral-900/40 motion-safe:transition-colors"
    >
      <Image
        src={image.url}
        width={image.width}
        height={image.height}
        alt={image.alt}
        className="h-full w-full object-cover object-center"
      />
    </a>
  );
};
