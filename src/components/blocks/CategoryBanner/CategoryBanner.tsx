import Link from "next/link";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import type { Image as ImageType } from "@/lib/types";
import { Heading } from "@/components/ui/Heading/Heading";

type Props = {
  link: string;
  title: string;
  thumbnail?: ImageType;
  fullWidth?: boolean;
  priority?: boolean;
};

export const CategoryBanner = ({
  link,
  title,
  thumbnail,
  fullWidth,
  priority,
}: Props) => {
  return (
    <Link href={link} className={twMerge(fullWidth && "lg:col-span-2")}>
      <div className="bg-black min-h-[280px] lg:min-h-[320px] rounded-lg overflow-hidden relative border hover:border-indigo-500 motion-safe:transition-colors group">
        {thumbnail && (
          <Image
            src={thumbnail.url}
            alt={thumbnail.alt}
            width={thumbnail.width}
            height={thumbnail.height}
            sizes={fullWidth ? `100vw` : `(max-width: 1024px) 100vw, 50vw`}
            className="absolute h-full w-full object-cover transition ease-in-out duration-300 motion-safe:group-hover:scale-105"
            priority={priority}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 dark:from-black/80 flex flex-col justify-end p-8 lg:p-16 text-white">
          <Heading as="h3" size="4xl">
            {title}
          </Heading>
        </div>
      </div>
    </Link>
  );
};
