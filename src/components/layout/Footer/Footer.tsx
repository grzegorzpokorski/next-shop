"use client";

import { Container } from "@/components/ui/Container/Container";
import { ThemeSwitch } from "@/components/blocks/ThemeSwich/ThemeSwitch";
import { Link } from "@/components/ui/Link/Link";

export const Footer = () => {
  return (
    <footer className="py-6 border-t bg-white dark:bg-neutral-900 text-sm">
      <Container as="div">
        <div className="flex flex-row flex-wrap justify-between items-center gap-4">
          <p className="text-sm flex-1 mr-full order-1">
            &copy; {new Date().getFullYear()} next-shop. All rights reserved.
            Created by{" "}
            <Link href="https://github.com/grzegorzpokorski" variant="indigo">
              Grzegorz Pokorski
            </Link>
          </p>
          <nav className="order-3 lg:order-2 w-full lg:w-auto">
            <ul
              className="list-none flex flex-wrap items-center lg:flex-row divide-x-2"
              role="list"
            >
              <li className="px-2 last:pr-0 first:pl-0">
                <Link href="/polityka-prywatnosci" variant="indigo">
                  Polityka prywatności
                </Link>
              </li>
              <li className="px-2 last:pr-0 first:pl-0">
                <Link href="/kontakt" variant="indigo">
                  Kontakt
                </Link>
              </li>
            </ul>
          </nav>
          <div className="order-2 lg:order-3">
            <ThemeSwitch />
          </div>
        </div>
      </Container>
    </footer>
  );
};
