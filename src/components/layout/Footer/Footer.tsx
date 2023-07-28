"use client";

import { Container } from "@/components/ui/Container/Container";
import { ThemeSwitch } from "@/components/layout/Footer/components/ThemeSwich/ThemeSwitch";

export const Footer = () => {
  return (
    <footer className="py-6 border-t bg-white dark:bg-neutral-800">
      <Container as="div">
        <div className="flex flex-row justify-between items-center">
          <p>Copyright &copy; {new Date().getFullYear()}</p>
          <ThemeSwitch />
        </div>
      </Container>
    </footer>
  );
};
