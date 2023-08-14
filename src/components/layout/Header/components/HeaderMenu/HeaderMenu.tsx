"use client";

import { twMerge } from "tailwind-merge";
import ReactFocusLock from "react-focus-lock";
import { SearchForm } from "@/components/layout/Header/components/SearchForm/SearchForm";
import { useIsAboveBreakpoint } from "@/hooks/useIsAboveBreakpoint";
import { useHeaderMenu } from "@/components/layout/Header/components/HeaderMenu/hooks/useHeaderMenu";
import { HeaderMenuItem } from "@/components/layout/Header/components/HeaderMenu/components/HeaderMenuItem/HeaderMenuItem";
import { HeaderMenuToggler } from "@/components/layout/Header/components/HeaderMenu/components/HeaderMenuToggler/HeaderMenuToggler";

export const HeaderMenu = () => {
  const { closeMobileMenu, isMobileMenuOpen, toggleMobileMenu } =
    useHeaderMenu();
  const isAboveBreakpoint = useIsAboveBreakpoint({ breakpoint: 768 });

  return (
    <ReactFocusLock
      as="nav"
      disabled={!isMobileMenuOpen || isAboveBreakpoint}
      returnFocus
      className="relative"
    >
      <HeaderMenuToggler
        onClick={toggleMobileMenu}
        isOpen={isMobileMenuOpen}
        menuId="menu"
      />
      <div
        className={twMerge(
          "fixed md:relative z-30 md:auto",
          "inset-0 h-[100dvh] md:h-auto py-16 md:py-0",
          "md:bg-transparent",
          "flex flex-col items-center justify-between md:flex-row gap-4",
          "overflow-y-auto",
          "transition-all",
          isMobileMenuOpen
            ? "translate-x-0 md:translate-x-0 bg-white dark:bg-neutral-900"
            : "-translate-x-full md:translate-x-0",
          "list-none gap-6 overflow-y-auto w-full lg:w-auto text-center",
          "px-3",
        )}
      >
        <div className="md:hidden w-full mt-3">
          <SearchForm />
        </div>
        <ul
          className="list-none flex flex-col items-center justify-center md:flex-row gap-4 my-auto md:my-0"
          role="list"
          id="menu"
        >
          <HeaderMenuItem href="/products" onClick={closeMobileMenu}>
            Oferta
          </HeaderMenuItem>
          <HeaderMenuItem href="/category/klawiatury" onClick={closeMobileMenu}>
            Klawiatury
          </HeaderMenuItem>
          <HeaderMenuItem href="/category/myszki" onClick={closeMobileMenu}>
            Myszki
          </HeaderMenuItem>
        </ul>
      </div>
    </ReactFocusLock>
  );
};
