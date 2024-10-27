import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { cookies } from "next/headers";
import { Button } from "@/components/ui/Button/Button";
import { getCartById } from "@/lib/queries/cart/getCartById";

export const CartOpener = async () => {
  const cookieStore = await cookies();
  const cartId = cookieStore.get("cartId")?.value;
  if (!cartId) return <Btn />;

  const cart = await getCartById({ id: cartId });
  if (!cart) return <Btn />;

  return <Btn qty={cart.totalQty} />;
};

type BtnProps = {
  qty?: number;
};

const Btn = ({ qty = 0 }: BtnProps) => {
  return (
    <Button variant="outline" size="icon" asChild className="relative">
      <Link href="/cart">
        <FaShoppingCart />
        <span className="sr-only">Otwóż koszyk</span>
        {qty > 0 && (
          <div className="absolute right-0 top-0 -mr-2 -mt-2 h-5 w-5 rounded bg-indigo-600 text-xs font-medium text-white flex flex-col items-center justify-center">
            <span className="sr-only">- znajduje się w nim</span>
            {qty}
            <span className="sr-only">sztuk towaru</span>
          </div>
        )}
      </Link>
    </Button>
  );
};
