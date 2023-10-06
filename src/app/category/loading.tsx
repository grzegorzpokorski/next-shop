import { Container } from "@/components/ui/Container/Container";
import { Skeleton } from "@/components/ui/Skeleton/Skeleton";
import { env } from "@/lib/env.mjs";

export default function Page() {
  return (
    <div role="status" aria-label="ładowanie">
      <Container as="div">
        <div className="flex flex-col gap-4 justify-between pt-16 pb-12 max-w-3xl">
          <Skeleton className="w-[70%] h-10 rounded-md" />
          <Skeleton className="h-6 w-full lg:w-[60%]" />
          <Skeleton className="h-6 w-full lg:w-[40%]" />
        </div>
        <div>
          <div className="flex flex-col lg:flex-row items-center justify-end">
            <Skeleton className="h-10 w-full lg:w-72" />
          </div>
          <div className="list-none py-4 gap-3 md:gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array(env.PRODUCTS_PER_PAGE)
              .fill(0)
              .map((_, idx) => (
                <Skeleton key={idx} className="aspect-square h-full w-full" />
              ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
