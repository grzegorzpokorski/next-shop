import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { Button } from "@/components/ui/Button/Button";

export const CartOpener = () => {
  return (
    <Button variant="outline" size="icon" asChild className="relative">
      <Link href="/cart">
        <FaShoppingCart />
        <span className="sr-only">Otwóż koszyk</span>
        <div className="absolute right-0 top-0 -mr-2 -mt-2 h-5 w-5 rounded bg-indigo-600 text-xs font-medium text-white flex flex-col items-center justify-center">
          <span className="sr-only">- znajduje się w nim</span>
          15
          <span className="sr-only">sztuk towaru</span>
        </div>
      </Link>
    </Button>
  );
};
