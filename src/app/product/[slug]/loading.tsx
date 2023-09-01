import { Container } from "@/components/ui/Container/Container";
import { Skeleton } from "@/components/ui/Skeleton/Skeleton";

export default function Page() {
  return (
    <div className="flex flex-col gap-8 py-8" role="status">
      <Container as="article" aria-labelledby="product-title">
        <div className="flex flex-col md:flex-row gap-8 bg-white dark:bg-black p-8 rounded-md border">
          <div className="flex flex-col h-full w-full md:w-1/2 overflow-hidden md:sticky md:top-20">
            <Skeleton className="aspect-square h-full w-full" />
          </div>
          <div className="flex flex-col items-start justify-center gap-4 w-full md:w-1/2">
            <Skeleton className="w-20 h-6 rounded-full" />
            <Skeleton className="w-full lg:w-[80%] h-10 mb-4" />
            <Skeleton className="w-32 h-8" />
            <Skeleton className="w-full h-4" />
            <Skeleton className="w-full h-4" />
            <Skeleton className="w-full h-4" />
            <Skeleton className="w-full h-4" />
            <Skeleton className="w-[80%] h-4" />
            <Skeleton className="w-56 h-11" />
          </div>
        </div>
        <div className="mt-8">
          <Skeleton className="w-80 h-8" />
          <div className="list-none py-4 gap-3 md:gap-4 flex flex-row overflow-x-auto">
            {Array(4)
              .fill(0)
              .map((_, idx) => (
                <Skeleton
                  key={idx}
                  className="aspect-square h-full min-w-[280px] w-full"
                />
              ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
