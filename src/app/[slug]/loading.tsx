import { Skeleton } from "@/components/ui/Skeleton/Skeleton";

export default function Page() {
  return (
    <div role="status">
      <div className="container max-w-[65ch] mx-auto px-3 lg:px-6 pb-16">
        <div className="flex flex-col gap-4 justify-between pt-16 pb-12 max-w-3xl">
          <Skeleton className="h-9 w-[30%]" />
        </div>
        <div className="flex flex-col gap-y-3">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-[95%]" />
          <Skeleton className="h-4 w-[98%]" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-[50%]" />
        </div>
      </div>
    </div>
  );
}
