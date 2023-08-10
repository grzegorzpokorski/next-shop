import Link from "next/link";
import Image from "next/image";
import type { Image as ImageType } from "@/lib/types";
import { Heading } from "@/components/ui/Heading/Heading";

type Props = {
  link: string;
  thumbnail: ImageType;
  title: string;
};

export const CategoryBanner = ({ link, thumbnail, title }: Props) => {
  return (
    <Link href={link}>
      <div className="bg-black min-h-[280px] lg:min-h-[320px] rounded-md overflow-hidden relative border-2 hover:border-indigo-500 motion-safe:transition-colors group">
        <Image
          src={thumbnail.url}
          alt={thumbnail.alt}
          width={thumbnail.width}
          height={thumbnail.height}
          className="absolute h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 dark:from-black/80 flex flex-col justify-end p-16 text-white">
          <Heading as="h3" size="4xl">
            {title}
          </Heading>
        </div>
      </div>
    </Link>
  );
};
