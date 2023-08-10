import { Container } from "@/components/ui/Container/Container";
import { HeaderLogo } from "@/components/layout/Header/components/HeaderLogo/HeaderLogo";
import { HeaderMenu } from "@/components/layout/Header/components/HeaderMenu/HeaderMenu";
import { CartLink } from "@/components/layout/Header/components/CartLink/CartLink";

export const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full bg-white dark:bg-neutral-900/90 backdrop-blur-md border-b">
      <Container as="div">
        <div className="grid grid-cols-3 items-center justify-center h-20">
          <div className="flex mx-auto md:m-0 order-2 md:order-1">
            <HeaderLogo>Next Shop</HeaderLogo>
          </div>
          <HeaderMenu />
          <div className="order-3 flex flex-row justify-end">
            <CartLink />
          </div>
        </div>
      </Container>
    </header>
  );
};
