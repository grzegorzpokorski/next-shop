"use client";

import { twMerge } from "tailwind-merge";
import ReactFocusLock from "react-focus-lock";
import { SearchForm } from "@/components/layout/Header/components/SearchForm/SearchForm";
import { useHeaderMenu } from "@/components/layout/Header/components/HeaderMenu/hooks/useHeaderMenu";
import { HeaderMenuItem } from "@/components/layout/Header/components/HeaderMenu/components/HeaderMenuItem/HeaderMenuItem";
import { HeaderMenuToggler } from "@/components/layout/Header/components/HeaderMenu/components/HeaderMenuToggler/HeaderMenuToggler";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const links = [
  {
    label: "Oferta",
    href: "/products",
  },
  {
    label: "Kategorie",
    href: "/categories",
  },
  {
    label: "O nas",
    href: "/o-nas",
  },
  {
    label: "Kontakt",
    href: "/kontakt",
  },
];

export const HeaderMenu = () => {
  const { closeMobileMenu, isMobileMenuOpen, toggleMobileMenu } =
    useHeaderMenu();
  const isDesktopView = useMediaQuery("(min-width: 1024px)");

  return (
    <ReactFocusLock
      as="nav"
      disabled={!isMobileMenuOpen || isDesktopView}
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
          "fixed lg:relative z-30 lg:auto",
          "inset-0 h-dvh lg:h-auto py-16 lg:py-0",
          "lg:bg-transparent",
          "flex flex-col items-center justify-between lg:flex-row gap-4",
          "overflow-y-auto",
          "transition-all",
          isMobileMenuOpen && !isDesktopView
            ? "translate-x-0 lg:translate-x-0 bg-white dark:bg-neutral-900"
            : "-translate-x-full lg:translate-x-0",
          "list-none gap-6 overflow-y-auto w-full lg:w-auto text-center",
          "px-3",
        )}
      >
        <div className="lg:hidden w-full mt-3">
          <SearchForm />
        </div>
        <ul
          className="list-none flex flex-col items-center justify-center lg:flex-row gap-6 my-auto lg:my-0 whitespace-nowrap lg:text-sm"
          role="list"
          id="menu"
        >
          {links.length > 0 &&
            links.map((link) => (
              <HeaderMenuItem
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
              >
                {link.label}
              </HeaderMenuItem>
            ))}
        </ul>
      </div>
    </ReactFocusLock>
  );
};
