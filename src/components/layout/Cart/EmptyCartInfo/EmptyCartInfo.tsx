import Link from "next/link";
import { Button } from "@/components/ui/Button/Button";

export const EmptyCartInfo = () => {
  return (
    <div className="flex flex-col h-full items-center justify-center gap-4 py-8">
      <p>Twój koszyk jest pusty</p>
      <Button asChild variant="indigo" size="lg">
        <Link href="/products">Zobacz naszą ofertę</Link>
      </Button>
    </div>
  );
};
