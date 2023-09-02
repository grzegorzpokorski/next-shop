import { Container } from "@/components/ui/Container/Container";
import { Skeleton } from "@/components/ui/Skeleton/Skeleton";

export const RecentlyViewedSkeleton = () => {
  return (
    <div className="mt-8" role="status">
      <Container as="div">
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
      </Container>
    </div>
  );
};
