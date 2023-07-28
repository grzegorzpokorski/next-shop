"use client";

import { Container } from "@/components/ui/Container/Container";
import { ThemeSwitch } from "@/components/layout/Footer/components/ThemeSwich/ThemeSwitch";
import { Link } from "@/components/ui/Link/Link";

export const Footer = () => {
  return (
    <footer className="py-6 border-t bg-white dark:bg-neutral-900">
      <Container as="div">
        <div className="flex flex-row justify-between items-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} next-shop. All rights reserved.
            Created by{" "}
            <Link href="https://github.com/grzegorzpokorski">
              Grzegorz Pokorski
            </Link>
          </p>
          <ThemeSwitch />
        </div>
      </Container>
    </footer>
  );
};
