import { Container } from "@/components/ui/Container/Container";
import { Skeleton } from "@/components/ui/Skeleton/Skeleton";

export default function Page() {
  return (
    <div role="status">
      <Container as="div">
        <div className="flex flex-col gap-4 justify-between pt-16 pb-12 max-w-3xl">
          <Skeleton className="w-[70%] h-10 rounded-md" />
        </div>
        <div className="flex flex-col gap-0.5 mb-16">
          {Array(3)
            .fill(0)
            .map((_, idx) => (
              <Skeleton key={idx} className="w-full h-44 lg:h-48" />
            ))}
        </div>
      </Container>
    </div>
  );
}
