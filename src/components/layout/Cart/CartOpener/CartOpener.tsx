import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { cookies } from "next/headers";
import { Button } from "@/components/ui/Button/Button";
import { getCartById } from "@/lib/queries/getCartById";

export const CartOpener = async () => {
  const cookieStore = cookies();
  const cookieWithCartId = cookieStore.get("cartId");
  const cartId = cookieWithCartId?.value;

  if (!cookieWithCartId || !cartId) {
    return <Btn />;
  }

  const cart = await getCartById({ id: cartId });
  if (!cart) return <Btn />;

  return <Btn qty={cart.totalQty} />;
};

const Btn = ({ qty }: { qty?: number }) => {
  return (
    <Button variant="outline" size="icon" asChild className="relative">
      <Link href="/cart">
        <FaShoppingCart />
        <span className="sr-only">Otwóż koszyk</span>
        {qty && (
          <div className="absolute right-0 top-0 -mr-2 -mt-2 h-5 w-5 rounded bg-indigo-600 text-xs font-medium text-white flex flex-col items-center justify-center">
            <>
              <span className="sr-only">- znajduje się w nim</span>
              {qty}
              <span className="sr-only">sztuk towaru</span>
            </>
          </div>
        )}
      </Link>
    </Button>
  );
};
