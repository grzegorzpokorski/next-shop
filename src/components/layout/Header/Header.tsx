import { SearchForm } from "@/components/layout/Header/components/SearchForm/SearchForm";
import { Container } from "@/components/ui/Container/Container";
import { HeaderLogo } from "@/components/layout/Header/components/HeaderLogo/HeaderLogo";
import { HeaderMenu } from "@/components/layout/Header/components/HeaderMenu/HeaderMenu";
import { CartLink } from "@/components/layout/Header/components/CartLink/CartLink";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md border-b">
      <Container as="div">
        <div className="flex flex-row items-center justify-between md:gap-4 h-20">
          <div className="flex flex-row-reverse md:flex-row md:gap-8 items-center w-full">
            <div className="mx-auto md:mx-0">
              <HeaderLogo>Next Shop</HeaderLogo>
            </div>
            <HeaderMenu />
          </div>
          <div className="flex flex-row justify-end items-center md:gap-4 md:w-full">
            <div className="hidden md:flex w-full justify-end">
              <SearchForm />
            </div>
            <CartLink />
          </div>
        </div>
      </Container>
    </header>
  );
};
