"use client";

import { useState, useId } from "react";
import { twMerge } from "tailwind-merge";
import { HeaderMenuItem } from "@/components/layout/Header/components/HeaderMenu/components/HeaderMenuItem/HeaderMenuItem";
import { HeaderMenuToggler } from "@/components/layout/Header/components/HeaderMenu/components/HeaderMenuToggler/HeaderMenuToggler";

export const HeaderMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuId = useId();

  return (
    <nav className="order-1 md:order-2 md:mx-auto relative">
      <HeaderMenuToggler
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        isOpen={isMobileMenuOpen}
        menuId={menuId}
      />
      <ul
        className={twMerge(
          "fixed md:relative z-30 md:auto",
          "inset-0 py-16 md:py-0 border-t-2 md:border-0",
          "bg-white",
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
        id={menuId}
      >
        <HeaderMenuItem href="/test">All items</HeaderMenuItem>
        <HeaderMenuItem href="/test">Keyboards</HeaderMenuItem>
        <HeaderMenuItem href="/test">Mouses</HeaderMenuItem>
      </ul>
    </nav>
  );
};
