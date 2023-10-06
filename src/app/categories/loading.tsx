import { Container } from "@/components/ui/Container/Container";
import { Skeleton } from "@/components/ui/Skeleton/Skeleton";
import { env } from "@/lib/env.mjs";

export default function Page() {
  return (
    <div role="status" aria-label="ładowanie">
      <Container as="div">
        <div className="flex flex-col gap-4 justify-between pt-16 pb-12 max-w-3xl">
          <Skeleton className="w-[70%] h-10 rounded-md" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-8">
          {Array(env.PRODUCTS_PER_PAGE)
            .fill(0)
            .map((_, idx) => (
              <Skeleton key={idx} className="h-80 w-full" />
            ))}
        </div>
      </Container>
    </div>
  );
}
