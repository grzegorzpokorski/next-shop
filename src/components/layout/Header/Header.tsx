import { Suspense } from "react";
import { SearchForm } from "@/components/layout/Header/components/SearchForm/SearchForm";
import { Container } from "@/components/ui/Container/Container";
import { HeaderLogo } from "@/components/layout/Header/components/HeaderLogo/HeaderLogo";
import { HeaderMenu } from "@/components/layout/Header/components/HeaderMenu/HeaderMenu";
import { CartOpener } from "@/components/layout/Cart/CartOpener/CartOpener";
import { Skeleton } from "@/components/ui/Skeleton/Skeleton";

export const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md border-b">
      <Container as="div">
        <div className="flex flex-row items-center justify-between lg:gap-4 h-20">
          <div className="flex flex-row-reverse lg:flex-row lg:gap-8 items-center w-full">
            <div className="mx-auto lg:mx-0">
              <HeaderLogo>Next Shop</HeaderLogo>
            </div>
            <Suspense>
              <HeaderMenu />
            </Suspense>
          </div>
          <div className="flex flex-row justify-end items-center lg:gap-4 lg:w-full">
            <div className="hidden lg:flex w-full justify-end">
              <Suspense>
                <SearchForm />
              </Suspense>
            </div>
            <Suspense
              fallback={
                <Skeleton
                  className="aspect-square h-11 w-11"
                  aria-label="ładowanie"
                />
              }
            >
              <CartOpener />
            </Suspense>
          </div>
        </div>
      </Container>
    </header>
  );
};
