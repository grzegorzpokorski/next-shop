"use client";

import { twMerge } from "tailwind-merge";
import ReactFocusLock from "react-focus-lock";
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
      className="order-1 md:order-2 md:mx-auto relative"
    >
      <HeaderMenuToggler
        onClick={toggleMobileMenu}
        isOpen={isMobileMenuOpen}
        menuId="menu"
      />
      <ul
        className={twMerge(
          "fixed md:relative z-30 md:auto",
          "inset-0 h-screen md:h-auto py-16 md:py-0",
          "bg-white dark:bg-neutral-900 md:bg-transparent",
          "list-none flex flex-row gap-4",
          "flex flex-col items-center justify-center md:flex-row",
          "overflow-y-auto",
          "transition-all",
          isMobileMenuOpen
            ? "translate-x-0 md:translate-x-0"
            : "-translate-x-full md:translate-x-0",
          "list-none gap-6 overflow-y-auto w-full lg:w-auto text-center",
        )}
        role="list"
        id="menu"
      >
        <HeaderMenuItem href="/offer" onClick={closeMobileMenu}>
          Oferta
        </HeaderMenuItem>
        <HeaderMenuItem href="/keyboards" onClick={closeMobileMenu}>
          Klawiatury
        </HeaderMenuItem>
        <HeaderMenuItem href="/mice" onClick={closeMobileMenu}>
          Myszki
        </HeaderMenuItem>
      </ul>
    </ReactFocusLock>
  );
};
