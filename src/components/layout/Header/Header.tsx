import { FaShoppingCart } from "react-icons/fa";
import { Container } from "@/components/ui/Container/Container";
import { HeaderLogo } from "@/components/layout/Header/components/HeaderLogo/HeaderLogo";
import { HeaderMenu } from "@/components/layout/Header/components/HeaderMenu/HeaderMenu";
import { Button } from "@/components/ui/Button/Button";

export const Header = () => {
  return (
    <header className="bg-white dark:bg-neutral-900 border-b dark:border-neutral-800">
      <Container as="div">
        <div className="grid grid-cols-3 items-center justify-center h-20">
          <div className="flex mx-auto md:m-0 order-2 md:order-1">
            <HeaderLogo>Next Shop</HeaderLogo>
          </div>
          <HeaderMenu />
          <div className="order-3 flex flex-row justify-end">
            <Button variant="outline-indigo">
              <FaShoppingCart />
              <span className="sr-only">open cart</span>
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
